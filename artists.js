// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtists() {
  // Query the database and return all artists
  // console.log("calling all artists");

  const artistsList = `
          SELECT *
          FROM artists
          `;
  
  try {
    const allArtists = await pool.query(artistsList); // execute  SQL query to retrieve the list of all artist from the database. 

    return allArtists.rows|| null; // return all rows from the query result or null if there are no rows

  }
  catch (error) {

    throw new Error(`msg : ${error}`); // handle any error if the request fails
  }
};

export async function getArtistById(id) {
	// Query the database and return the artist with a matching id or null
}

export async function createArtist(artist) {
	// Query the database to create an artist and return the newly created artist
}

export async function updateArtistById(id, artist) {
	// Query the database to update the resource and return the newly updated artist or null
}

export async function deleteArtistById(id) {
	// Query the database to delete the artist and return the deleted artist or null
}
