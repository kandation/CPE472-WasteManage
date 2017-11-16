var Normal = [0,0,0,0,0,0,0]
var Recycle = [0,0,0,0,0,0,0]
var Danger = [0,0,0,0,0,0,0]

type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },



    initDashboardPageCharts: function() {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['S','S','M','T','W','T','F'],
            series: [
                Normal
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['S','S','M','T','W','T','F'],
            series: [
                Recycle
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['S','S','M','T','W','T','F'],
            series: [
                Danger
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 10,
            chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
            }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function(value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);
        Normal = [0,0,0,0,0,0,0]
        Recycle = [0,0,0,0,0,0,0]
        Danger = [0,0,0,0,0,0,0]

    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }



}






setInterval(function() {


    var i=0,j=0,k=0;
    var green = []
    var red = []
    var orange = []
    var greenName=[]
    var redName= []
    var orangeName=[]

    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
    
            if(Snapshots.val()[element].type == "green"){
                i++;
                greenName.push(element)
            }
            if(Snapshots.val()[element].type == "red"){
                j++;
                redName.push(element)
            }
            if(Snapshots.val()[element].type == "orange"){
                k++;
                orangeName.push(element)
            }
    
        })

        console.log(i,j,k)
        console.log(greenName,redName,orangeName)

    })

    var day = ['S','S','M','T','W','T','F'];

    var starCountRef = firebase.database().ref('loggingPick');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
            var Nodename = Snapshots.val()[element].Nodename
            var a = new Date(Snapshots.val()[element].timestamp * 1000);
            if(greenName.indexOf(Nodename) != -1 ){

               
               Normal[a.getDay()]++;
    
                

            }
            if(redName.indexOf(Nodename) != -1){
                
                Recycle[a.getDay()]++;
                
            }
            if(orangeName.indexOf(Nodename) != -1){
                Danger[a.getDay()]++;
               
            }

    
        })

        console.log(i,j,k)
        console.log(green,red,orange)

    })
    demo.initDashboardPageCharts();


    var Full=0
    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
                      if(Snapshots.val()[element].status == 2){
            Full++
        }
        })
        document.getElementById("FullBin").innerText = Full;
    });

    var Amount=0
    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
                      if(Snapshots.val()[element].status == 2){
                        Amount += Snapshots.val()[element].capacity 
        }
        })
        document.getElementById("Amount").innerText = Amount;
    });


} ,5000)


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }