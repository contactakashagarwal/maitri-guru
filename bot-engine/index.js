const { NlpManager } = require('node-nlp');
const { documents, answers } = require('./data');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json();

const manager = new NlpManager({ languages: ['en'], nlu: { useNoneFeature: false } });
const locale = 'en';

//Add documents for all utterances and intents
documents.forEach((doc) => {
    manager.addDocument(locale, doc.utterance, doc.intent);
});

//Add answers for all intents
answers.forEach((answer) => manager.addAnswer(locale, answer.intent, answer.answer));

//train the model
manager.train().then(async () => {
    //save the nlp model
    manager.save();

    //expose post endpoint for clients to communicate with bot-engine
    app.post('/bot', jsonParser, async (req, res) => {
        console.log(req.body);
        const message = req.body.message;
        const response = await manager.process(locale, message);
        res.send(response.answer);
    });

    app.listen(3002, () => console.log(`Started Bot engine server at http://localhost:3002!`));
});
