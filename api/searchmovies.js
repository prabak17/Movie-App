const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
// import fetch from "node-fetch";

//const client_key = "8f472e03452a2042047c0e874540f4bc";
const API_KEY = "4c9e670a";

async function searchMovies(query) {
  let response = await fetch(
    `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}
//popularMovies();
router.get("/", (req, res) => {
  const query = req.query.query;
  searchMovies(query).then((data) => {
    res.send(data);
  });
});

module.exports = router;
