const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  name: String,
  duration: String,
  isDone: Boolean,
  created_at: { type: Date, default: Date.now },
});

const File = mongoose.model('File', FileSchema);

File.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if (count > 0) return ;

  const files = require('./file.seed.json');
  File.create(files, function(err, newFiles) {
    if (err) {
      throw err;
    }
    console.log("DB seeded")
  });

});

module.exports = File;
