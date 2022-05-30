// the setinterval set a prefired time frame to do that thing again and again on that interval of time
// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.
// Note
// To execute the function only once, use the setTimeout() method instead.
// To clear an interval, use the id returned from setInterval():
// myInterval = setInterval(function, milliseconds);
// Then you can to stop the execution by calling clearInterval():


// ex:
// clearInterval(myInterval);
// function setinterval() {
//     setInterval(()=>{
//         alert("hello world");
//     },1000);
// }