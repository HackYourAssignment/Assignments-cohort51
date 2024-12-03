const cartForParty = {
  beers: 1.75,
  chips: 2.5,
  soda: 1.2,
  bread: 1.0,
  cheese: 3.5,
};

function calculateTotalPrice(cart) {
  let total = 0;
  for (let key in cart) {
    total += cart[key];
  }
  return `Total: €${total.toFixed(2)}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  try {
    const paramCount = calculateTotalPrice.length;
    if (paramCount !== 1) {
      throw new Error(`Expected 1 parameter, but got ${paramCount}`);
    }
    console.log('Test 1 passed!');
  } catch (error) {
    console.error(`Test 1 failed: ${error.message}`);
  }
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  try {
    const expected = 'Total: €9.95';
    const result = calculateTotalPrice(cartForParty);
    if (result !== expected) {
      throw new Error(`Expected "${expected}", but got "${result}"`);
    }
    console.log('Test 2 passed!');
  } catch (error) {
    console.error(`Test 2 failed: ${error.message}`);
  }
}

function test() {
  test1();
  test2();
}

test();
