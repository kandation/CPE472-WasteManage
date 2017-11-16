var map;
var cmuLocation = {lat: 0, lng: 0};


function initialize(){
    loadMap();
    callDraw();
}

function loadMap() {
    var engLocation = {"lat": 18.795561, "lng":98.951433};
    var mapOption = {
        zoom: 17,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: engLocation
    }
    map = new google.maps.Map(document.getElementById('map'), mapOption);
}