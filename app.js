// Import the required modules
import express, { request } from "express";
import helmet from "helmet";
import morgan from "morgan";


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
app.use(morgan('dev')); //used for logging http requests

// Artist Route Handlers

// Endpoint to retrieve all artists
app.get("/artist/", async function (req, res) {
  // res.send("Hello world!");

  try {
    const allArtists = await getArtists(); //invoke function getArtists()

    res.status(200) // response if endpoint is successful
      .json({
        status: "success",
        data: allArtists
      })
    
  } catch (error) {

    console.error(`Error getting Artist List : ${error}`); // handle error message in console.

        // error status message 
    res.status(500).json({ 
      status: "fail",
      data: error
    })

     
  }

});

// Endpoint to retrieve an artist by id
app.get("/artist/:id", async function (req, res) {

  try {
    const id = req.params.id; // retrieve id from the request URL
    const artist = await getArtistById(id); //fetch the artist details using the provided ID

    if (!artist) {
      return res
        .status(404)
        .json({
          status: 'fail',
          data: { message: 'No artist with that id exists' }
        }) // handle the error if wrong id is provided
      
    }
    res.status(200)
      .json({
        status: "success",
        data : artist 
    }) // send response with artist info if ID exists
  }

  catch (error) {
    console.error(`Error getting this particular artist : ${error}`); // handle error message in console.

		

		// send 500 status response with the error details
		res.status(500).json({
			status: "fail",
			data: error,
		}); // handle error message if something goes wrong during the process.


  }

});

// Endpoint to create a new artist
app.post("/artist/", async function (req, res) {
  
  const data = req.body;

  try {
    // ensure data contains necessary properties
    if (!data || !data.name) {
			res.status(400).json({
				status: "fail",
				data: { message: "Please provide artist details in JSON format  with 'name property" },
			}); // handle the error if wrong id is provided
			return;
		}

    // call the createArtist function
		const createdArtist = await createArtist(data);

    // check if the artist creation was successful

    if (!createdArtist) {
      res.status(400)
        .json({
          status: fail,
          data: { message: 'Artist creation failed' }
        });
      return
    }

		

		res.status(200).json({
			status: "success",
			data: createdArtist,
    });
    

	} catch (error) {
		console.error(`Error creating this particular artist : ${error}`); // handle error message in console.

		// send 500 status response with the error details
		res.status(500).json({
			status: "fail",
      data: { message: "internal server error", error: error.message },
		}); // handle error message if something goes wrong during the process.
	}


});

// Endpoint to update a specific artist by id
app.patch("/artist/:id", async function (req, res) {

  const id = req.params.id;
  const data = req.body;

  try {
		if (!id || !data.name) {
			return res.status(400).json({
				status: "fail",
				data: { message: "Artist update failed, missing id or name" },
			});
			
		}

		// call the update function
		const updatedArtist = await updateArtistById(id, data.name);

		if (!updatedArtist) {
			return res.status(400).json({
				status: "fail",
				data: { message: "Artist updating failed" },
			});
			
		}

		res.status(200).json({
			status: "success",
			data: updatedArtist,
		});
	} catch (error) {
		console.error(`Error updating this particular artist : ${error.message}`); // handle error message in console.

		// send 500 status response with the error details
		res.status(500).json({
			status: "fail",
			data: { message: "internal server error", error: error.message },
		}); // handle error message if something goes wrong during the process.
	}

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
