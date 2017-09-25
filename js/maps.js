// Call Google Maps Data
function initMap() {
		  
        var uluru = 
		{ 
			lat: 53.369695, lng: -6.268971 
		};
		  
        var map = new google.maps.Map(document.getElementById('map'), 
		{
        	zoom: 16,
        	center: uluru
        });
		  
        var marker = new google.maps.Marker(
		{
          position: uluru,
          map: map
        });
      }