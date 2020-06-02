const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database')
const findRsvpAndUpdate = require('../database/controllers/rsvp.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/rsvps', (req, res) => {
  findRsvpAndUpdate(req.body, (err, doc) => {
    if (err) {
      res.send(400);
    } else {
      res.send(`Successfully saved ${req.body.firstName} ${req.body.lastName}`);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
