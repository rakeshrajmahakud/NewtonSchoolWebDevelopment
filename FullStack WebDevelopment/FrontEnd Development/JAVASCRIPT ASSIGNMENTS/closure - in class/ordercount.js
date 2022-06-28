// Order count - JS Closure
// You need to make an order counter to keep track of the total number of orders received

// Complete the function generateOrder() which returns a function which increments the count and returns the order number formed with concatenating prefix - "Total orders = " + count.

// Note: The function generateOrder() will be called internally. You do not need to call it yourself.

let generateOrder = function(starting) {
    let count = 0;
  return function countUp() {
      count++;
      return "Total orders = " + count;
    }  
  }