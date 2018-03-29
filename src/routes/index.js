const router = require('express').Router();

const FILES =  [
    {name: 'Wall Splits', duration: '60', isDone: 'false'},
    {name: 'Double Leg Rotation', duration: '60', isDone: 'false'},
    {name: 'Single Leg Rotation (R)', duration: '30', isDone: 'false'},
    {name: 'Single Leg Rotation (L)', duration: '30', isDone: 'false'}
  ];

  router.get('/file', function(req, res, next) {
  res.json(FILES);
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
    const newId = '' + FILES.length;
    const data = req.body;
    data.id = newId;

    FILES.push(data);
    res.status(201).json(data);
  });

  router.put('/file/:fileId', function(req, res, next) {
  const {fileId} = req.params;
  const file = FILES.find(entry => entry.id === fileId);
  if (!file) {
    return res.status(404).end(`Could not find file '${fileId}'`);
  }

  file.title = req.body.title;
  file.description = req.body.description;
  res.json(file);
});

router.put('/file/:fileId', function(req, res, next) {
  res.end(`Updating file '${req.params.fileId}'`);
});

router.delete('/file/:fileId', function(req, res, next) {
  res.end(`Deleting file '${req.params.fileId}'`);
});


module.exports = router;
