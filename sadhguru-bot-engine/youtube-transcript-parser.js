const { YoutubeTranscript } = require('youtube-transcript');
const { HuggingFaceInference } = require('langchain/llms/hf');
const { loadSummarizationChain } = require('langchain/chains');
const { TokenTextSplitter } = require('langchain/text_splitter');
const { SearchApiLoader } = require('langchain/document_loaders/web/searchapi');
const { ChatAnthropic } = require('langchain/chat_models/anthropic');
const { PromptTemplate } = require('langchain/prompts');
const { Credentials } = require('./credentials');
const { Config } = require('./config');
const axios = require('axios');
const { HuggingFace } = require('huggingface');

class VideoTranscript {
    async getVideoTranscripts() {
        const videoTranscripts = [];
        const sadhguruVideos = await this.getSadhguruVideos();

        for (let i = 0; i < sadhguruVideos.length; i++) {
            const currVideo = sadhguruVideos[i];
            const transcript = await this.getRawTranscript(currVideo.videoId);
            if (transcript) {
                const summarizedTranscript = await this.summarizeTranscriptAnyScale(transcript);
                videoTranscripts.push({ ...currVideo, transcript: summarizedTranscript });
            }
        }

        return videoTranscripts;
    }

    async getRawTranscript(videoId) {
        try {
            const transcript = await YoutubeTranscript.fetchTranscript(videoId);
            return transcript
                .map((data) => this.purify(data.text))
                .filter((text) => text != '')
                .join('\n');
        } catch (err) {
            // console.log(err);
            return '';
        }
    }

    async getSadhguruVideos() {
        const urlToFetchSadhguruVideos = `https://www.googleapis.com/youtube/v3/search?key=${Credentials.YOUTUBE_API_KEY}&channelId=${Config.SADHGURU_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${Config.VIDEOS_TO_FETCH}`;
        const response = await fetch(urlToFetchSadhguruVideos);
        const youtubeResponse = await response.json();
        const sadhguruVideos = youtubeResponse.items;

        return sadhguruVideos.map((video) => ({
            title: video.snippet.title,
            description: video.snippet.description,
            videoId: video.id.videoId,
        }));
    }

    async summarizeTranscriptHuggingFace(transcript) {
        const hf = new HuggingFace(Credentials.HUGGING_FACE_API_KEY);
        const summarization = await hf.summarization({ inputs: transcript, model: 'Falconsai/text_summarization' });
        console.log(summarization.summary_text);
        return summarization.summary_text;
    }

    async summarizeTranscriptAnyScale(transcript) {
        const summaryTemplate = `
                You are an expert in summarizing YouTube videos.
                Your goal is to create a summary of sadhguru's preachings.
                Below you find the transcript of a sadhguru's video:
                --------
                ${transcript}
                --------

                The transcript of the video will also be used as the basis for a question and answer bot.
                Provide some examples questions and answers that could be asked about the video. Make these questions very specific.

                Total output will be a summary of the video and a list of example questions the user could ask of the video.
                I don't want example of questions that could be asked about the video.
                There should be line break after each question answer pair.

                SUMMARY

                QUESTIONS AND ANSWERS (with Q and A)
                `;

        const url = 'https://api.endpoints.anyscale.com/v1/chat/completions';
        const options = {
            method: 'POST',
            url: url,
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${Credentials.ANYSCALE_API_TOKEN}`,
            },
            data: {
                model: 'codellama/CodeLlama-34b-Instruct-hf',
                temperature: 0.7,
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: summaryTemplate },
                ],
            },
        };

        try {
            const response = await axios.request(options);
            const llmResponse = response.data.choices[0].message.content;

            return this.formatLLMResponse(llmResponse.trim());
        } catch (error) {
            console.error(error);
        }
    }

    purify(text) {
        return text.replace('[Music]', '').replace('[Applause]', '');
    }

    formatLLMResponse(llmResponse) {
        // Define a regular expression pattern to match the summary content
        const regexSummary = /SUMMARY:(.+?)QUESTIONS AND ANSWERS:/s;

        // Extract the summary using the regular expression
        const summaryMatch = llmResponse.match(regexSummary);

        // Check if a match is found and extract the summary content
        const summary = summaryMatch ? summaryMatch[1].trim() : 'Summary not found.';

        // Log the extracted summary
        // console.log(`Summary => `, summary);

        // Define a regular expression pattern to match questions and answers
        const regexQnA = /Q: (.+?)\nA: (.+?)(?=\n\n|$)/gs;

        // Extract questions and answers using the regular expression
        const matches = Array.from(llmResponse.matchAll(regexQnA));
        // Create an array of objects with questions and answers
        const qaPairs = matches.map((match) => ({
            question: match[1].trim(),
            answer: match[2].trim(),
        }));

        // Log the extracted questions and answers
        // qaPairs.forEach((qa, index) => {
        //     console.log(`Question ${index + 1}: ${qa.question}`);
        //     console.log(`Answer ${index + 1}: ${qa.answer}`);
        //     console.log('---');
        // });

        return { summary, qaPairs: qaPairs };
    }
}

module.exports.VideoTranscript = VideoTranscript;
