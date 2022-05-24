#            Javascript Questions!
###  What is map ,reduce and filter in js ?
map creates a **new array** by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce , on the other hand, takes all of the elements in an array and reduces them into a single value.

###  What is callback function ?
- In JavaScript, functions are first-class citizens. Therefore, you can pass a function to another function as an argument. By definition, a callback is a function that you pass into another function as an argument for executing later
- A callback is basically a function that is to be executed after another function has finished executing. Hence giving it a name-callback. In javascript, functions are also objects because which functions can take functions as arguments and can be returned by another function.
- Some of the callbacks are also events that are called to give the user a chance to react when a certain state is triggered, for example, an alarm getting triggered when the number of transactions to be executed per minute goes way beyond the threshold value.

### What is synchronous and asynchronous in JavaScript with example?
- In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. 

- In asynchronous operations, on the other hand, you can move to another task before the previous one finishes
- it does not block the rest of the code from executing and after all the code its execution, it gets pushed to the call stack and then finally gets executed. This is what happens in asynchronous JavaScript

### What are the different Data Types supported by Javascript?
Data types can be **primitive as well as non-Primitive**. Primitive data types are the ones that are predefined in Javascript whereas non-primitive data types are the ones that are created by the programmer. 
##### Premitive Types
- String
- BigInt
- Boolean
- Number
- Undefined
- Null
- Symbol
##### Non Primitive Data types: 
- Arrays
- Objects 

###  What is the difference between ==  and  === ?
Both the equals sign are used to test equality on the left and right-hand side of the operator but there is a difference between them. The == is you can say a loose equality operator. This operator first changes the value on both sides of the operator to a common data type and then compares the value and returns true if they are equal and false if they are not. 

The === is you can say a strict equality operator. This operator compares not just the values but also the type of values on both sides of the operator. 

### Is Javascript a case sensitive language? 
Yes, Javascript is a case sensitive language. We have to be careful with capitalisation whenever we are using keywords or function name or variable name or any other identifier in Javascript.

### What is the use/purpose of ‘this’ operator in Javascript? 
The ‘this’ keyword in Javascript is one of those features that confuses a lot of developers. The ‘this’ in Javascript is used differently than in any other language for example Java or Python. ’This’ references the object that is executing the current function. If that function is part of an object, we call that function a method. So if that function is a method in an object ‘this’ references that object itself. Otherwise, if that function is a regular function, that is if that function is not a part of an object, ‘this’ keyword references the global object. 

### What is a cookie in Javascript? 
A cookie is actually the amount of information that is in between the client-side and the server-side. This information is stored by the web browser at the time of browsing. That is the reason that before using some of the web sites, you get an option to accept all the cookies!  
Whenever a request is sent from the client-side to the server-side, each time it is treated as a new request sent by a new user. To recognise the old user, a cookie is added with the request. Due to this cookie, the server identifies the user on the client-side. 

### What is NaN property in Javascript? 
NaN stands for Not a number. As it is pretty clear from the name, NaN property of Javascript returns true when a variable passed to it is not a number and otherwise returns false. The NaN property is the same as the Number.NaN property. We can use isNaN() – a global function to check if a value is NaN value. 

### What is the difference between Java and Javascript? 
- Most beginners often get confused between Java and Javascript. But the only thing in common between them is the word Java. It is an object-oriented programming language whereas Javascript is an object-oriented scripting language.      
- Java requires a pre-setup of JDK and JRE whereas javascript does not require them. In java, the code is first compiled but in Javascript, the codes are all in text and do not need to compile. It runs on a virtual machine whereas Javascript runs on a web browser. 
- 
### What is closure in Javascript?
In Javascript, a closure is always created with the creation of a function. The closure is a Javascript property in which the inner function has access to the outer function’s variable. Due to this property, closure has 3 scopes :
- Access to variables of outer function variables as mentioned in the definition of closures.
- Access to its own scope.
- Access to all the global variables.

### What is Lexical Scope in JavaScript?
Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.
