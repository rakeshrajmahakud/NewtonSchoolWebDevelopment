let genpassword = document.querySelector('#generate');
let displaypass = document.querySelector('#display-password')


genpassword.addEventListener('click',(e)=>{
    displaypass.value = getPassword()



})


function getPassword() {
    let randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*(){}[]<>?"
    let passlength = 16;
    let password = '';

    for (let i = 0; i < passlength; i++) {
        let randomnum = Math.floor(Math.random() * randomchar.length);
        password += randomchar[randomnum];
        
    }

    return password;
}
