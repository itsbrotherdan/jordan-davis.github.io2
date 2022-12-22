/**
 * VARIABLES: Variables are JS way of storing data/values.
 * 
 * a) DECLARATION AND ASSIGNMENT - Variables must first be declared and then assigned - this can happen on the same line or a separate line.
 * 
 * b) VAR, LET, AND CONST - To declare a variable, use VAR, LET or CONST. 
 * Var is the original way to declare variables that are available to the entire program or function. 
 * ES6 added LET and CONST were JS because programmers wanted a way to declare variables that would be block scoped. 
 * BlockScope is when any variable initialized within a block of code can only be accessed within that block . 
 * CONST is for variables that are meant to never change (constant).
 * 
 * c) HOISTING - Before code execution, variables and functions are moved to the top of their scope. 
 * VAR variables are initialized with a value of undefined while let and CONST are not initialized, declarations are hoisted.
 * 
 */
// DECLARATION AND ASSIGNMENT
//Declaring a variable using var without assigning it to a value (initializing it).
var greeting; 
console.log(greeting); //Logging it will print undefined since the variable has not been assigned a value.
//Declaring a variable and assigning it to a value at once.
var greeting = 'Hello, how are you?';
// VAR LET AND CONST
//Declaring a variable within a block scope using LET
for (let i = 0; i < 10; i++) {
/////////////////////////////
}
console.log(i) //Will log a ReferenceError because i is not defined outside the block of code.
//Example using VAR
for (var a = 0; a < 10; a++) {
/////////////////////////////
}
console.log(a) //Will log 10 to the console since variable is declared using var.
//What happens when we console.log(j) before the for loop =>
console.log(a) //Will log undefined since the variable is available but it has not been defined yet.
for (var a = 0; a < 10; a++) {
/////////////////////////////
}
//Declaring a variable using const =>
const birthday = 11;
//Trying to reassign it
birthday = 12 //Will log a TypeError since you can't re-assign a constant variable.
//Declaring a variable using let.
let age = 2000;
//Reassinging it.
age = 50; 
//Declaring a variable using const.
const size = 29.9;
//Trying to redeclare.
const size = 49.9; //Will send an error because size has already been declared.
//Declaring a variable using let.
let people = 100;
let people = 50; //Will send an error because people has already been declared.
//HOISTING
console.log(z); //Will log undefined since var is "hoisted".
var z = 5;
//What happens with var and const during hoisting.
console.log(x); //Will send an error because you cannot access 'x' before being initialized. Variables declared using let or const do NOT get hoisted.
let x = 10;
//What happens with hoisting in functions.
start(); //Will log 'starter' to the console because functions get hoisted.
function start() {
    console.log('starter');
}
//What happens with an anonymous function.
start2(); //Will log error because you cannot access start2 before being initialized.
const start2 = () => {
    console.log('starter2');
}