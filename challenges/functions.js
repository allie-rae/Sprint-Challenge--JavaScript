// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


let consume = function(num1, num2, callback) {
  result = callback(num1, num2);
  console.log(result);
  return callback(num1, num2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = function(num1, num2) {
  return num1 + num2;
};


let multiply = function(num1, num2) {
  return num1 * num2;
}

let greeting = function(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add);
consume(10,16,multiply); 
consume("Mary","Poppins", greeting);

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Nested functions have access to variables within enclosing (or outer) functions. `Myfunction` would not have access to a variable created within `nestedFunction`, however `nestedFunction` will always have access to variables created in `Myfunction`. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();