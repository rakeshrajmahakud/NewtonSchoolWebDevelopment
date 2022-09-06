// syntax :-
//  {anydatatype => value }
// we can use any datatpe inside map as key and use "=>" in between key and value 

// ex:-

let data = new Map([
    ["name", "Rakeshraj"],
    [true, "boolean key"],
    [100,"hundred"],
])

console.log(data);  //op:-  {
                            //     'name' => 'Rakeshraj',
                            //     true => 'boolean key',
                            //     100 => 'hundred'
                            //}

data.set('color','green');
console.log(data.size);
console.log(data.has(100)); //true  it checks the key ispresent or not .
console.log(data.get(100)); //op;- "hundred"       it returns he value of that key

data.forEach((v,k)=>{
    if (k == 100) {
        data.delete(k)    // this method delete a key and value from map.
        
    }
})
console.log(data);




