function formvalidate(){
    var username = document.getElementById("UserName").value;
    var Email = document.getElementById("Email").value;
    var Phone = document.getElementById("Phone").value;
     var error = document.getElementById("error");
     var text = "" ;
     if (username.length < 3){
        text = "please enter avalid name";
        error.innerHTML = text;
        return false;
     } 
     else if(Email.indexOf("@") == -1){
     text = "please enter avalid email";
     error.innerHTML = text;
     return false;

     } 
     else if(isNaN(Phone) || Phone.length < 11){
        text = "please enter avalid phone";
        error.innerHTML = text; 
        return false;

     } 
     else{
      alert("done");
     }

}

