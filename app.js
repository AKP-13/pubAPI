const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.text());

const excuses = { shopping: {morning: ['The bag split and everything broke so I had to go back and do all the shopping again', 'The shop wasn\'t open yet so I had to wait', 'I blew tyre on the way to the shops had to put the spare on'], afternoon: ['Peter andre was relesing a new line of curry sauce so the shop was completely rammed', 'Couldn\'t find toilet roll anywhere. Had to try loads of shops!', 'Couldn\'t decide between Doritos chilli heatwave and tangy cheese'], evening: ['They locked me in the shop when it closed!', 'Peter andre was relesing a new line of curry sauce so the shop was completely rammed', 'Couldn\'t find toilet roll anywhere. Had to try loads of shops!']}, kids: {morning: ['excuse1', 'excuse2', 'excuse3'], afternoon: ['excuse1', 'excuse2', 'excuse3'], evening: ['excuse1', 'excuse2', 'excuse3']}, gym: {morning: ['excuse1', 'excuse2', 'excuse3'], afternoon: ['excuse1', 'excuse2', 'excuse3'], evening: ['excuse1', 'excuse2', 'excuse3']}, work: {morning: ['The boss had to take his dog to the vet and has asked me to come in for deliveries.', 'Banksy painted a mural in the tube carriage I was in so the train got taken out of service.', 'There was a brawl at the Regent\'s Park ring between some of the early morning cyclists.'], afternoon: ['The dog buried my car in the backyard', 'excuse2', 'excuse3'], evening: ['I\'ve had to take some of our clients out for dinner as the person who was supposed to be doing it has caught coronavirus.', 'excuse2', 'excuse3']}};

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Need an excuse?'));

app.get('/excuses/:action/:timing', (req, res) => {
    res.send(JSON.stringify(excuses[req.params.action][req.params.timing][Math.floor(Math.random()*3)]));
});

app.listen(process.env.PORT || 3000, () => console.log(`Express departing now!`));
