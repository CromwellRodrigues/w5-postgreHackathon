// Import the required modules
import express, { request } from "express";
import helmet from helmet;


// Import your helper functions for your first resource here
import {
  getArtists,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistById,
} from "./artists.js";


// Import your helper functions for your second resource here
import {
  getAlbums,
  getAlbumById,
  createAlbum,
  updateAlbumById,
  deleteAlbumById,
} from "./albums.js";


// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests
app.use(helmet()); // use helmet to secure application

// Artist Route Handlers

// Endpoint to retrieve all artists
app.get("/artist/", async function (req, res) {

});

// Endpoint to retrieve an artist by id
app.get("/artist/:id", async function (req, res) {

});

// Endpoint to create a new artist
app.post("/artist/", async function (req, res) {

});

// Endpoint to update a specific artist by id
app.patch("/artist/:id", async function (req, res) {

});

// Endpoint to delete a specific artist by id
app.delete("/artist/:id", async function (req, res) {

});


// Album Route Handlers

// Endpoint to retrieve all albums
app.get("/album/", async function (req, res) {

});
  
// Endpoint to retrieve a album  by id
app.get("/album/:id", async function (req, res) {
  
});
  
// Endpoint to create a new album
app.post("/album/", async function (req, res) {


});

// Endpoint to update a specific album by id
app.patch("/album/:id", async function (req, res) {
  // incomplete
});
  
// Endpoint to delete a specific album by id
app.delete("/album/:id", async function (req, res) {
  //incomplete
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});