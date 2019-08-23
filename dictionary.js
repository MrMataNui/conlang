// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const namesListSchema = new Schema({
//   A: [String],
//   B: [String],
//   C: [String],
//   D: [String],
//   E: [String],
//   F: [String],
//   G: [String],
//   H: [String],
//   I: [String],
//   J: [String],
//   K: [String],
//   L: [String],
//   M: [String],
//   N: [String],
//   O: [String],
//   P: [String],
//   Q: [String],
//   R: [String],
//   S: [String],
//   T: [String],
//   U: [String],
//   V: [String],
//   W: [String],
//   X: [String],
//   Y: [String],
//   Z: [String]
// });
// mongoose.model('namesList', namesListSchema, 'namesList');
// const dictionarySchema = new Schema({
//   langWord: String,
//   IPA: String,
//   partOfSpeech: String,
//   engWord: String,
//   partOfSpeech2: String,
//   engWord2: String
// });
// mongoose.model('dictionary', dictionarySchema, 'dictionary');
// // create a schema
// const userSchema = new Schema({
//   namesList: {
//     type: mongoose.Schema.Type.ObjectId,
//     ref: 'namesList',
//     required: true
//   },
//   dictionary: {
//     type: [mongoose.Schema.Type.ObjectId],
//     ref: 'dictionary',
//     required: true
//   }
// }, {
//   collection: 'dictionary'
// });

// const Dictionary = mongoose.model('Dictionary', userSchema);

// module.exports = Dictionary;
