const { Credentials } = require('./credentials');
const { VectorDataRepository } = require('./data-repository');
const { VideoTranscript } = require('./youtube-transcript-parser');
const { HuggingFaceInferenceEmbeddings } = require('langchain/embeddings/hf');

class Main {
    async start() {
        /**
         * Uncomment this part when we want to Fetch, preprocess and store data in Db again.
         *  
            //fetch all transcripts
            const videoTranscript = new VideoTranscript();
            const sadhguruTranscripts = await videoTranscript.getVideoTranscripts();
            // console.log(JSON.stringify(sadhguruTranscripts));

            // Using HuffingFace vector embedding
            const hfEmbedding = new HuggingFaceInferenceEmbeddings({
                apiKey: Credentials.HUGGING_FACE_API_KEY,
                model: 'sentence-transformers/all-MiniLM-L6-v2',
            });

            //store these transcripts as vectors in Datastax cassandra
            const dataRepository = new VectorDataRepository();
            const vectorStore = await dataRepository.storeVectorizeData(sadhguruTranscripts, hfEmbedding);

        */

        const hfEmbedding = new HuggingFaceInferenceEmbeddings({
            apiKey: Credentials.HUGGING_FACE_API_KEY,
            model: 'sentence-transformers/all-MiniLM-L6-v2',
        });
        const dataRepository = new VectorDataRepository();
        const vectorStore = dataRepository.getVectorStore(hfEmbedding);
        const result = await vectorStore.similaritySearch('What is the cause of rage', 5);
        console.log(result);
    }
}

const main = new Main();
main.start();
