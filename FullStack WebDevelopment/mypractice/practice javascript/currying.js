// this is an infinite currying function 
// refer video technical sudeja infinite currying  

const myfunc = (a) =>{
    return (b) =>{
        if (b) return myfunc(a+b) ;
        return a;
            
    }
}

console.log(myfunc(5)(10)(45)());