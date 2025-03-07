// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAlbums() {
	// Query the database and return all Albums
	console.log("calling all albums");
}

export async function getAlbumById(id) {
	// Query the database and return the resource with a matching id or null
}

export async function createAlbum(album) {
	// Query the database to create an album and then return the new created album
}

export async function updateAlbumById(id, album) {
	// Query the database to update the resource and return the newly updated resource or null
}

export async function deleteAlbumById(id) {
	// Query the database to delete the resource and return the deleted resource or null
}
