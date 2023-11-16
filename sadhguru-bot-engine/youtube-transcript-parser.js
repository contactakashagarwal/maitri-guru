const { YoutubeTranscript } = require('youtube-transcript');
const { HuggingFaceInference } = require('langchain/llms/hf');
const { loadSummarizationChain } = require('langchain/chains');
const { TokenTextSplitter } = require('langchain/text_splitter');
const { SearchApiLoader } = require('langchain/document_loaders/web/searchapi');
const { ChatAnthropic } = require('langchain/chat_models/anthropic');
const { PromptTemplate } = require('langchain/prompts');
const { Credentials } = require('./credentials');
const { Config } = require('./config');

class VideoTranscript {
    constructor() {}

    async getVideoTranscripts() {
        const videoTranscripts = [];
        const sadhguruVideos = await this.getSadhguruVideos();

        for (let i = 0; i < sadhguruVideos.length; i++) {
            const currVideo = sadhguruVideos[i];
            const transcript = await this.getRawTranscript(currVideo.videoId);
            // const summarizedTranscript = await this.summarizeTranscript(transcript);
            if (transcript) {
                videoTranscripts.push({ ...currVideo, transcript: transcript });
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
                .join(' ');
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

    // async summarizeTranscript(transcript) {
    //     // const splitter = new TokenTextSplitter({
    //     //     chunkSize: 1000,
    //     //     chunkOverlap: 250,
    //     // });

    //     // const docsSummary = await splitter.splitDocuments(docs);
    //     // console.log(docsSummary);

    //     const llmSummary = new ChatAnthropic({
    //         modelName: 'claude-2',
    //         temperature: 0.3,
    //     });

    //     const summaryTemplate = `
    //         You are an expert in summarizing YouTube videos.
    //         Your goal is to create a summary of a podcast.
    //         Below you find the transcript of a podcast:
    //         --------
    //         {text}
    //         --------

    //         The transcript of the podcast will also be used as the basis for a question and answer bot.
    //         Provide some examples questions and answers that could be asked about the podcast. Make these questions very specific.

    //         Total output will be a summary of the video and a list of example questions the user could ask of the video.

    //         SUMMARY AND QUESTIONS:
    //         `;

    //     const SUMMARY_PROMPT = PromptTemplate.fromTemplate(summaryTemplate);

    //     const summaryRefineTemplate = `
    //         You are an expert in summarizing YouTube videos.
    //         Your goal is to create a summary of a podcast.
    //         We have provided an existing summary up to a certain point: {existing_answer}

    //         Below you find the transcript of a podcast:
    //         --------
    //         {text}
    //         --------

    //         Given the new context, refine the summary and example questions.
    //         The transcript of the podcast will also be used as the basis for a question and answer bot.
    //         Provide some examples questions and answers that could be asked about the podcast. Make
    //         these questions very specific.
    //         If the context isn't useful, return the original summary and questions.
    //         Total output will be a summary of the video and a list of example questions the user could ask of the video.

    //         SUMMARY AND QUESTIONS:
    //         `;

    //     const SUMMARY_REFINE_PROMPT = PromptTemplate.fromTemplate(summaryRefineTemplate);

    //     // const huggingFaceLlm = new HuggingFaceInference({
    //     //     apiKey: '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',
    //     //     temperature: 0,
    //     // });

    //     const summarizeChain = loadSummarizationChain(llmSummary, {
    //         type: 'refine',
    //         verbose: true,
    //         questionPrompt: SUMMARY_PROMPT,
    //         refinePrompt: SUMMARY_REFINE_PROMPT,
    //     });

    //     const summary = await summarizeChain.run([{ pageContent: transcript }]);

    //     console.log(`Summary ::`, summary);
    //     return summary;
    // }

    purify(text) {
        return text.replace('[Music]', '');
    }
}

module.exports.VideoTranscript = VideoTranscript;

// new VideoTranscript().getVideoTranscripts();
