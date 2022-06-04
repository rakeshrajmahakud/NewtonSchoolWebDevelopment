// The length property returns the length of a string:

// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = txt.length;

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// Slice out a portion of a string from position 7 to position 13 (13 not included):

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);

/*Note
JavaScript counts positions from zero.
First position is 0.
Second position is 1.  
If a parameter is negative, the position is counted from the end of the string.
This example slices out a portion of a string from position -12 to position -6: */

// Example
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(-12, -6);

// If you omit the second parameter, the method will slice out the rest of the string:
// let part = str.slice(7);

// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

// Example
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");


// Note
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// Example
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

// Note
// Regular expressions are written without quotes.
// To replace all matches, use a regular expression with a /g flag (global match):

// Example
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

// Example
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

// Example
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// JavaScript String charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// Example
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings:

// Example
// let text = "HELLO WORLD";
// let char = text[0];
// Note
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
// Example
// let text = "HELLO WORLD";
// text[0] = "A";    // Gives no error, but does not work
// Converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.

// JavaScript String split()
// A string can be converted to an array with the split() method:

// Example
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe
// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters:

// Example
// text.split("")

// JavaScript String concat()
// Examples
// Join two strings:

// let text1 = "sea";
// let text2 = "food";
// let result = text1.concat(text2);
// // Join two strings:

// let text1 = "Hello";
// let text2 = "world!";
// let result = text1.concat(" ", text2);
// // More examples below./

// Definition and Usage
// The concat() method joins two or more strings.
// The concat() method does not change the existing strings.
// The concat() method returns a new string.

// Syntax
// string.concat(string1, string2, ..., stringX)
// Parameters
// Parameter	Description
// string1,
// string2,
// stringX	Required.
// The strings to be joined.
// Return Value
// Type	Description
// A string	A new string containing the combined strings.

// More Examples
// Join three strings:

// let text1 = "Hello";
// let text2 = "world!";
// let text3 = "Have a nice day!";
// let result = text1.concat(" ", text2, " ", text3);


// JavaScript String includes()
// Examples
// Check if a string includes "world":

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// let text = "Hello World, welcome to the universe.";
// let result = text.includes("world", 12);
// More examples below.

// Definition and Usage
// The includes() method returns true if a string contains a specified string.

// Otherwise it returns false.

// The includes() method is case sensitive.

// Syntax
// string.includes(searchvalue, start)
// Parameters
// Parameter	Description
// searchvalue	Required.
// The string to search for.
// start	Optional.
// The position to start from.
// Default value is 0.
// Return Value
// Type	Description
// A boolean.	true if the string contains the value, otherwise false.
// ADVERTISEMENT

// More Examples
// Start at position 12:

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world", 12);

// JavaScript String search()
// Examples
// Search for "Blue":

// let text = "Mr. Blue has a blue house";
// let position = text.search("Blue");
// Search for "blue":

// let text = "Mr. Blue has a blue house";
// let position = text.search("blue");
// Search for /Blue/:

// let text = "Mr. Blue has a blue house";
// let position = text.search(/Blue/);
// Search for /blue/:

// let text = "Mr. Blue has a blue house";
// let position = text.search(/blue/);
// Search case insensitive:

// let text = "Mr. Blue has a blue house";
// let position = text.search(/blue/i);
// Definition and Usage
// The search() method matches a string against a regular expression **

// The search() method returns the index (position) of the first match.

// The search() method returns -1 if no match is found.

// The search() method is case sensitive.

// Note
// ** If the search value is a string, it is converted to a regular expression.

// See Also:
// String Search
// Regular Expression Tutorial
// Regular Expression Reference
// Syntax
// string.search(searchValue)
// Parameters
// Parameter	Description
// searchValue	Required.
// The search value.
// A regular expression (or a string that will be converted to a regular expression).
// Return Value
// Type	Description
// A number	The position of the first match.
// -1 if no match.
// ADVERTISEMENT

// The Differense Between
// String search() and String indexOf()
// The search() cannot take a start position argument.

// The indexOf() method cannot search against a regular expression.

// The Differense Between
// String search() and String match()
// The search() method returns the position of the first match.

// The match() method returns an array of matches.

// Regular Expression Search Methods
// In JavaScript, a regular expression text search, can be done with different methods.

// With a pattern as a regular expression, these are the most common methods:




// if you want to find any latter present at forst aand end ten you use 
// startsWith()
// endsWith()

// it will replace word in a string
// .replace("what to replace","what replace");

//////match method:::::
// let str = "hi my my My i"
// let res = str.match(/my/gi)
// console.log(res.length)