const { OpenAI } = require('openai');
const { HuggingFaceInferenceEmbeddings } = require('langchain/embeddings/hf');

const texts = [
    'How do I get a replacement Medicare card?',
    'What is the monthly premium for Medicare Part B?',
    'How do I terminate my Medicare Part B (medical insurance)?',
    'How do I sign up for Medicare?',
    'Can I sign up for Medicare Part B if I am working and have health insurance through an employer?',
    'How do I sign up for Medicare Part B if I already have Part A?',
    'What are Medicare late enrollment penalties?',
    'What is Medicare and who can get it?',
    'How can I get help with my Medicare Part A and Part B premiums?',
    'What are the different parts of Medicare?',
    'Will my Medicare premiums be higher because of my higher income?',
    'What is TRICARE ?',
    "Should I sign up for Medicare Part B if I have Veterans' Benefits?",
];

class DataEmbedding {
    constructor() {
        this.openai = new OpenAI({ apiKey: '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' });
    }
    async getEmbeddedData(transcriptArr) {
        const embeddingCalls = transcriptArr.map((text) =>
            this.openai.embeddings.create({
                model: 'text-embedding-ada-002',
                input: text,
                encoding_format: 'float',
            })
        );

        const embeddedData = await Promise.all(embeddingCalls);

        return embeddedData;
    }

    async huggingfaceEmbedding() {
        // const hfToken = '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';
        // const modelId = 'sentence-transformers/all-MiniLM-L6-v2';
        // const api_url = `https://api-inference.huggingface.co/pipeline/feature-extraction/${modelId}`;
        // const headers = { Authorization: `Bearer ${hfToken}`, 'Content-Type': 'application/json' };
        // const response = await fetch(api_url, {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify({ inputs: texts, options: { wait_for_model: true } }),
        // });

        // const embeddings = await response.json();

        const em = new HuggingFaceInferenceEmbeddings({
            apiKey: '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',
            model: 'sentence-transformers/all-MiniLM-L6-v2',
        });
        const embeddings = await em._embed(texts);

        console.log(embeddings);
    }
}

module.exports.DataEmbedding = DataEmbedding;
