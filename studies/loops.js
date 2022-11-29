/*
* LOOPS:
* 
* 0. Loops perform or utter an action repeatedly.
*
* 1. They're important so we can perform an action a specific number of times.
*
* 2. There are three main kinds of loops:
*   - While loops
*   - For loops
*   - For in loops
* 
* 3. For and while loops all have startng an stopping conditions.
*
* 4. Starting conditions tell your code when to start executing.
* 
* 5. Stopping conditions tell your code when to stop.
*
* 6. Make sure to properly set your stopping condition or your code may never stop running!
*/
//WHILE LOOPS 
    //Loops through a block of code as long as a specified condition is true.
    var whileLoop = 1; // This is the starting condition.
    while (whileLoop < 10) // This is the stopping condition. The loop will run until this isn't true.
       { // The iterator must be located here in order to prevent an infinite loop.
           console.log(whileLoop++);
       }// prints numbers 1 - 9 on separate lines  
   //FOR LOOPS
       // Similar to while loops, but the starting condition can be in the same scope.
       for (var i = 0; i < 5; i++) 
           //this is your initialized variable, with stopping condition and increment
           {console.log("Hi!")} // this is the code you want to run
           //prints "yo!" five times on separate lines 
   //FOR IN LOOPS
   // Loops through the properties of an object.
       var me = {"firstName": "Jordan", "lastName": "Davis"}; 
       for (var key in me) // This assigns a variable, usually named key.
       // Then you put "in (object)".
       //This is saying, for every key that is in this object, do this:
       {console.log(me[key])} //This prints every value that is in the object.
           // prints => "Jordan" "Davis"
       // To loop through the keys of an object, you can ue the Object.keys method.
       var keys = Object.keys(me); //Put the object name in the parentheses.
       console.log(keys); // prints => ['firstName', 'lastName'];
   //LOOPING OVER AN ARRAY
       /* To loop through a string, you can use a for loop.
       * - set your starting condition to the first index you want to loop through.
       * - set your stopping condition to the last index you want to loop through.
       * - Either increment or decrement.
       */
       var myStringArray = ["Hello","There", "Here", "Is", "A", "String"];
       for (var i = 0; i < myStringArray.length; i++) {
       console.log(myStringArray[i]) } //prints ever index of the string on a separate line 
       /* To loop backwards over an array is very similar, you must:
       * - set your starting condition to yourArrayHere.length -1
       * - set stopping condition to i >= 0
       * - set incrementer to i-- 
       */
       for (var i = myStringArray.length - 1; i >= 0; i--) {
           console.log(myStringArray[i]);
       } // prints every index on the string backwards on separate lines