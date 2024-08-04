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
  
  const queryArtist = `
    SELECT *
    FROM artists
    where id = $1
  `;

  try {

    const artist = await pool.query(queryArtist, [id]); //using the pool query to query the database
    // sending [id] as a parameter to prevent sql injection

    console.log(artist);

    return artist.rows[0] || null; // return the first row from the result or null if there is no artist


  } catch (error) {
    
    console.error(`Error querying artist by ID ${id}: ${error}`);  //log the error for debugging  

    throw new Error(`Failed to retrieve artist with ID ${id}  : ${error.message}`); // throw the error with a message
      
	}
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
