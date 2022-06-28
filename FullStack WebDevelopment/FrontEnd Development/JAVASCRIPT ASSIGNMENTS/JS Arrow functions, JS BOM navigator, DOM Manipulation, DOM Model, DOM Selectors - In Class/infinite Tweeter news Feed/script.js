const docBody = document.querySelector('body');
function addElementToBody(num = 50){
    let i=0;
    let j  = 0;
    while(i < num){
        const h1 = document.createElement('h1');
        h1.innerHTML = "i am infinite content";
        docBody.appendChild(h1);
        
        i++;
        
    }
}
addElementToBody();
window.addEventListener('scroll', () =>{
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight-5){
        addElementToBody();
    }
})