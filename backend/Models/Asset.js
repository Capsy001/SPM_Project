const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AssetSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  type: {
    type: String
  },
  status: {
    type: String
  },
  value: {
    type: String
  }
}, {
    collection: 'asset'
  })

module.exports = mongoose.model('asset', AssetSchema)