function obtenerAddress(coords)
{
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({ 'latLng': coords }, function (results, status)
	{
		if (status == google.maps.GeocoderStatus.OK) {
			var arrAddress = results[0].address_components;
			var dirrecion = "";
			var distrito = "";
			var ciudad = "";
			if(arrAddress[1].long_name)
			{
				dirrecion = dirrecion + arrAddress[1].long_name ;
			}
			if(arrAddress[0].long_name)
			{
				dirrecion = dirrecion + " " + arrAddress[0].long_name;
			}
			if(arrAddress[2].long_name)
			{
				distrito= arrAddress[2].long_name;
				dirrecion = dirrecion + ", "+ arrAddress[2].long_name;
			}
			if(arrAddress[3].long_name)
			{
				distrito= arrAddress[3].long_name;
				dirrecion = dirrecion + ", "+ arrAddress[3].long_name;
			}
			if(arrAddress[4].long_name)
			{
				ciudad= arrAddress[4].long_name;
				dirrecion = dirrecion + ", " +arrAddress[4].long_name ;
			}
			if(arrAddress[6].long_name)
			{
				dirrecion = dirrecion + ", " +arrAddress[6].long_name ;
			}
			if(dirrecion=="")
			{
				dirrecion=results[1];
			}
			document.getElementById("inputAddress").value =dirrecion;
			document.getElementById("inputDistrict").value =distrito;
			document.getElementById("inputCity").value =ciudad;

		}

	});
}

var FRDLocation = function () {
	 var marker;
	 var map;
	 var coords;
	 var dirrecion;
};

FRDLocation.set_location = function (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

	  coords = new google.maps.LatLng(latitude, longitude);

    var options = {
        zoom                    : 16,
        center                  : coords,
        mapTypeControl          : false,
        navigationControlOptions:
        {
            style: google.maps.NavigationControlStyle.SMALL
        },
        disableDefaultUI        : true,
        //zoomControl: true,
        mapTypeId               : google.maps.MapTypeId.ROADMAP
    };

	marker = new google.maps.Marker({
      position: coords,
      title:"Marcador",
  	});

    map = new google.maps.Map(document.getElementById("location-map"), options);

    google.maps.event.addListener(map, 'click', function(event) {

		    coords = event.latLng;
		    marker.setPosition( coords );
		    map.panTo( coords );
		    obtenerAddress(coords);

  	});

    map.setCenter(coords);
    marker.setMap(map);
    obtenerAddress(coords);

};

jQuery(document).ready(function () {
    Utils.geo_location(FRDLocation.set_location);
});
