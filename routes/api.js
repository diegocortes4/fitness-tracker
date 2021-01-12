const router = require("express").Router();
const exercises = require("../models/exercises.js");

router.post("/api/exercises", ({ body }, res) => {
  exercises.create(body)
    .then(dbexercises => {
      res.json(dbexercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercises/bulk", ({ body }, res) => {
  exercises.insertMany(body)
    .then(dbexercises => {
      res.json(dbexercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/exercises", (req, res) => {
  exercises.find({})
    .sort({ date: -1 })
    .then(dbexercises => {
      res.json(dbexercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
