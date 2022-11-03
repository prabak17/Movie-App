const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const getPopMovies = require("./api/getmovies");
const searchMovies = require("./api/searchmovies");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/search", searchMovies);
app.use("/movies", getPopMovies);

app.get("/", (req, res) => {
  res.send("working");
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
