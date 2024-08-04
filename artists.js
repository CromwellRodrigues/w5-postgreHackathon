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
    const allArtists = await pool.query(artistsList);

    return allArtists.rows[0] || null;

  }
  catch (error) {

    throw new Error(`msg : ${error}`);
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
