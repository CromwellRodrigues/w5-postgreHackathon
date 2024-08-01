// Import the required modules
import express from "express";



// Import your helper functions for your first resource here
// import {
//   getArtists,
//   getArtistById,
//   createArtist,
//   updateArtistById,
//   deleteArtistById,
// } from "./artists.js";


// Import your helper functions for your second resource here
// import {
//   getAlbums,
//   getAlbumById,
//   createAlbum,
//   updateAlbumById,
//   deleteAlbumById,
// } from "./albums.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/artist/", async function (req, res) {
    console.log("I'm alive");
    res.status(200).send("I'm alive!");
});

// Endpoint to retrieve a <resource_one> by id
app.get("/artist/:id", async function (req, res) {
});

// Endpoint to create a new <resource_one>
app.post("/artist/", async function (req, res) {
});

// Endpoint to update a specific <resource_one> by id
app.patch("/artist/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/artist/:id", async function (req, res) {
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/album/", async function (req, res) {
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/album/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/album/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/album/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/album/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});