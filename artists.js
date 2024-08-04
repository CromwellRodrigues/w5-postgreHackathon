// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { query } from "express";
import { pool } from "./db/index.js";

export async function getArtists() {
  // Query the database and return all artists
  // console.log("calling all artists");

  const artistsList = `
          SELECT *
          FROM artists
          `;
  
  try {
    const result = await pool.query(artistsList); // execute  SQL query to retrieve the list of all artist from the database. 

    return result.rows|| null; // return all rows from the query result or null if there are no rows

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

    const result = await pool.query(queryArtist, [id]); //using the pool query to query the database
    // sending [id] as a parameter to prevent sql injection

    console.log(result);

    return result.rows[0] || null; // return the first row from the result or null if there is no artist


  } catch (error) {
    
    console.error(`Error querying artist by ID ${id}: ${error}`);  //log the error for debugging  

    throw new Error(`Failed to retrieve artist with ID ${id}  : ${error.message}`); // throw the error with a message
      
	}
}

export async function createArtist(artist) {
  // Query the database to create an artist and return the newly created artist
  
  const queryCreateArtist = `
    INSERT INTO artists
    (name)
    VALUES ($1)
    RETURNING *
  `

  try {
    const values = [artist.name];
    // to ensure artist name is provided


    if (!artist.name) {
      console.error('Artist name is required')
      return null;
    }
    
    const result = await pool.query(queryCreateArtist, values);

    return result.rows[0];
      
    

	} catch (error) {
		console.error(`Error creating an artist : ${error.message}`); //log the error for debugging

		throw new Error(
			`Failed to create an artist: ${error.message}`
		); // re-throw the error handled by the caller
	}

}

export async function updateArtistById(id, name) {
  // Query the database to update the resource and return the newly updated artist or null
  
  const queryUpdateArtist = `
    UPDATE artists
    SET name = $1
    WHERE id = $2
    RETURNING *
  `


  try {
    // validate artist name 
    if (!name) {
      console.error('Artist name is required')
      return null;
    }
  
    // send query to database, ID is taken from the ID argument in function call in the endpoint, name will be got from the req body, raw, json input
    const result = await pool.query(queryUpdateArtist, [name,id]);

    console.log("update artist : result.rows[0]")
    return result.rows[0];

  } catch (error) {
      console.error(`Error updating an artist : ${error.message}`); //log the error for debugging

      throw new Error(
        `Failed to update an artist: ${error.message}`
      ); // re-throw the error handled by the caller
  }
}

export async function deleteArtistById(id) {

  // Query the database to delete the artist and return the deleted artist or null
    const queryDeleteArtist = `
    DELETE FROM artists
    WHERE id = $1
    RETURNING *
  `;
  try {
		const result = await pool.query(queryDeleteArtist, [id]); //using the pool query to query the database
		// sending [id] as a parameter to prevent sql injection

		console.log(result);

		return result.rows[0] || null; // return the first row from the result or null if nothing was deleted
	} catch (error) {
		console.error(`Error querying artist by ID ${id}: ${error}`); //log the error for debugging

		throw new Error(
			`Failed to delete artist with ID ${id}  : ${error.message}`
		); // throw the error with a message
	}

}
