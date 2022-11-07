// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i <= 100; i++){ //counting from 1 to 100
        if (i % 15 == 0)//check if num is multple of 3 and 5
            console.log("FizzBuzz"); //if true print FizzBuzz
        else if (i % 3 == 0) //check if num is a multiple of 3
            console.log("Fizz"); //if true print Fizz
        else if (i % 5 == 0)//check if num is multiple of 5
            console.log("Buzz"); //if true print Buzz
        else{
            console.log(i);  
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}