const r = require("express").Router();
const {
  getWorkouts,
  addWorkout,
  editWorkout,
  rangeWorkout,
} = require("../controllers/workout-controllers");

r.get("/api/workouts/", getWorkouts);
r.post("/api/workouts", addWorkout);
r.put("/api/workouts", editWorkout);

r.get("/api/workouts/range", rangeWorkout);

module.exports = r;

// 1. Add exercises to a previous workout plan. Add another exercise obj to an existing exercise array
// 2. Edit a workout based on _id
// 3A. Aggregate/sum of weight combined for that exercise.
// 3B. View multiple the combined weight of multiple exercises on the stats page.
// MongDB Atlas (research)
