// Import the required modules
import express from "express";



// Import your helper functions for your first resource here
import {
  getArtists,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistById,
} from "./artists.js";


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

// Endpoint to retrieve all artists
app.get("/artist/", async function (req, res) {

    try {

      const result = await getArtists() // Invoke function to get all artists
      res.status(200).json({ success: true, payload: result }) // Send a response with the artists if successful
    
    } catch(error) {

      res.status(500).json({ success: false, payload: error}) // Handle any errors, giving back the error message
    
    }
});

// Endpoint to retrieve an artist by id
app.get("/artist/:id", async function (req, res) {

  try {

    const result = await getArtistById(req.params.id) // Invoke function to get specific artist- ID will come from the url so we need to access the params object from the req
    
    if (!result) {
      res.status(404).json({ success: false, payload: "No artist with that id was found"}) // If result is empty- then the user gave an invalid id
      return // return is needed to break out of the request listener
    }

    res.status(200).json({ success: true, payload: result }) // Send a response with the artist if successful

  } catch(error) {

    res.status(500).json({ success: false, payload: error}) // Handle any errors, giving back the error message

  }
});

// Endpoint to create a new artist
app.post("/artist/", async function (req, res) {

  try {

    const result = await createArtist(req.body) // Invoke function to get specific artist- artist will come from the body so we need to access the body object from the req
    
    if (!req.body.name) {
      res.status(404).json({ success: false, payload: "Please provide a name for the updated artist"}) // If result is empty- then the user did not give a name in the request
      return // return is needed to break out of the request listener
    }
    
    res.status(200).json({ success: true, payload: result }) // Send a response with the artist if successful

  } catch(error) {

    res.status(500).json({ success: false, payload: error}) // Handle any errors, giving back the error message

  }
});

// Endpoint to update a specific artist by id
app.patch("/artist/:id", async function (req, res) {

  try {

    const result = await updateArtistById(req.params.id, req.body) // Invoke function to update artist- artist will come from the body so we need to access the body object from the req, id will come from the url so we need to access the params object from the req
    
    if (!req.body.name) {
      res.status(404).json({ success: false, payload: "Please provide a name for the updated artist"}) // If result is empty- then the user did not give a name in the request
      return // return is needed to break out of the request listener
    }

    if (!result) {
      res.status(404).json({ success: false, payload: "No artist with that id was found"}) // If result is empty- then the user gave an invalid id
      return // return is needed to break out of the request listener
    }

    res.status(200).json({ success: true, payload: result }) // Send a response with the artist if successful

  } catch(error) {

    res.status(500).json({ success: false, payload: error}) // Handle any errors, giving back the error message

  }
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/artist/:id", async function (req, res) {

  try {

    const result = await deleteArtistById(req.params.id) // Invoke function to delete artist- ID will come from the url so we need to access the params object from the req
    
    if (!result) {
      res.status(404).json({ success: false, payload: "No artist with that id was found"}) // If result is empty- then the user gave an invalid id
      return // return is needed to break out of the request listener
    }
    
    res.status(200).json({ success: true, payload: result }) // Send a response with the artist if successful

  } catch(error) {

    res.status(500).json({ success: false, payload: error}) // Handle any errors, giving back the error message

  }
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