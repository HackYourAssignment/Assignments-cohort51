/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
export function giveCompliment(name) {
  let compliments = [
    'awesome',
    'fantastic',
    'great',
    'amazing',
    'brilliant',
    'impressive',
    'phenomenal',
    'excellent',
    'terrific',
    'remarkable',
  ];

  const random = compliments[Math.floor(Math.random() * compliments.length)]; // Randomly selecting the item from the array

  return `You are ${random}, ${name}!`;
}

function main() {
  const myName = 'Sertan';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
