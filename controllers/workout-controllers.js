const Workout = require("../models/workout-model");

module.exports = {
  // track daily workout
  getWorkouts: (req, res) => {
    console.log("getWorkouts");
    !req.query.id
      ? Workout.find({})
          .populate("name", "set")
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  // create daily workout
  addWorkout: async (req, res) => {
    console.log("addWorkout", req.body);
    const workout = new Workout(req.body);
    try {
      await workout.save();
      res.send(workout);
    } catch (err) {
      res.send(err);
    }
  },

  // edit Workout
  editWorkout: async (req, res) => {
    console.log("editWorkout", req.params.id, req.body);
    //const workoutJson = { exercises: [req.body] };
    //console.log(JSON.stringify(workoutJson));

    let workout = await Workout.findById(req.params.id);
    console.log("currentWorkout", workout);
    console.log("current exercises", workout["exercises"]);
    let workoutJson = workout["exercises"];
    workoutJson.push(req.body);
    console.log("new exercises", workoutJson);

    Workout.findByIdAndUpdate(req.params.id, {
      $set: { exercises: workoutJson },
    })
      .then(async () => {
        const workout = await Workout.findById(req.params.id);
        res.send(workout);
      })
      .catch((err) => res.send(err));
  },

  // get workout Range
  rangeWorkout: (req, res) => res.send({ msg: "Successful rangeWorkout" }),
};
