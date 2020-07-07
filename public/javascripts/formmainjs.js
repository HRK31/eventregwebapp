
// fun to render form inputs on modal
function my(){
 
    var x=document.getElementById('fname').value;//store form values on variabale
    
     var y=document.getElementById('no').value;//store form values on variabale
       
        var z=document.getElementById('email').value;//store form values on variabale
        
       var v=document.getElementById('tickts').value;//store form values on variabale
            
            
       // for radio buttons
       var rd=$("input[name='people']:checked").val();
   
     var gd=$("input[name='gender']:checked").val();

     /*var a=document.getElementById('fn');
     var b=document.getElementById('mb');
     var c=document.getElementById('ml');*/
   
    // to render form values on respective modal screens 
    document.getElementById('fn').value=x
    document.getElementById('mb').value=y;
    document.getElementById('ml').value=z;
    document.getElementById('rt').value=rd;
    document.getElementById('tk').value=v;
    document.getElementById('gn').value=gd;
    document.getElementById('im').value=document.getElementById('ima');
       $("#fn").html(x);
       
       $("#mb").html(y);
       
       
       $("#ml").html(z);
       
       
      $("#rt").html(rd);
   
     $("#tk").html(v);
   
        $("#gn").html(gd);
       
       
    }
    
    document.getElementById('confirm').onclick = function(){
        document.getElementById('fn').disabled=false;
        document.getElementById('mb').disabled=false;
        document.getElementById('ml').disabled=false;
        document.getElementById('rt').disabled=false;
        document.getElementById('tk').disabled=false;
        document.getElementById('gn').disabled=false;
        
    }
   /* function enbl(){
        var name = document.getElementById("fn");
        name.disabled = false;
        //name.style.backgroundColor=red;
    }*/
    
    // fun to show image
       
        function showMyImage(fileInput) {
           var files = fileInput.files;
           for (var i = 0; i < files.length; i++) {           
               var file = files[i];
               var imageType = /image.*/;     
               if (!file.type.match(imageType)) {
                   continue;
               }           
               var img=document.getElementById("thumbnil");            
               img.file = file;    
               var reader = new FileReader();
               reader.onload = (function(aImg) { 
                   return function(e) { 
                       aImg.src = e.target.result; 
                   }; 
               })(img);
               reader.readAsDataURL(file);
           }    
       }
           
   
   
   