var drawingManager;

function name(params) {
    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
        
        })
  })
}


function callDraw() {
    drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: false,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        },
        markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
        circleOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
        }
    });
    drawingManager.setMap(map);
    google.maps.event.addListener(drawingManager, 'markercomplete', function(event) {


        console.log(event.getPosition().lat(),event.getPosition().lng())
        //addToFirebase(data);
   
    });

    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
            console.log({Nodename:element ,lat: Snapshots.val()[element].lat ,lng: Snapshots.val()[element].lng});
            if(Snapshots.val()[element].status == 2){
            markers.push({lat: Snapshots.val()[element].lat ,lng: Snapshots.val()[element].lng})
        }
        })
        setLocationInThis()
    });



 
}

function setLocationInThis(){
    getLocation();
}

var markers = [
];


function getLocation(){
    if (navigator.geolocation) {
        $('#loading').show();
        navigator.geolocation.getCurrentPosition(_setGoogleMapPinned);

    } else {
        alert("Your browser does not support Geolocation.");
    }


}

function _setGoogleMapPinned(position){
    var location = google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    location = {"lat":position.coords.latitude, "lng":position.coords.longitude};

    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      //  marker = new google.maps.Marker({
     //       position: position,
    //        map: map,
    //        title: markers[i][0]
    //    });
    }
    $('#loading').hide();
    map.setCenter(location);
   // addNode(location);
    
   var directionsService = new google.maps.DirectionsService;
   var directionsDisplay = new google.maps.DirectionsRenderer;
   
   directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay)
}






function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    
    for (var i = 0; i < markers.length; i++) {
        waypts.push({
          location: {lat: markers[i].lat, lng: markers[i].lng },
          stopover: true
     
      })
    }

    directionsService.route({
      origin: {lat: markers[0].lat, lng: markers[0].lng },
      destination: {lat: markers[markers.length-1].lat, lng: markers[markers.length-1].lng },
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var distance= 0;
        for(i = 0; i < response.routes[0].legs.length; i++){
           distance += parseFloat(response.routes[0].legs[i].distance.value);
        }
                console.log(distance + "meters")

        var route = response.routes[0];

      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }