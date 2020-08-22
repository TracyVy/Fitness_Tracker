const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public", { extensions: ["html"] }));

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
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

// Add the next line as the second argument for line 14.
// || "mongodb://localhost/workout"
