const express = require('express');
const router = express.Router();

const { data } = require('C:/Users/Emma/desktop/clproject/data/exerciseData.json');
const { tExercises } = data;

router.get('/', function(req, res) {
  res.render('tExercise', {
    tExercises,
    name: tExercises[0].name,
    duration:tExercises[0].duration,
    isDone: tExercises[0].duration
  });
 });


module.exports = router;
