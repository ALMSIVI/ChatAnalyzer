/* Express */
const express = require('express');
const app = express();
app.use(express.static('static'));
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

/* IBM Watson */
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const credentials = require('./credentials.json');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  url: credentials.url,
  username: credentials.username,
  password: credentials.password
});

/* GET requests */
app.get('/', (req, res) => {
  res.redirect('test.html');
});

/* POST requests */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/analyze', (req, res) => {
  console.log('Text to be analyzed:', req.body);
  toneAnalyzer.tone(
    // Params  
    {
      tone_input: {text: req.body.text},
      content_type: 'application/json'
    },
    // Callback function
    (error, response) => {
      if (error) {
        console.error('error:', error);
        res.send({});
      } else {
        const tones = response.document_tone.tones;
        // Sort in reverse order
        tones.sort((toneA, toneB) => toneB.score - toneA.score);
        console.log('Tone is:', tones[0]);
        res.send(tones[0]);
      }
    }
  );
});