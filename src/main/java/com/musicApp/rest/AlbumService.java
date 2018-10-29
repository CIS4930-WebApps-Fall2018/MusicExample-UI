package com.musicApp.rest;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.List;


import com.musicApp.dao.*;
import com.musicApp.model.*;

@Service
public class AlbumService {
	
	private AlbumDAO albumDAO = new AlbumDAO();
 
	public String getMsg( String msg) { 
		return "Hello : " + msg;
	}
	
	public String getAlbumAsString(int id) {
		Album album = albumDAO.getAlbum(id);

		return album.toString();
	}
	public String getAllAlbumsAsString() {
		String retString = "";
		Collection<Album> albums = albumDAO.getAllAlbums();
		for (Album album : albums) {
			retString += album.toString();
		}

		return retString;
	}

	
	public Album getAlbum(int id) {
		return albumDAO.getAlbum(id);
	}

	public List<Album> getAllAlbums() {
		  return (List<Album>) albumDAO.getAllAlbums();
		
	}
	
	public List<String> getAllAlbumTitles() {
		  return (List<String>) albumDAO.getAllAlbumTitles();
	}


}