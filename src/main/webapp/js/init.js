(function() {
	var dc = new DataController(document.baseURI);

	/**Define what to do with the album titles list **/
	var populateAlbumList = function (albums){
		console.log("albums", albums);
		var mainDiv = document.getElementById("albumList");
		albums.forEach(function(album){
			/**Define the album "tile" **/			
			var tileNode = createTileNode(album.title, "album");
			tileNode.addEventListener("click", function(){
						setupDetailView(this, album.id);
						});
			mainDiv.appendChild(tileNode);
		});
	}
	
	var setupDetailView = function (albumDiv, albumId){
		var detailDiv = document.getElementById("albumDetails");
		var albumDivCopy = albumDiv.cloneNode(true);
		while (detailDiv.hasChildNodes()) {
			detailDiv.removeChild(detailDiv.firstChild);
		}
		detailDiv.appendChild(albumDivCopy);
		dc.getAlbumById(albumId, showAlbumDetails); 
		
	}
	
	var showAlbumDetails = function (album){
		var tracks = album.tracks;
		console.log("tracks", tracks);
		var detailDiv = document.getElementById("albumDetails");

		tracks.forEach(function(track){
			/**Define the track "tile" **/			
			var tileNode = createTileNode(track.title, "track");
			detailDiv.appendChild(tileNode);
		});

		/**The following loops through all properties of the album json object. 
		This can be useful if we're working with external APIs and not always aware of property
		names and types.**/
		/**But since we know what data to expect from our REST API calls, we can customize the view
		for (prop in album){
			if(Array.isArray(album[prop])){
			 createPropTextNode(prop+": ");
			 var arr = album[prop];
			 for(var i=0; i<arr.length; i++){
				obj= arr[i];
				console.log("obj",obj );				
				for(objProp in obj){
					createPropTextNode(objProp+": "+obj[objProp]);
				}
			 }				
			}else{
				createPropTextNode(prop+": "+album[prop]);
			}
		}
		**/
		
	}
	
	var createTileNode = function(title, classType){
		var tileNode = document.createElement("div");
		var titleNode = document.createTextNode(title);
		var albumNode = document.createElement("div");
		albumNode.className = classType+"Icon";
		tileNode.className = classType+"TileDiv";
		tileNode.appendChild(albumNode);
		tileNode.appendChild(titleNode);
		return tileNode;
	}
	
	var createPropTextNode = function(str){
		var detailDiv = document.getElementById("albumDetails");
		var propNode = document.createElement("div");
		var textNode = document.createTextNode(str);
		propNode.appendChild(textNode);
		detailDiv.appendChild(propNode);					
	}
	
	/**Call the getAllAlbums function and provide the above 
	defined callback function.  The DataController will execute this callback
	function after data is successfully returned.**/	
    dc.getAllAlbums(populateAlbumList);
})();