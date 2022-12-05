// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jordan-davis.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//filter = searching through customers array 

var maleCount = function(array) {
    //use filter to return a new area of all customers who are male
let males = _.filter(array, function(customer){
    //if gender === male return true
if (customer.gender === 'male'){
   return true;
   //otherwise return false
} else { 
    return false;
}
});
//return males.length for count
return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(array, function(acc, curr){
        //determine if current item in the array is female
       if (curr.gender === 'female'){
          return acc + 1;
       } 
          return acc;
    }, 0)
          return females; //females => number of females
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(acc, curr){
        //checking if the accumalator is greater than the current
if (acc.age > curr.age){
    //return accumalator
   return acc;
} else {
    //otherwise return current
    return curr;
}
    });
    //return the name of the oldest
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, curr){
        //checking if the accumalator is less than the current
if (acc.age < curr.age){
     //return accumalator
   return acc;
} else {
    //otherwise return current
    return curr;
}
    });
    //return the name of the youngest
    return youngest.name;
};

var averageBalance = function(array){
    let average = _.reduce(array, function(acc, curr){
        //creating variable to hold balance string with replaced digits & turning it into a number
        let currNumb = Number(curr.balance.replace(/[$,]+/g,"")); //can combine Number & replace method to 1 line
    // let currString = curr.balance.replace(/[$,]+/g,"");
    // let currNumber = Number(currString);
    //counting 
    return acc += currNumb;
    }, 0)
    //returning average balance of customers
    return average / array.length;
}

var firstLetterCount = function(array, letter){
 var letters = _.filter(array, function(customers){
    //bringing the first letter in name to lowercase to strictly equal letter as lowercase
    return customers.name[0].toLowerCase() === letter.toLowerCase()
 })
 //return the length of letters
 return letters.length
}

var friendFirstLetterCount = function(array, customer, letter) {
    let letters = _.filter(array, function(customer) {
        for (let i = 0; i < customer.friends.length; i++) {
            if (customer.friends[i].name[0].toLowerCase() === letter.toLowerCase()) {
                return true
            }
        }
    })
    return letters.length;
};

var friendsCount = function(array, name){
    //create an empty array
    var arr = [];
    //create nested for loop
    for (let i = 0; i < array.length; i++){
    //loop the item in array
    for (let a = 0; a < array[i].friends.length; a++){
        //check if value name is a friend
        if (array[i].friends[a].name === name){
            //push values to empty array
            arr.push(array[i].name);
         }
       }
     }
    return arr;
    }  //= function(array){
//     let friends = _.filter(array, function(customers){

//     })
// }

var topThreeTags;

var genderCount = function(array){
    let genders = _.reduce(array, function(acc, curr){
        //if acc
        if (acc[curr.gender]){
            acc[curr.gender] += 1
        } else {
            acc[curr.gender] = 1
        }
        return acc;
    }, {});
    //return list of genders
    return genders;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
