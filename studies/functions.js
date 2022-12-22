/**
 * FUNCTIONS: A function is a block of code designed to perform a particilar task.
 * 
 * a) MAKING A FUNCTION: A function must be defined before it is executed.
 * 
 * b) FUNCTION PARAMETERS VS. ARGUMENTS: A functions parameters are names listed in the functions definition while function arguments are the values we pass to the function.
 * 
 * c) ASSIGNING A FUNCTION TO A VARIABLE: Functions can be assigned to a variable.
 * 
 * d) SCOPE: Variables declared inside a function are only accessible within the function.
 * 
 * e) CLOSURES: Functions inside a function have access to parent function's variables.
 * 
 */
// MAKING A FUNCTION
//How to define a function.
function add(a, b) {
    return a + b;
};
//How to invoke a function.
add(10, 20); // returns 30.
// FUNCTION PARAMETERS VS. ARGUMENTS
function subtract(a, b) { //a and b are parameters of the function.
    return a - b;
};
subtract(50, 25); // 50 and 25 are arguments passed into the function.
// ASSIGNING A FUNCTION TO A VARIABLE
let myFunction = function(a, b) {
    return a / b;
};
myFunction(100, 10); //Invoking the function by referencing the variables name.
// FUNCTION SCOPE
//Declaring a variable inside a function.
function multiply(a, b) {
    let result = a * b; //Result is only accessable within the scope of the function.
    return result;
}
// FUNCTION CLOSURES
//Declaring a variable inside another function
function signIn() {
    var userName = 'itsbrotherdan'; //Local variable.
    function logIn() {
        console.log(userName); //userName variable is able to be accessed within the other function this is called a closure.
    }
   logIn();
}
signIn(); //itsbrotherdan will be printed to the console.