// //Capitalize the first letter of a word in the string 


// let x = "My name is rakeshraj";
// let res = "";

// for (let i = 0; i < x.length;i++){
//     if(i===0){
//         if(x[i] > x[i].toUpperCase()){
//             res = res + x[i].toUpperCase();
//         }else{
//             res = res+x[i];     
//         }
//     }
//     else if(x[i] == " " ){
//         res = res+" "+(x[i+1].toUpperCase());
//         i++;
//     }
//     else if(x[i] !== 0 ||  x[i] !== " "){
//         res = res+x[i];
//     }
// }

// console.log(res);


///////method 2///
// let y = "My name is rakeshraj";


// let temp = y.split(" ");
// for (let i = 0; i < temp.length;i++){
//     temp[i] = temp[i][0].toUpperCase()+temp[i].substring(1);
// }
// console.log(temp.join(" "));
