/**Create a JavaScript object with a constructor, properties and functions **/
function DataController(url){
	this.baseUrl = url;
	
}

DataController.prototype.getAlbumTitles = function(callBackFunction){
	  var url = this.baseUrl +"music/albums/titles";
	  this.getData(url, callBackFunction);
	  
}

DataController.prototype.getAllAlbums = function(callBackFunction){
	  var url = this.baseUrl +"music/albums";
	  this.getData(url, callBackFunction);
	  
}

DataController.prototype.getAlbumById = function(id, callBackFunction){
	  var url = this.baseUrl +"music/albums/"+id;
	  this.getData(url, callBackFunction);

}

DataController.prototype.getData = function(url, callBackFunction){
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var jsonData = JSON.parse(this.responseText);
			if(callBackFunction != null){
				callBackFunction(jsonData);
			}
		}
	  };
	  xhttp.open("GET", url, true);
	  xhttp.send();
}



