// syntax for declaring a promise 

const p = new Promise((res,rej)=>{
    res("this is resolve area");
    rej("this is reject area")
})

// handle a promise 
p.then((data)=>{
    //resolved(success data ) handled here
    console.log(data);
})
.catch((data)=>{

    //error(reject) hamdled here
    console.log(data);
})
.finally(()=>{
    console.log("this block executes no matter the promises resolved or rejects");
})


// ------------------------------------------------------------------------------------

let userObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rollNum = [1,2,3,4,5,6,7,8,9];
        resolve(rollNum);
        reject("rollnumber nut found error !!!!")
    },2000);
})

let UserData = (indxData) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let user = {
                name : "rakeshraj",
                dob  : "28/06/1996"
            }
            if (indxData == 2) {
                res(`my name is ${user.name} and dob is ${user.dob} and rollnum is ${indxData}`)
            }
            else{
                rej("data not found !!!!");
            }
        },2000,indxData)
    })
}

userObj.then((res)=>{
    console.log(res);
    return UserData(res[1])
})

.then((data)=>{
    console.log(data);
})

.catch((err)=>{
    console.log(err);
})

