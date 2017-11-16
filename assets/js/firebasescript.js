

function addNode(postion){
    var data = {"name":null, "place":null, "capacity":null,"status":null, "lat":postion.lat, "lng":postion.lng, "lastfull":new Date(), "lastpick":new Date()};
    swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    });

    var steps = [
        {
            title: 'Step 01',
            text: 'Node Name: ชื่อโหนด'
        },
        {
            title: 'Step 02',
            text: 'Places Name: ชื่อที่ตั้ง'
        },
        {
            title: 'Step 03',
            text: 'Bin Capacity: ขนาดถัง [0-6]'
        }
    ];

    var isCorrect = false;
    swal.queue(steps).then(
        function (result) {
            data.name = result[0];
            data.place = result[1];
            data.capacity = result[2];
            data.status = 0;




            //QueryNodelist();
            swal.resetDefaults();

    }, function () {
        swal.resetDefaults()
    });

 //   swal({
 //       title: 'All done!',
 //       html:
 //       'Your answers: <pre>' +
      //  JSON.stringify(result) +
  ///      '</pre>',
  //      confirmButtonText: 'Confirm!'
  //  });
   // console.log(data);
  //  console.log(gg);
    //AddNodeToFirebase(data);



    function checkCorrect(res) {
        console.log(res);
        return false;

    }


}

function AddNodeToFirebase(data) {
    var rootRef = firebase.database().ref();
    var nodeList = rootRef.child("NodeList");
    var node = nodeList.child(data.name);

    node.set(data);
    var ref = firebase.database().ref("Players");
    /*firebase.database().ref('Nodelist/' + data.Name).set({
        Capacity: data.Capacity,
        Status:"empty",
        Lat:position.lat,
        Long:position.lng

    });*/

}

var starCountRef = firebase.database().ref('NodeList');
starCountRef.on('value', function(Snapshots) {
    Object.keys(Snapshots.val()).forEach(function(element) {
        console.log({Nodename:element ,lat: Snapshots.val()[element].lat ,lng: Snapshots.val()[element].lng});
    })
});