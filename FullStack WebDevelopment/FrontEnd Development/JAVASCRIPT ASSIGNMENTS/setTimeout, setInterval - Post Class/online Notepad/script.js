const textarea = document.getElementById("textarea");
const featureflag = document.getElementById("feature-flag");
(function getDataFromStorage(){
    let data = localStorage.getItem('autosave-data');
    textarea.value = data;
})
featureflag.addEventListener('change', ()=>{
    let autoSave;
    if(featureflag.checked){
        autoSave = setInterval(()=>{
            localStorage.setItem('autosave-data', textarea.value);
        }, 1000);
    } else clearInterval(autoSave);
})