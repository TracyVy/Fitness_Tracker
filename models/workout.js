// As a user, I want to be able to view create and track daily workouts.
// I want to be able to log multiple exercises in a workout on a given day.
// I should also be able to track the name, type, weight, sets, reps, and duration of exercise.
// If the exercise is a cardio exercise, I should be able to track my distance traveled.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: String,
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = workoutSchema;
