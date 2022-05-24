//plz refer dom.js for html content 

function getName(params) {
    let name1 = document.getElementsByName("u_name")[0].value;   // here we write [0] for accessing the first name type 
//we can access the element by its name type.
    document.getElementsByName("u_name")[0].value="";

document.getElementsByTagName("h1")[0].innerHTML =name1;   //accessing the tag by using tagname .
}