const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// const shoeRoutes = require("./routes/shoe-routes");
// const userRoutes = require("./routes/user-routes");
// app.use(shoeRoutes, userRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
