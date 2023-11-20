//vectorize these transcripts
// const dataEmbedding = new DataEmbedding();
// const embeddedData = await dataEmbedding.getEmbeddedData(transcripts[0]);
// console.log(embeddedData);

// await this.astraDbClient.connect();
// const rs = await this.astraDbClient.execute('SELECT * FROM system.local');
// console.log(rs);
// console.log(`Your cluster returned ${rs.rowLength} row(s)`);
// await this.astraDbClient.shutdown();

// const resolve = require('path').resolve;
// const ASTRA_DB_SECURE_BUNDLE_PATH =
//     '../../../Chatbot/maitri-guru/maitri-guru/sadhguru-bot-engine/asset/secure-connect-transcripts-vector.zip';

// console.log(resolve(ASTRA_DB_SECURE_BUNDLE_PATH));

// const text = `
// SUMMARY:

// The podcast discusses the significance of Diwali and the science behind it. The festival is not just a religious celebration, but it has a scientific basis. The podcast explains that the festival is celebrated on the 13th day of the Kika month which is a lunar cycle. It is celebrated to help people pass through the winter months without getting sick, depressed, or losing their sense of purpose. The podcast also explains that the festival is not just about money, but about health and well-being. It is a time to come together as a family and community to celebrate and honor the deity Dantri, who is the source of energy, health, and well-being.

// QUESTIONS WITH ANSWERS:

// Q: What is the significance of Diwali according to the podcast?
// A: Diwali is a festival that is celebrated to help people pass through the winter months without getting sick, depressed, or losing their sense of purpose. It is a time to come together as a family and community to celebrate and honor the deity Dantri, who is the source of energy, health, and well-being.

// Q: What is the science behind Diwali, according to the podcast?
// A: The science behind Diwali is that the festival is celebrated on the 13th day of the Kika month which is a lunar cycle. This day is called trayodashi, and it is believed to be the day when the earth's orbit changes, causing the sun's rays to hit the earth differently, thus affecting the human body and the environment.

// Q: What is the role of Dantri in Diwali, according to the podcast?
// A: Dantri is the deity who is the source of energy, health, and well-being. The podcast explains that Dantri is the one who is supposed to be worshiped on the Diwali day.

// Q: Why is Diwali not just a religious celebration, according to the podcast?
// A: Diwali is not just a religious celebration because it has a scientific basis. The podcast explains that the festival is celebrated to help people pass through the winter months without getting sick, depressed, or losing their sense of purpose.

// Q: What is the significance of the 13th day of the Kika month in Diwali, according to the podcast?
// A: The 13th day of the Kika month is called trayodashi, and it is believed to be the day when the earth's orbit changes, causing the sun's rays to hit the earth differently, thus affecting the human body and the environment.
// `;

// // Define a regular expression pattern to match the summary content
// const regexSummary = /SUMMARY:(.+?)QUESTIONS WITH ANSWERS:/s;

// // Extract the summary using the regular expression
// const summaryMatch = text.match(regexSummary);

// // Check if a match is found and extract the summary content
// const summary = summaryMatch ? summaryMatch[1].trim() : 'Summary not found.';

// // Log the extracted summary
// console.log(`Summary => `, summary);

// // Define a regular expression pattern to match questions and answers
// const regexQnA = /Q: (.+?)\nA: (.+?)(?=\n\n|$)/gs;

// // Extract questions and answers using the regular expression
// const matches = Array.from(text.matchAll(regexQnA));

// // Create an array of objects with questions and answers
// const qaPairs = matches.map((match) => ({
//     question: match[1].trim(),
//     answer: match[2].trim(),
// }));

// // Log the extracted questions and answers
// qaPairs.forEach((qa, index) => {
//     console.log(`Question ${index + 1}: ${qa.question}`);
//     console.log(`Answer ${index + 1}: ${qa.answer}`);
//     console.log('---');
// });

// function getData() {
//     const text = `  SUMMARY:
// Sadhguru's video discusses the importance of competence and clarity in achieving success. He emphasizes that desire alone is not enough to make someone successful, and that competence is the key to success. He also mentions that the scorekeepers' work is to hit the ball according to its merit, and that everyone wants to win in their life, not just in a game.

// QUESTIONS AND ANSWERS:

// Q: What is the key to success, according to Sadhguru?
// A: Competence is the key to success, not desire.

// Q: What is the role of desire in achieving success?
// A: Desire gives us direction, but it is not enough to make us successful.

// Q: What is the scorekeepers' work, according to Sadhguru?
// A: The scorekeepers' work is to hit the ball according to its merit.

// Q: What is the importance of clarity in achieving success?
// A: Clarity is necessary to see things the way they are and do what needs to be done at that moment.

// Q: How can we win in our life, not just in a game?
// A: By doing our job to the best of our ability, we can win in our life.

// Q: What is the role of competence in achieving success?
// A: Competence is necessary to hit the ball and make a successful shot.

// Q: How can we be successful in our life?
// A: By being competent and clear in our actions, we can be successful in our life.`;
//     // Define a regular expression pattern to match the summary content
//     const regexSummary = /SUMMARY:(.+?)QUESTIONS AND ANSWERS:/s;

//     // Extract the summary using the regular expression
//     const summaryMatch = text.match(regexSummary);

//     // Check if a match is found and extract the summary content
//     const summary = summaryMatch ? summaryMatch[1].trim() : 'Summary not found.';

//     // Log the extracted summary
//     // console.log(`Summary => `, summary);

//     // Define a regular expression pattern to match questions and answers
//     const regexQnA = /Q: (.+?)\nA: (.+?)(?=\n\n|$)/gs;

//     // Extract questions and answers using the regular expression
//     const matches = Array.from(text.matchAll(regexQnA));
//     console.log(matches);
//     // Create an array of objects with questions and answers
//     const qaPairs = matches.map((match) => ({
//         question: match[1].trim(),
//         answer: match[2].trim(),
//     }));

//     // Log the extracted questions and answers
//     qaPairs.forEach((qa, index) => {
//         console.log(`Question ${index + 1}: ${qa.question}`);
//         console.log(`Answer ${index + 1}: ${qa.answer}`);
//         console.log('---');
//     });

//     return { summary, qaPairs: qaPairs };
// }

// console.log(getData());
// // console.log(qaPairs);

// const { YoutubeTranscript } = require('youtube-transcript');
// const { VideoTranscript } = require('./youtube-transcript-parser');
// async function getRawTranscript(videoId) {
//     try {
//         const transcript = await YoutubeTranscript.fetchTranscript(videoId);
//         return transcript
//             .map((data) => data.text)
//             .filter((text) => text != '')
//             .join('\n');
//     } catch (err) {
//         // console.log(err);
//         return '';
//     }
// }

// getRawTranscript('IjTbiHCvQr8').then(async (t) => {
//     const yt = new VideoTranscript();
//     console.log(await yt.summarizeTranscriptAnyScale(t));
// });
