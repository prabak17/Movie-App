const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
// import fetch from "node-fetch";

const client_key = "8f472e03452a2042047c0e874540f4bc";

async function popularMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${client_key}&language=en-US&page=1`
  );
  let data = await response.json();
  console.log(data);
  return data;
}
//popularMovies();
router.get("/", (req, res) => {
  popularMovies().then((data) => {
    res.send(data);
  });
});

module.exports = router;
