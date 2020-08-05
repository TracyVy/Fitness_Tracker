const express = require("express");
const r = express.Router();
const workoutSchema = require("../models/workout");

r.get("/api/workouts", (req, res) => {
  // let workout = {};
  // res.send(workout);
  res.send("Successful GET!!");
});

r.post("/api/workouts", (req, res) => {
  res.send("Successful POST!!");
});

r.put("/api/workouts", (req, res) => {
  res.send("Successful PUT!!");
});

r.get("/api/workouts/range", (req, res) => {
  res.send("Successful GET RANGE!!");
});

module.exports = r;
