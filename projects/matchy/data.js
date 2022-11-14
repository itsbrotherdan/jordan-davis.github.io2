/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating empty object
var animal = {};
//using dot notation adding key value pair 
animal.species = "frog";
//using bracket notation add key value pair
animal['name'] = 'Frogger';
//using any notation add key value pair = to empty array
animal.noises = [];
//print animal obj
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating empty array
var noises = [];
//use bracket notation to give noises its first element
noises[0] = 'bonk';
//using an array function to add an element
noises.push('ribbit');
//adding element to beginning of array
noises.unshift('chirp');
//adding another element with bracket notation
noises[noises.length] = 'splash';
//console.log length of array
console.log(noises.length);
//console.log last elemenet in array
console.log(noises[noises.length - 1]);
//console.log the whole array
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assigning the noises prop to our noises array
animal['noises'] = noises;
//using any syntax to add another noise
animal.noises.push("whirrr");
//logging animals array
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating an empty array
var animals = [];
//pushing animal to animals
animals.push(animal);
//creating a variable called duck with obj
var duck = { 
 species: 'duck',
 name: 'Jerome',
 noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
 //push duck to animals 
 animals.push(duck);
 //console.log
 console.log(animals);
//create 2 more animals and push them to animals 
var dog = {
  species: 'dog',
  name: 'Scooby',
  noises: ['ruff', 'grrr']
};
animals.push(dog);
var cat = {
  species: 'cat',
  name: 'Midnight',
  noises: ['meow', 'hiss']
};
animals.push(cat);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating empty array
var friends = [];
//creating a function that will use Math.random to get random and Math.floor 
function getRandom(index){
return Math.floor(Math.random() * animals.length)
}
//pushing random animal + animal name to friends
friends.push(animals[getRandom()].name);
//logging friends
console.log(friends);
//adding friends to cat & dog
cat['friends'] = friends;
dog['friends'] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}