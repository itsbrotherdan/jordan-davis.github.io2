// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
//returning value unchanged
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){ 
    if (Array.isArray(value)){
        return 'array'; //checking if array
    }  else if(typeof value === 'string') {
        return 'string'; //checking if string
    } else if (value === null){
      return 'null'; //checking if null
    } else if (typeof value === 'number'){
      return 'number'; //checking if number
    } else if (value instanceof Date ){
      return 'date'; //checking if date
    } else if (typeof value === 'function'){
      return 'function'; //checking if function
    } else if (typeof value === 'boolean'){
        return 'boolean'; //checking if boolean
    } else if (typeof value === 'undefined'){
        return 'undefined'; //checking if undefined
    } else if (typeof value === 'object'){
        return 'object'; //checking if object
    } 
};
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return [] 
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, num){
    let a = []; //store our values in empty array
    //if array is not an array 
    if (!Array.isArray(array)){
        //return an empty array
        return a;
        //else if num is not given, or a number 
    } else if (typeof num != 'number'){
        //return first value in the array
        return array[0];
        //if num is greater than the array length
    } else if (num > array.length){
        //return array
        return array;
    } else {
     for (var i = 0; i < num; i ++){
        a.push(array[i]);
     }
    }
    return a;
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, num){
//store our values in empty array
let b = [];
//if array is not an array
if (!Array.isArray(array)){
    //return an empty array
    return b;
    //else if num is not given, or a nunber
} else if (typeof num != 'number'){
    //return last element in array
    return array[2];
    //else if num is greater than array.length
} else if (num > array.length){
//return array
return array;
//checking if num is negative
} else if (num < 0){
    return b
} else { //iterating overarray pushing values into our new array
for (let i = num - 1; i < array.length; i ++){
    b.push(array[i]);
}
}
return b
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value){
    //iterate through array 
for (let i = 0; i < array.length; i++){
    //check if value in array is === to value 
    if (array[i] === value){
        //return the index
        return i;
    } 
}
//if value is not in array return -1
return -1 
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
 for (var i = 0; i < array.length; i ++){
    if (array[i] === value){
        return true;
    }
 }
 return false;
}
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, func){
    //determine if collection is an array
    if(Array.isArray(collection)){
     //iterate through collection
     for (let i = 0; i < collection.length; i ++){
        func(collection[i], i, collection);
     }
    } //else collection is an object
    else { 
      //iterate through collection
      for (let key in collection){ //access to each key in object
       func(collection[key], key, collection);
      }
    }
}
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function (array){
    //creating empty array
var newArr = [];
//looping over array
for (var i = 0; i < array.length; i++){
    if (_.indexOf(newArr, array[i]) === -1){
        //pushing new values into empty array
        newArr.push(array[i]);
    }
} 
//return new array
return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //create an empty array
    let output = [];
    //iterate over array
    for (let i = 0; i < array.length; i ++){
        //create callback func
        if(func(array[i], i, array)){
            //push filtered values into new array if true
            output.push(array[i]);
        }
    }
    //return new array
    return output;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    //create empty array 
    let output = [];
    //iterate over the array
    for (let i = 0; i < array.length; i++){
        //create callback func
        if(!func(array[i], i, array)){
            //push filtered values into new array if false
            output.push(array[i]);
        }
    }
    //retrun new array
    return output;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
   var truthy = []; //creating new array
   var falsy = [];  //creating new array
   var combined = [truthy, falsy]; //creating new array of combined arrays 
   //looping over array
    for (let i = 0; i < array.length; i ++){
        //if elements are truth push them into truthy array
        if (func(array[i], i, array)){
            truthy.push(array[i]);
        } else {
            //else push them into falsy array
            falsy.push(array[i]);
        }
    } 
    //return new combined array
    return combined;
}
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples: 
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function (collection, func){
    //create empty array for holding
    var arr = [];
    //if collection is an array - loop then - push call back func
    if (Array.isArray(collection)){
        //loop over possible array
        for (let i = 0; i < collection.length; i ++){
            arr.push(func(collection[i], i, collection));
        } 
    } else { //else if collection is an array - loop then - push call back func
        //loop over possible object
        for (let key in collection){
            arr.push(func(collection[key], key, collection));
        }
    }
    //return new array
    return arr;
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function (array, property){
    //mapping over pluck
var plucked = _.map(array, function(item){
    //returning value for property for every in array
    return item[property]
  })
  //return new array
  return plucked
}
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(!collection[i]){
                    //return false;
                    return false;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(!collection[key]){
                    //return false;
                    return false;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is false
                if(func(collection[i], i, collection) === false){
                    //return false
                    return false;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is false
                if(func(collection[key], key, collection) === false)
                {   //return false;
                    return false;
                }
            }
        }
    }//return true
    return true;
     }
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is falsy
                if(collection[i]){
                    //return true;
                    return true;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is falsy
                if(collection[key]){
                    //return true;
                    return true;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is true
                if(func(collection[i], i, collection) === true){
                    //return true
                    return true;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is true
                if(func(collection[key], key, collection) === true)
                {   //return true;
                    return true;
                }
            }
        }
    }//return false
    return false;
     }
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //create result variable
    let result;
    //determine if seed value was not given a value
    if (seed === undefined){
      //assign result to first value of array  
      result = array[0]; //seed defaults to first value in the array if not defined
      // iterate through input array
      for (let i = 1; i < array.length; i++){
        //took 0 index and assigned it to result already so start iterating at 1
        result = func(result, array[i], i, array) //constantly reassinging result to the callback 
      }
    
    } else {
        //assign result the value of seed
        result = seed;
        //iterate normally
        for (let i = 0; i < array.length; i++) { 
            //start iterating at 0 because seed has been set 
            result = func(result, array[i], i, array)
        }
    }
    return result;
}
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function (object1, object2, ...object){
    //assigning object2 & ...object to object 1
Object.assign(object1, object2, ...object);
//returning object
return object1;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
