const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String, required: true },
      name: { type: String, required: true },
      distance: Number,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// Create cardio as a subSchema
// const cardioSchema = new Schema();
// // {
// //   likerId: {type: Schema.ObjectId ,}
// // },
// // { _id: false }

// const workoutSchema = new Schema({
//   name: String,
//   type: ["resistance", "cardio"],
//   set: Number,
//   date: { type: Date, default: Date.now },

//   cardio: [cardioSchema],
// });
