//vectorize these transcripts
// const dataEmbedding = new DataEmbedding();
// const embeddedData = await dataEmbedding.getEmbeddedData(transcripts[0]);
// console.log(embeddedData);

// await this.astraDbClient.connect();
// const rs = await this.astraDbClient.execute('SELECT * FROM system.local');
// console.log(rs);
// console.log(`Your cluster returned ${rs.rowLength} row(s)`);
// await this.astraDbClient.shutdown();

const resolve = require('path').resolve;
const ASTRA_DB_SECURE_BUNDLE_PATH =
    '../../../Chatbot/maitri-guru/maitri-guru/sadhguru-bot-engine/asset/secure-connect-transcripts-vector.zip';

console.log(resolve(ASTRA_DB_SECURE_BUNDLE_PATH));
