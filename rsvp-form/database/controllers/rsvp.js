const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  const query = {firstName: data.firstName, lastName: data.lastName};
  const newData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    guests: data.guests
  };
  // upsert set to true --> creates object if it doesn't exist
  Rsvp.findOneAndUpdate(query, newData, {upsert: true}, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  });
};
module.exports = findRsvpAndUpdate;
