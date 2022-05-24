
function isArray(input){
    let result = Array.isArray(input);
    if (result) {
        console.log(true);
        return true;
    }else{
        console.log(false);
        return false;
    }
}