const { CassandraStore } = require('langchain/vectorstores/cassandra');
const { Credentials } = require('./credentials');
const resolve = require('path').resolve;
class VectorDataRepository {
    ASTRA_DB_SECURE_BUNDLE_PATH =
        '../../../Chatbot/maitri-guru/maitri-guru/sadhguru-bot-engine/asset/secure-connect-transcripts-vector.zip';

    astraDbConfig = {
        cloud: {
            secureConnectBundle: resolve(this.ASTRA_DB_SECURE_BUNDLE_PATH),
        },
        credentials: {
            username: Credentials.ASTRA_DB_CLIENT_ID,
            password: Credentials.ASTRA_DB_CLIENT_SECRET,
        },
        keyspace: Credentials.ASTRA_DB_KEYSPACE,
        dimensions: 384,
        table: 'transcripts',
        indices: [{ name: 'question', value: '(question)' }],
        primaryKey: {
            name: 'id',
            type: 'int',
        },
        metadataColumns: [
            {
                name: 'title',
                type: 'text',
            },
            {
                name: 'question',
                type: 'text',
            },
            {
                name: 'summary',
                type: 'text',
            },
        ],
    };

    async storeVectorizeData(videosData, embedding) {
        let count = 1;
        const metadatas = [];
        videosData.forEach((video) => {
            video.transcript.qaPairs.forEach((qa) => {
                const metadata = {
                    id: count++,
                    title: video.title,
                    question: qa.question,
                    summary: video.transcript.summary,
                };
                metadatas.push(metadata);
            });
        });

        const answers = videosData.flatMap((v) => v.transcript.qaPairs.map((qa) => qa.answer));
        const vectorStore = await CassandraStore.fromTexts(answers, metadatas, embedding, this.astraDbConfig);
        return vectorStore;
    }

    getVectorStore(embedding) {
        return new CassandraStore(embedding, this.astraDbConfig);
    }
}

module.exports.VectorDataRepository = VectorDataRepository;
