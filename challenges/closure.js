// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: Functions are able to access data from other functions they are nested inside of all the way out to the global.  So this function is pulling "internal" from the function it is nested inside.

/* Task 2: Counter */
const summation = (par) => {
  let count = 0;
  for (let i = 0; i <= par; i++) {
    count += i;
  }
  return count;
};
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
