const { Credentials } = require('./credentials');
const { VectorDataRepository } = require('./data-repository');
const { DataEmbedding } = require('./openai-embeddings');
const { VideoTranscript } = require('./youtube-transcript-parser');
const { HuggingFaceInferenceEmbeddings } = require('langchain/embeddings/hf');

class Main {
    async start() {
        //fetch all transcripts
        const videoTranscript = new VideoTranscript();
        const sadhguruTranscripts = await videoTranscript.getVideoTranscripts();
        console.log(sadhguruTranscripts);

        //store these transcripts as vectors in Datastax cassandra
        const hfEmbedding = new HuggingFaceInferenceEmbeddings({
            apiKey: Credentials.HUGGING_FACE_API_KEY,
            model: 'sentence-transformers/all-MiniLM-L6-v2',
        });

        const dataRepository = new VectorDataRepository();
        const vectorStore = await dataRepository.storeVectorizeData(sadhguruTranscripts, hfEmbedding);

        console.log('\n\n***********Question being answered*********');
        const result = await vectorStore.similaritySearch('What tip would you give to Indian Cricket Team', 2);
        console.log(result);
    }
}

const main = new Main();
main.start();
