// JavaScript Type Conversion
// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans
// JavaScript Type Conversion
// JavaScript variables can be converted to a new variable and another data type:

// By the use of a JavaScript function
// Automatically by JavaScript itself
// Converting Strings to Numbers
// The global method Number() can convert strings to numbers.

// Strings containing numbers (like "3.14") convert to numbers (like 3.14).

// Empty strings convert to 0.

// Anything else converts to NaN (Not a Number).

// Number("3.14")    // returns 3.14
// Number(" ")       // returns 0
// Number("")        // returns 0
// Number("99 88")   // returns NaN
// Number Methods
// In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:

// Method	Description
// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer
// The Unary + Operator
// The unary + operator can be used to convert a variable to a number:

// Example
// let y = "5";      // y is a string
// let x = + y;      // x is a number
// If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

// Example
// let y = "John";   // y is a string
// let x = + y;      // x is a number (NaN)