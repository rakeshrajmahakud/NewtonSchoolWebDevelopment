 fetch('http://127.0.0.1:8050/data')
 .then((res)=>{
    return res.json();
 })
 .then((res)=>{
    console.log(res);
 })

