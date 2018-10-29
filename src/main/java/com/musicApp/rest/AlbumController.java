package com.musicApp.rest;

import javax.servlet.http.HttpServlet;
import javax.servlet.*;
import org.springframework.web.context.support.SpringBeanAutowiringSupport; 
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;


import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.Produces;
import java.util.Collection;
import java.util.List;
import org.springframework.http.MediaType;


import com.musicApp.dao.*;
import com.musicApp.model.*;

@Controller
@Path("/albums")
public class AlbumController extends HttpServlet  {

	private AlbumService albumService = new AlbumService();
	
	@GET
	@Path("/hello/{param}")
	public Response getMsg(@PathParam("param") String msg) {
		String output = albumService.getMsg(msg);

		return Response.status(200).entity(output).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public Album getAlbum(@PathParam("id") int id) {
		return albumService.getAlbum(id);
	}

	@GET
	@Path("/titles")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public List<String> getAllAlbumTitles() {
		return albumService.getAllAlbumTitles();
	}
	
	@GET
	@Path("/string/{id}")
	@Produces("text/plain")
	public String getAlbumAsString(@PathParam("id") int id) {
		return albumService.getAlbumAsString(id);
	}

	@GET
	@Path("/string")
	@Produces("text/plain")
	public String getAllAlbumsAsString() {
		return albumService.getAllAlbumsAsString();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public List<Album> getAllAlbums() {
		return albumService.getAllAlbums();
	}

}