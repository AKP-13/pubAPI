const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.text());

const excuses = { shopping: {morning: ["bags split on the way back" , 2, 3], afternoon: [1, 2, 3], evening: [1, 2 ,3]}, working: {morning: [1 , 2, 3], afternoon: [1, 2, 3], evening: [1, 2 ,3]}, kids: {morning: [1 , 2, 3], afternoon: [1, 2, 3], evening: [1, 2 ,3]}};

app.get('/', (req, res) => res.send('Need an excuse?'));

app.get('/excuses/:action/:timing', (req, res) => {
    res.send(JSON.stringify(excuses[req.params.action][req.params.timing][Math.floor(Math.random()*3)]));
});

app.listen(process.env.PORT || 3000, () => console.log(`Express departing now!`));
