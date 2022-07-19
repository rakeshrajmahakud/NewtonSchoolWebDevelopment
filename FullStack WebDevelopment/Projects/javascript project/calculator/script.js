let display = document.getElementById("input");
let buttons = Array.from(document.getElementsByClassName("btn-class"));

console.log(buttons);

buttons.map(button =>{
    button.addEventListener('click',(e) =>{
        switch(e.target.value){
            case "C":
                display.value = "";
                break;
            case "=":
                display.value = eval(display.value);
                break;
            default:
                display.value += e.target.value;
        }
    })
})
