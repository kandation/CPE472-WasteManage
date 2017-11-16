window.onload=function(){
    
    
  
    }
 var name = "";

    function QueryNodelist(element) {
        $("#Btn").removeClass('hidden');
      var starCountRef = firebase.database().ref('NodeList');
      starCountRef.on('value', function(Snapshots) {
         
                 
                var status = (Snapshots.val()[element].status >= 1 ? "checked":"")
                str = `
                <label  class="switch">
                <input type="checkbox"  class="Toggleswitch" id="Toggle`
                +element+
                `" ` + status + `>
                <span class="slider"></span>
                </label><br><br>
                `
                div = document.getElementById( 'NodeList' );
                div.insertAdjacentHTML( 'beforeend', element+str+"<br>" );
                id = "Toggle"+element
    
                name = element
    
                document.getElementById(id).addEventListener('click',function() {
                    var stanew = this.checked == true ? 2:0
                        UpdateNodeToFirebase(element,stanew)
                        console.log(this.checked)
                    } )
        
    
          })
          
      
    }
    function UpdateNodeToFirebase(name,sta) {

      var starCountRef =  firebase.database().ref('NodeList/' + name)
      starCountRef.update({status:sta});
          console.log("Update Success")
     
    }
    function Collected() {

      var starCountRef =  firebase.database().ref('loggingPick/')
      starCountRef.push({timestamp:Date.now(),Nodename:name});
          console.log("Collect Success")
          swal("Good job!", "Collected !", "success");
     
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