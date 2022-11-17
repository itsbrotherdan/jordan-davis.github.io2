//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object); //returning values of object
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(" "); //turning objects keys into strings
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = []; //create an empty array to store our values
    for (key in object){ //looping through object keys
     if (typeof object[key] === 'string'){ //if typeof object[key] is a string 
        arr.push(object[key]) //push object[key] to the array
      }
    }
    return arr.join(' '); //join values into strings
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){ //if collection is an array return array
        return 'array';
    } else { //otherwise return object
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { //returning the first letter of string to uppercase + returning a shallow copy of string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.replace(/(^\w|\s\w)/g, m => m.toUpperCase()); //using regEX to return the first letter of our string capitalized
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome ' + capitalizeWord(object.name) + "!" //concat welcome and ! and capitalizing object.name
    // return 'Welcome ' + capitalizeWord.(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
       return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " " + 'is a' + " " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
    // return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " " + 'is a' + " " + object.species.charAt(0).toUpperCase() + object.species.slicel(1);
// return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUppercase() + object.species.slice(1);
//im not sure why it wasnt working before but yeah lol
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //checking if object has noises prop
    if (object.hasOwnProperty('noises')){ 
        //checking if noises prop length is not 0 
        if (object.noises.length !== 0){
            //return the values joined into strings
            return object.noises.join(' ');
        } else {
            return 'there are no noises'
        }
    }
// for (keys in object){
//     if(keys === 'noises'){
//      object.noises.join('')
//      if (noises === ''){
//     return 'there are no noises'
//      }
//     } else {
//         return 'there are no noises'
//     }
// } 
return 'there are no noises'
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if (string.includes(word)){ //checking if string has word
    return true //if so then return true
} else {
    return false //else return false
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //pushing name to friends object
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty('friends')){
        if (object.friends.includes(name)){
            return true
        } else {
            return false
        }
    }
    // if (Object.values(object).indexOf('name') > - 1){
    //     return true
    // } else {
    //     return false
    // }
// if (Object.values(object).includes(name)){
//     return true
// } else {
//     return false
// }
return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var nonFriends = []; //create empty array
for(var i = 0; i < array.length; i ++){ //iterate over array
 if(name !== array[i].name && array[i].friends.indexOf(name)){ //check if name exist & returning indexOf name
        nonFriends.push(array[i].name); //push names that arent in friends array
    }
}
return nonFriends; //return new array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value; //adding key value pair
return object; //returning object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++){ //iterating over the array
    delete object[array[i]]; //deleting property from object
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
array.sort(); //sorting the array in order 
for (var i = array.length; i--;){ //looping in reverse 
if (array[i] === array[i - 1]){ //if array[i] === the same value - 1
   array.splice(i, 1); //remove value from array
}
}
return array //return array with removed values
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}