
function onInit() {
BuildNode()
    
}


function BuildNode() {
    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {

     var dom = "Nodelist"
    
            var status = (Snapshots.val()[element].status >= 1 ? "checked":"")
            var node = document.createElement('div');
            var str = `
            <label class="switch">
            <input type="checkbox" class="Toggleswitch" id="Toggle`
            +element+
            `" ` + status + `>
            <span class="slider"></span>
            </label><br><br>
            `
            node.innerHTML = '  <div class="col-lg-3 col-md-6 col-sm-6">'+
            '<div class="card card-stats">'+
              ' <div class="card-header" data-background-color="'+Snapshots.val()[element].type+'">'+
                    '<i class="material-icons">delete</i>'+
                '</div>'+
                '<div class="card-content">'+
                    '<p class="category">'+Snapshots.val()[element].place+'</p>'+
                    '<h3 class="title">'+element+
                        '<small></small>'+
                    '</h3>'+
                '</div>'+
                '<div class="card-footer">'+
                    '<div class="stats">'+
                        + Snapshots.val()[element].capacity + 'L' + str +
                    '</div></div></div></div>'
                    
                   
           
            id = "Toggle"+element

            


            document.getElementById(dom).appendChild(node);
            document.getElementById(id).addEventListener('click',function() {
                var stanew = this.checked == true ? 2:0
                    UpdateNodeToFirebase(element,stanew)
                   
                } )
                dom = ""
        })
    });

    
}

function UpdateNodeToFirebase(name,sta) {
      
    var starCountRef =  firebase.database().ref('NodeList/' + name)
    starCountRef.update({status:sta});
        console.log("Update Success")
   
  }
  function UpdateStatus() {
    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
          var x = document.querySelectorAll(".Toggleswitch");
          
          x.forEach(function(params) {
            
             params.checked = Snapshots.val()[params.getAttribute( 'id' ).split('Toggle')[1]].status
          })
          
          
        
          
      })
  
      console.log("UpdateStatus every 5 s")
      
  }
  setInterval(UpdateStatus,5000)

  function name(params) {
    var starCountRef = firebase.database().ref('NodeList');
    starCountRef.on('value', function(Snapshots) {
        Object.keys(Snapshots.val()).forEach(function(element) {
        
        })
  })
}