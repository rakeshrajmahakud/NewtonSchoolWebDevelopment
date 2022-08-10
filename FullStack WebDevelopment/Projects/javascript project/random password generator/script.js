let genpassword = document.querySelector('#generate');
let displaypass = document.querySelector('#display-password')


genpassword.addEventListener('click',()=>{
    let pass = document.querySelector('#display-password')
    displaypass.value = getPassword(pass.value)
})


function getPassword(val) {
    let randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*(){}[]<>?"
    let passlength = val;
    let password = '';

    for (let i = 0; i < passlength; i++) {
        let randomnum = Math.floor(Math.random() * randomchar.length);
        password += randomchar[randomnum];
        
    }

    return password;
}
