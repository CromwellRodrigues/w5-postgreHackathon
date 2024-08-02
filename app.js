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

// Endpoint to delete a specific artist by id
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


// Album Route Handlers

// Endpoint to retrieve all albums
app.get("/album/", async function (req, res) {

  try {
    const result = await getAlbums(); // to get all albums from albums.js

    res.status(200).json({ success: true, payload: result });
  }  // sends back a response with all the albums

  catch (error) {

    
    res.status(500).json ({success : false, payload: error}); // handle errors and give back the error message.
  }
});
  
// Endpoint to retrieve a album  by id
app.get("/album/:id", async function (req, res) {
    
  try {
    const result = await getAlbumById(req.params.id);
    // invoke function to get specific album from the url so that we can access the particular album.

    if (!result) {
      res.status(404).json({ success: false, payload: "No album with that id was found" });

      return;
      
    }

    res.status(200).json({ success: true, payload: result }); // send back a response with the particular artist details


  }  catch (error) {

    res.status(500).json({ success: false, payload: error }) 
    } //handles any errors giving back the error in the message.

});
  
// Endpoint to create a new album
app.post("/album/", async function (req, res) {

  try {

const result = await createAlbum(req.body)//invoke a specific album - this album will come from the body within the post req

if (!req.body.title, !req.body.published_date, !req.body.artist_id) {
  res.status(404).json({ success: false, payload: "Please provide all information for the new ALbum"})// if the result is empty then the user didn't give a valid req for the album
  return // return is needed to break out of the event listener.
}

res.status(200).json({sucecess: true, payload: result}) //send a resposne with the new album if successful

  } catch(error) {

res.status(500).json({success: false, payload: error}) // handle any errors - give back an error message if so. 

  }
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