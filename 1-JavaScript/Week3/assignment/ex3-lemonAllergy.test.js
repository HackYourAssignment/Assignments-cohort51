/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-3-lemon-allergy

Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
------------------------------------------------------------------------------*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(array, fruit) {
  const filteredFruitBasket = array.filter((item) => {
    return item !== fruit;
  });

  return filteredFruitBasket;
}

// ! Unit tests (using Jest)
describe('js-wk3-ex3-lemonAllergy', () => {
  test('sanitizeFruitBasket should take two parameters', () => {
    // TODO replace next line with your code
    const actual = sanitizeFruitBasket.length;

    expect(actual).toBe(2);
  });

  test('sanitizeFruitBasket should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    expect(fruitBasket).toStrictEqual(originalFruitBasketContents);
  });

  test('sanitizeFruitBasket should return a new array that does not include the unwanted `lemon`', () => {
    // TODO replace next line with your code
    const received = sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(received).toStrictEqual([
      'apple',
      'grapefruit',
      'banana',
      'watermelon',
    ]);
  });
});
