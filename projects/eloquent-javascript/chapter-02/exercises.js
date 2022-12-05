
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create empty string & array
    var str = "";
    var arr = [];
  //looping each time howevery num is = to  
  for (let i = 0; i < num; i ++){
    //set str equal to #
    str += "#";
    //push str into array
    arr.push(str);
    //logging
    console.log(str);
  }
  }
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function fizzBuzz() {
  for (var i = 1; i <= 15; i++) //counting from 1 to 100
  {
      if (i % 15 == 0)
          console.log("fizzbuzz"); //if number is multple of 3 and 5 print FizzBuzz
      else if (i % 3 == 0)
          console.log("fizz"); //if numner is a multiple of 3 print Fizz
      else if (i % 5 == 0)
          console.log("buzz"); //if number is multiple of 5 print Buzz
      else
          console.log(i);
  }
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //create string
    var str  = '';
  //loop how many times by given num
  for (let i = 0; i < num; i++){
    //loop for string
    for (let a = 0; i < num; a++){
      var sum = a + i;
    } if (sum % 2 === 0){
     //add spaces
      str += " ";
     //check if sum is odd
    } else if (sum % 1 === 0){
      // add a # to chestboard string
      str += "#";
    }
    //move string to new line
    str += "\n";
  }
  //log chestboard to console
  console.log(str)
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
