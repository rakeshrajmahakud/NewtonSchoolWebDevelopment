let divcontain = document.querySelector('.container');

window.addEventListener('scroll',()=>{
    let {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    console.log({scrollTop,scrollHeight,clientHeight});
    if (clientHeight+scrollTop >= scrollHeight -5) {
        fetchData()
    }

})

function fetchData() {
    let mydiv = document.createElement('div');
    mydiv.classList='mydivstyle';
    document.body.append(mydiv);
}


fetchData()
fetchData()
fetchData()