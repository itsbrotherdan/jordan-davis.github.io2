/*
* OPERATORS:
*   0. In Javascript, an operator is a symbols that performs an operation.
*   1. The value or variable on either side of an operator is called an operand.
*   2. The main kinds of operators are: 
*    Assignment operators
*    Arithmetic operators
*    Comparison operators
*    Logical operators
*    Unary operators
*    Ternary operators 
*/
    //ASSIGNMENT OPERATORS
        //The main assignment operator is the equal sign (=). It gives value to any variable.
        var a = 5; // a now equals the value 5
    //ARITHMETIC OPERATORS
        /* Arithmetic operators work the same way that they do in math.
        * The four arithmetic operators are addition (+), subtraction (-),
        * multiplication (*), and division (/). You can use them to do math problems
        * or even add or subtract from strings or other variables.
        */
        var b = a + 5;
        console.log(b); // prints => 10
        /* These operators also have their own short-hand that can make using them faster,
        * just use (variable) =(operator) (number or variable).
        */
        var c = 5;
        c -= 2;
        console.log(c); //prints => 3
    //COMPARISON OPERATORS
        /* Comparison operators are used in logical statements to the difference
        * between variables or values. They test something for true or false.
        */
        //Loose comparison (==) checks if two things have the same value as eachother.
        console.log(5 == '5'); //prints => true
        //Strict comparison (===) checks if two things have the same value and data type.
        console.log(5 === '5'); // prints => false
        /* Greater than (>) checks if the value on the left is greater than than what's 
        * on the right.
        */
        var e = 5;
        console.log(e > 2); //prints => true
        /* Less than (<) checks if what you put on the left is lesser in value than what's
        * on the right.
        */
        console.log(e < 2); //prints => true
        /* Greater than or equal to (>=) checks if what you put on the left is greater in value
        *than what's on the right.
        */
        console.log(e >= 5); //prints => true
        /* Less than or equal to (<=) checks if what you put on the left is lesser in value
        *than what's on the right.
        */
        console.log(e <= 6); //prints => false
        /* You can also use the bang symbol (!) to make an operator men the opposite.
        * For example, != will check if something is not equal to in value.
        */
        console.log(e != 8); //prints => true
    //LOGICAL OPERATORS
        /* Logical operators are typically used in conditional statements, we use them 
        * to determine the logic between variables and values.
        */
        /* The and operator (&&) is used when we want both statements on either side of 
        * it to be true in order for the statement to be true. If either statement is false 
        * it will return false.
        */
        console.log(1 == '1' && 1 === '1'); // prints => false
        /* The either or operator (||) is used when we when we only need one statement
        * on both sides of the operator in order for the whole statement to be true.
        */
        console.log(1 == '1' || 1 === '1'); // prints => true
        /* The bang operator (!) will return whatever the opposite the boolean value
        * of the statement would normally be.
        */
        console.log(!(5 === 5)); // prints => false
    //UNARY OPERATORS
        /* Unary operators only need one operand to perform an operation.
        * The most common unary operators are increment (++) and decrement (--).
        */
        // Increment (++) increases the number in the value by one.
        var i = 1;
        i++; // i now equals 2
        // Decrement (--) decreases the number in the value by one.
        i--; // i now equals 1
    //TERNARY OPERATORS
        /* Ternary operators are conditional operators that takes three operands:
        a condition followed by a question mark (?), an expression to execute if the condition
        is true followed by a colon (:), and the expression to execute if the condition is false. 
        This can be used as a shortcut for an if statement.
        */
        function addOrSubtractFive(num) {
        return (num >= 50 ? num + 5 : num - 5);
        } // Function will add 5 if the number is greater than 50 and subtract 5 if  less than 50
        console.log(addOrSubtractFive(20)); // prints => 15