const mongojs = require("mongojs");
const databaseURL = "fitness_db";
const collections = ["exercise"];
const db = mongojs(databaseURL, collections);

db.on("error", (err) => console.log({ error_message: err }));
