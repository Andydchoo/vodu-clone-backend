const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.jnmdyon.mongodb.net/?retryWrites=true&w=majority" || "mongodb://127.0.0.1:27017/vodu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

module.exports = mongoose.connection;