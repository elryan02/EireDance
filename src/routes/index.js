const router = require('express').Router();
const mongoose = require('mongoose');

const FILES =  [
    {name: 'Wall Splits', duration: '60', isDone: 'false'},
    {name: 'Double Leg Rotation', duration: '60', isDone: 'false'},
    {name: 'Single Leg Rotation (R)', duration: '30', isDone: 'false'},
    {name: 'Single Leg Rotation (L)', duration: '30', isDone: 'false'}
  ];

  router.get('/file', function(req, res, next) {
    const fileModel = mongoose.model('File');

    fileModel.find({}, function(err, files) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json(files);
    });
  });


  router.get('/file/:fileId', function(req, res, next) {
    const {fileId} = req.params;

    const file = FILES.find(entry => entry.id === fileId);
    if (!file) {
      return res.status(404).end(`Could not find file '${fileId}'`);
    }

    res.json(file);
  });

  router.post('/file', function(req, res, next) {
    const File = mongoose.model('File');
    const fileData = {
      name: req.body.name,
      duration: req.body.duration,
    };

    File.create(fileData, function(err, newFile) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json(newFile);
    });
  });

router.put('/file/:fileId', function(req, res, next) {
  res.end(`Updating file '${req.params.fileId}'`);
});

router.delete('/file/:fileId', function(req, res, next) {
  res.end(`Deleting file '${req.params.fileId}'`);
});


module.exports = router;
