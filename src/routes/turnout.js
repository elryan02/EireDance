const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/', function(req, res, next) {
  res.render('turnout');
});
/*
const FILES =  [
    {name: 'Wall Splits', duration: '60', isDone: 'false'},
    {name: 'Double Leg Rotation', duration: '60', isDone: 'false'},
    {name: 'Single Leg Rotation (R)', duration: '30', isDone: 'false'},
    {name: 'Single Leg Rotation (L)', duration: '30', isDone: 'false'}
  ];

  router.get('/file', function(req, res, next) {
    const fileModel = mongoose.model('File');

      mongoose.model('File').find({deleted: {$ne: true}}, function(err, files) {
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
const File = mongoose.model('File');
const fileId = req.params.fileId;

File.findById(fileId, function(err, file) {
  if (err) {
    console.error(err);
    return res.status(500).json(err);
  }
  if (!file) {
    return res.status(404).json({message: "File not found"});
  }

  file.name = req.body.name;
  file.duration = req.body.duration;

  file.save(function(err, savedFile) {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(savedFile);
  })

})
});

router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, doomedFile) {
      res.json(doomedFile);
    })

  })
});

module.exports = router;
