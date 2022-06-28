// async function getData() {
//     let response = await fetch('https://api.publicapis.org/entries')
//     let res = await response.json();
//     console.log(res);

//     let data = res.entries
//     // console.log(data);
//     retriveData(data)
    
// }

// getData()

// function retriveData(data) {
//     data.forEach(e =>  
//         console.log(e.Description); 
//     });

    
// }

function Myobj(name ,dob) {
    this.name = name;
    this .dob= dob;
}

let obj = new Myobj('raj',1995)


console.log(obj);


// let obj1 = {
//     name : 'kartik',
//     dob : '2001',
//     details :() => {
//         console.log("details are " + this.name + this.dob);

//     }
// }

// obj1.details()



// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//       console.log(this.message); // What is logged?
//     }
//   };
//   // we can fix it by passing object as parameter on settimeout otherwise it will print undefined
//   setTimeout((e)=>{
//     e.logMessage();
//   }, 1000,object);














