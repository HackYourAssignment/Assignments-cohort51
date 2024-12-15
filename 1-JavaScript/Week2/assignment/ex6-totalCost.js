/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  twix: 1.5,
  icecream: 1,
  pepsi: 0.78,
  redbull: 1.58,
  candy: 3,
};

function calculateTotalPrice(cart) {
  let total = 0;
  for (let item in cart) {
    total += cart[item];
  }
  return `Total:€${total.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  try {
    const result = calculateTotalPrice.length; //
    console.assert(result === 1, `expected 1 parameter, got ${result}`);
    console.log(`Test 1 passed`);
  } catch (error) {
    console.error(`Test 1 failed:`, error.message);
  }
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  try {
    const result = calculateTotalPrice(cartForParty);
    const expected = `Total: € 7.83`;
    console.assert(
      result === expected,
      `expected "${expected}",got "${result}"`
    );
    console.log(`Test 2 passed`);
  } catch (error) {
    console.error(`Test 2 failed:`, error.message);
  }
}

function test() {
  test1();
  test2();
}

test();
