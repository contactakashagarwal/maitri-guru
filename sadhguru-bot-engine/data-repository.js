const { CassandraStore } = require('langchain/vectorstores/cassandra');
const { Credentials } = require('./credentials');
class VectorDataRepository {
    ASTRA_DB_SECURE_BUNDLE_PATH = '../asset/secure-connect-transcripts-vector.zip';

    astraDbConfig;
    constructor() {
        this.astraDbConfig = {
            cloud: {
                secureConnectBundle: this.ASTRA_DB_SECURE_BUNDLE_PATH,
            },
            credentials: {
                username: Credentials.ASTRA_DB_CLIENT_ID,
                password: Credentials.ASTRA_DB_CLIENT_SECRET,
            },
            keyspace: Credentials.ASTRA_DB_KEYSPACE,
            dimensions: 384,
            table: 'transcripts',
            indices: [{ name: 'title', value: '(title)' }],
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
                    name: 'description',
                    type: 'text',
                },
            ],
        };
    }

    async storeVectorizeData(transcriptsData, embedding) {
        let count = 1;
        const transcripts = transcriptsData.map((data) => data.transcript);
        const metadatas = transcriptsData.map((data) => ({
            id: count++,
            title: data.title ?? 't',
            description: data.description ?? 'd',
        }));

        // console.log(transcriptsData);

        const vectorStore = await CassandraStore.fromTexts(transcripts, metadatas, embedding, this.astraDbConfig);
        return vectorStore;
    }
}

module.exports.VectorDataRepository = VectorDataRepository;
