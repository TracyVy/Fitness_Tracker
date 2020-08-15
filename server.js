const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database successfully connected.");
});

const apiRoutes = require("./routes/api-routes.js");
app.use(apiRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
