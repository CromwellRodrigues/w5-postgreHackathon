
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAlbums() {
  // Query the database and return all Albums

  const queryString = 'SELECT * FROM albums' // create a variable that will hold the SQL query

  try {
    const result = await pool.query(queryString) //Use pool.query to send the query to the DB
    return result.rows // return the rows from the result
  
  } catch (error) {

throw new Error("There was an issue retireving results: " + error) //Handle any error if the request doesn't go through

  }
}

export async function getAlbumById(id) {
  // Query the database and return the resource with a matching id or null
  
  const queryString = 'SELECT * FROM albums WHERE id = $1' //create a variable that will hold the SQL query, the id will come from the url and is handed into the function when called.

  try {

    const result = await pool.query(queryString, [id]) //Use the pool.query to send the query to the DB, ID is taken from the function argument
    return result.rows[0] // return the row from the result

  } catch (error) {

throw new Error("There was an issue retrieving resulsts: " + error) //handle any error if the request doesn't go through

  }

}

export async function createAlbum(album) {
// Query the database to create an album and then return the new created album

  const queryString = 'INSERT INTO albums (title, published_date, artist_id) VALUES ($1, $2, $3) RETURNING *'
  // Create a variable that will hold the SQL query, the title, published date and artist id will come from the body and is handed into the function when called. RETURNING * is required for the query to return a result

  try {
    if (!album.title || !album.published_date || !album.artist_id) {
      return // look to see if the user provided an album title or published date or artist id, if not then stop the function
    }
  
    const result = await pool.query(queryString, [album.title, album.published_date, album.artist_id])// using pool.query send the query to the DB, the ablum title, published date and artist id is taken from album in the function argument
    return result.rows[0] 
  //return the row from the result

  } catch (error) {

  throw new Error("There was an issue creating the album " + error)// then handle any error if the request doesn't go through
  
  }
}











export async function updateAlbumById(id, album) {
  // Query the database to update the resource and return the newly updated resource or null

}

export async function deleteAlbumById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}