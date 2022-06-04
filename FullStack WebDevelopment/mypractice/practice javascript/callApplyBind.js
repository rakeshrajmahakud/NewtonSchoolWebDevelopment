//Call method////////////////////////////////

const youtuber1 = {
    name : "mr rakeshraj",
    features : function(age,dob){
        console.log(`hi my name is ${this.name} my age is ${age}and my dob is ${dob}`);
    }
}
const youtuber2 = {
    name : "arbaj",
}
youtuber1.features.call(youtuber2,25,1995);

// Apply method
// Apply method similar to call method but it takes multiple arguments as an array but in call method we pass each argumentsa individually as comma separated
const people1 = {
    name : "hritik",
    features : function(age,dob){
        console.log(`hi my name is ${this.name} my age is ${age}and my dob is ${dob}`);
    }
}
const people2 = {
    name : "payal",
    features : function(age,dob){
        console.log(`hi my name is ${this.name} my age is ${age} and my dob is ${dob}`);
    }
}

people1.features.apply(people2,[25,2001])


// Bind method //////////////////////////////////
// its not compulsory that our methods are always inside an object so if there is a function outside an object then we use bind method to bind that function to perticular objects



const user1 = {
    name : "rakeshraj",
}

const user2 = {
    name : "radhika"
}

function details(age,mob,address){
    console.log(`my name is ${this.name} and my age is ${age} my mob no is ${mob} my address is ${address} `);
}

// bind method binds the external function to an object  and store that methods to any variable to call when required
let data = details.bind(user1);

data(25,555555,'odisha ,bhadrak')
