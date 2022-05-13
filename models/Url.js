const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
    urlCode: {
      type: String     
    },
  shortUrl: {
      type: String
  },
  longUrl: {
      type: String
  },
  date:{
      type: Date,
      default: Date.now
     }
});

const Url = mongoose.model('url',urlSchema);
Url.createIndexes();
module.exports = Url;
