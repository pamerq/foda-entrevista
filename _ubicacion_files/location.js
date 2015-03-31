var FRDLocation = function () {
};

FRDLocation.set_location = function (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var coords = new google.maps.LatLng(latitude, longitude);

    var options = {
        zoom                    : 16,
        center                  : coords,
        mapTypeControl          : false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        disableDefaultUI        : true,
        //zoomControl: true,
        mapTypeId               : google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("location-map"), options);
};

jQuery(document).ready(function () {
    Utils.geo_location(FRDLocation.set_location);

});

