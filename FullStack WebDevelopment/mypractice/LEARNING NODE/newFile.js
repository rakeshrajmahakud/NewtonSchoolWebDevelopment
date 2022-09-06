let fs = require('fs');
let data = [
    {
        "City" : "Bhubaneswar",
    },
    {
        "City" : "Cuttack",
    },
    {
        "City" : "Mumbai",
    },
    {
        "City" : "Chennai",
    },
]

data.map((e)=>{
    let x = e.City.slice(0,2)
    e.ID = x.toUpperCase();
    return e;
})

fs.writeFileSync("mydata.json",JSON.stringify(data))