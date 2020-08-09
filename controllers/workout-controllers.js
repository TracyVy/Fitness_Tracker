const Workout = require("../models/workout-model");

module.exports = {
  // track daily workout
  getWorkouts: (req, res) =>
    !req.query.id
      ? Workout.find({})
          .populate("name", "set")
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err)),

  // create daily workout
  addWorkout: async (req, res) => {
    Workout.create(req.body);
    try {
      await workout.save();
      res.send(workout);
    } catch (err) {
      res.send(err);
    }
  },

  // edit Workout
  editWorkout: (req, res) =>
    Workout.findByIdAndUpdate(req.query.id, req.body)
      .then(() => res.send({ msg: "Successful editWorkout" }))
      .catch((err) => res.send(err)),

  // get workout Range
  rangeWorkout: (req, res) => res.send({ msg: "Successful rangeWorkout" }),

  // log multiple exercise in a workout on a given day
  // Schema should include: name, type, weight, sets, reps and duration of exercise.
  // If the exercise is a cardio exercise, I should be able to track my distance traveled.
};
