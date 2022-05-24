function checkfunc(){
    var x = document.getElementById("password");
    var y = document.getElementById("conPassword");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    }else{
        x.type = "password";
        y.type = "password";
    }
}


