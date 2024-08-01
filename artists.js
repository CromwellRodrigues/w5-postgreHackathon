
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtists() {
  // Query the database and return all artists

  const queryString = 'SELECT * FROM artists' // Create a variable that will hold the SQL query

  try {

    const result = await pool.query(queryString) // Use pool.query to send the query to the DB
    return result.rows // Return the rows from the result

  } catch (error) {

    throw new Error("There was an issue retrieving results: " + error) // Handle any error if the request doesn't go through
  
  }
}

export async function getArtistById(id) {
  // Query the database and return the artist with a matching id or null

  const queryString = 'SELECT * FROM artists WHERE id = $1' // Create a variable that will hold the SQL query, the id will come from the url and is handed into the function when called

  try {

    const result = await pool.query(queryString, [id]) // Use pool.query to send the query to the DB, ID is taken from the function argument
    return result.rows[0] // Return the row from the result

  } catch (error) {

    throw new Error("There was an issue retrieving results: " + error) // Handle any error if the request doesn't go through
  
  }
}

export async function createArtist(artist) {
  // Query the database to create an artist and return the newly created artist

  const queryString = 'INSERT INTO artists (name) VALUES ($1) RETURNING *' // Create a variable that will hold the SQL query, the name will come from the body and is handed into the function when called. RETURNING * is required for the query to return a result

  try {

    if (!artist.name) {
      return // This will stop the function from executing if the user did not provide a name
    }

    const result = await pool.query(queryString, [artist.name]) // Use pool.query to send the query to the DB, name is taken from artist in the function argument
    return result.rows[0] // Return the row from the result

  } catch (error) {

    throw new Error("There was an issue creating artist: " + error) // Handle any error if the request doesn't go through
  
  }
}

export async function updateArtistById(id, artist) {
  // Query the database to update the resource and return the newly updated artist or null

  const queryString = 'UPDATE artists SET name = $1 WHERE id = $2 RETURNING *' // Create a variable that will hold the SQL query, the name will come from the body while the id will come from the url. Both are handed into the function when called. RETURNING * is required for the query to return a result

  try {

    if (!artist.name) {
      return // This will stop the function from executing if the user did not provide a name
    }

    const result = await pool.query(queryString, [artist.name, id]) // Use pool.query to send the query to the DB, name is taken from artist in the function argument, ID is taken from the id argument in function call
    return result.rows[0] // Return the row from the result

  } catch (error) {

    throw new Error("There was an issue updating artist: " + error) // Handle any error if the request doesn't go through
  
  }
}

export async function deleteArtistById(id) {
  // Query the database to delete the artist and return the deleted artist or null

  const queryString = 'DELETE FROM artists WHERE id = $1 RETURNING *' // Create a variable that will hold the SQL query, ID is taken from the function argument

  try {

    const result = await pool.query(queryString, [id]) // Use pool.query to send the query to the DB, ID is taken from the id argument in function call
    return result.rows[0] // Return the row from the result

  } catch (error) {

    throw new Error("There was an issue deleting artist: " + error) // Handle any error if the request doesn't go through
  
  }
}