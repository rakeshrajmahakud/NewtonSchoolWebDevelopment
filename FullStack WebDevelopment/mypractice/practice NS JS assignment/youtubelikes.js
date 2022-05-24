
let counter = 0 ;
function likesfunc(){
    counter++;
    document.getElementById("text").innerHTML = counter;
}

function dislikesfunc(){
    if(counter === 0){
        return;
    }
    
    document.getElementById("text").innerHTML = --counter;
}
function autocounter() {
    setInterval(()=>{
        document.getElementById("text").innerHTML = counter++;
    },1)();
    
}