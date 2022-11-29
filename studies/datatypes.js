
/*
* DATATYPES:
* 
*   0. Refers to the various types and methods where data can be stored or mainpulated.
*
*   1. Can be broken down into either simple or compex data types.
*
*   2. The main difference between simple and complex data types is that simple data 
*    types are immuteable, meaning they can be changed, and they are not objects. 
*    While all complex data types are classified as objects.
*/
//SIMPLE DATA TYPES:
    //STRINGS
    var firstName = "Jordan";
    /* Strings are a collection of characters or symbols surrounded by quotes.
    * We most use strings when we want words or phrases printed to the console.
    */
    // Individual characters in a string can be accesed using bracket notation
    console.log(firstName[0]); // prints => "J"
    //Strings have length properties that return the total numbers a characters in a string
    console.log(firstName.length); // prints => 6
    // Strings can be combined with other strings using the + operator
    var lastName = "Davis";
    console.log(firstName + lastName); // prints "Jordan Davis" 
//NUMBERS
    var number = 5;
    //Numbers are any numerical value: postive, negative, or even with decimal points.
    //Like regular numbers they can be added, subtracted, multiplied, or divided.
    console.log(number + 5); // prints => 10
    //New values can be created with arithmetic expressions.
    number = 1.5;
    number = 10 + 2;
    number = 10 - 2;
    number = 10 * 2;
    number = 10 / 2;
//BOOLEANS
    /* Booleans are a true or false value. 
    * They're similar to on/off switches.
    * You create a boolean by simple typing true or false for whatever value 
    * you are trying to give. 
    */
    var myBoolean = true;
    console.log(myBoolean); // prints => true
    // Booleans can be also created usuing comparison operators. 
    var comparison = 1 === '1';
    console.log(comparison); // prints => false
//UNDEFINED 
    /* Undefined is a value that is given to data types that have been declared
    * but not assigned or initialized.
    */
    var name; 
    console.log(name); // prints undefined
//NULL 
    /* Null is a special value that represents "nothing" or "empty".
    * The difference between null and undefined is that while undefined has no
    * value, null itself is the value that's being assigned.
    */
    var myNull = null;
    console.log(myNull); // prints => null
//NaN
    /* NaN stands for Not a Number. It is used when trying to figure out if
    * a data type is a number or not.
    */
    // You can use the function isNaN() to check if someting is not a Number.
    var myString = "Hello";
    console.log(isNaN(myString)); // prints => true
//COMPLEX DATA TYPES:
//ARRAYS
    // Arrays are used to hold multiple data types.
    // Array are held together using brackets.
    var myArray = []; // An array literal
    /* Every value in an array has an index - the number position of the 
    * value in the list.
    * The first value in the list has an index of 0, the second has an index of 1,
    * and so on and so on.
    */
    myArray = ["a", "b", "c"]; // An array of string data types
    // Arrays van contain multiple data types, including strings, numbers, and booleans.
    var myNewArray = [12, "hello", false]; // An array of number, string, and boolean data types.
    // Specific values in an array can be accessed using bracket notation
    console.log(myNewArray[1]); // prints => "hello"
//OBJECTS
    // Objects are used to hold data.
    // Objects are held together using curly braces.
    var myObject = {}; // An object literal
    /* Objects have a few differences from arrays. While arrays have indices, objects
    * are stores using key/value pairs. These key/value pairs can contain references
    * to any other data type.
    */
    myObject = {
        name: "Jordan Davis",
        Age: 23, 
    }; // this is an object with string and number data types, assigned to "name and "age'
    /* Since objects don't have indices, it means the pairs in an object have no order
    * or length. 
    * Values can be accessed using bracket notation, but the key must be typed out as a string
    */
    console.log(myObject["name"]); // prints => "Jordan Davis"
    //Values can also be accessed using dot notation
    console.log(myObject.Age); // prints => 23
//FUNCTIONS
   /* 0. Functions are reusabe blocks of code that accept inputs, process them, and return
    * a new data value.
    *
    * 1. Functions are defined with the function keyword, followed by a name, 
    * followed by parentheses ().
    * 
    * 2. The parameter may include parameter names separated by commas. 
    *
    * 3. The code to be executed is placed inside curly braces {}.
    *
    * 4. Parameters are placeholders for our arguments.
    *
    * 5. Arguments are what values we want to run through the function.
    *
    * 6. Functions have a local scope, meaning that variables created in a function can't be 
    * accessed in the global scope (outside the function).
    *
    * 7. However, functions have access to variables created in the global scope.
    *
    * 8. Functions can optionally take inputs, meaning they don't need arguments.
    * 
    * 9. Functions don't have to return a value, they can print something to the console, 
    *   change a variable, etc.
    */
    function add(a, b) {
    return a + b;
    }
    console.log(add(2, 2)); // prints => 4
    //You can also assign a function to a variable and call the variable name instead of the function name
    var myFunction = function(a, b) {
        return a - b;
    };
    console.log(myFunction(4, 2)); // prints => 2
//INFINITY AND -INFINITY 
//INFINITY
    /*Infinity is a global property that has a numeric value of infinity.
    * Infinity is greater than any other number. Any positivenumber multiplied
    * by Infinity equals Infinity, and any number divided by Infinity equals 0.
    */
    var infinite = 2 * 1.7976917388693157E+10310;
    console.log(infinite); //prints => Infinity 
//-INFINTY
    /* Negative infinity is different from infinity in a couple of ways:
    * - The sum of two -infinities is positive infinity.
    * - The sum of positive and negative infinity is -infinity.
    * - -Infinity, when divided by any positive number is -infinity.
    * - -Infinity, divided by any negative number is positive infinity.
    */
    console.log(-Infinity * -Infinity); //prints => Infinity
     console.log(-Infinity * Infinity); //prints => -Infinity
//THE DIFFERENCE BETWEEN VALUE AND REFERENCE
//VALUE
    /* All simple (primitive) data types are passed by value. If a simple type is 
    * assigned a variable, that means that the variabe contains the simple value.
    */
    var a = 5;
    var b = "string";
    /* Var a contains 5 while var b contains "string". When we assign variables 
    * to other variables, we copy the value to the new variable. They are copied by  the value.
    */
    var c = a;
    var d = b;
    /* The values of vars a and b have now been copied to vars c and d. Both 
    * a and c now contain 5. Changing one of these variables does not affect 
    * the other as they have no relationship to eachother besides the initial copy.
    */
//REFERENCE
    /* Variables that are assigned a non-primitive value are given a reference 
    * to that value. That reference simply refers yout to that location in memory.
    * The variables don’t actually contain the value of the non-primitive value.
    */
    var myArray = [1];
    var myArrayReference = myArray;
    /* myArrayReference does not equal [1], it simply refers my computer to the
    * myArray variable. Unlike simple data tyes they do have a relationship and whatever changes
    * made to myArray will be shown in myArrayReference.
    */
    myArray.push(2);
    console.log(myArrayReference); // prints => [1, 2]