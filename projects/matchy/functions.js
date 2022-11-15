/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a function called search
function search(animals, name){
    //searching through animals array and return the value in animals
for (var i = 0; i < animals.length; i ++){
    //if animals value === name return animals value
    if(animals[i].name === name){
    return animals[i];
    }
}
//returning null if no animal exist
return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating replace function
function replace(animals, name, replacement){
    //iterating through animals 
for (var i = 0; i < animals.length; i ++){
    //checking if animals[i] value === name
    if (animals[i].name === name){
        //replacing animals value with replacement obj
        animals[i] = replacement
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating remove function
function remove(animals, name){
//iterating of animals 
for (var i = 0; i < animals.length; i++){
    if (animals[i].name === name){
        animals[i] = remove
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating function add
function add(animals, animal){ 
    //checking if animal name are greater than 0
    if (animal.name.length > 0 && animal.species.length > 0){
        //if they are iterate over animals array
        for (let i = 0; i < animals.length; i++){
            //then if animals[i].name is === to animal name 
            if (animals[i].name === animal.name){
                //we return
                return;
            }
        }
        //pushing animal to animals object
        animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
