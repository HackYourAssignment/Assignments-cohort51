// ! Function under test
function filterPrivateData(employeeRecords) {
  return employeeRecords.map(({ name, occupation, email }) => ({
    name,
    occupation,
    email,
  }));
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: filterPrivateData should take one parameter');
  console.assert(filterPrivateData.length === 1, 'Test 1 failed');
}

function test2() {
  console.log('Test 2: gender and salary should be filtered out');
  const expected = [
    {
      name: 'John',
      occupation: 'developer',
      email: 'john.doe@somewhere.net',
    },
    {
      name: 'Jane',
      occupation: 'manager',
      email: 'jane.eyre@somewhere.net',
    },
  ];
  const result = filterPrivateData(employeeRecords);
  console.assert(
    JSON.stringify(result) === JSON.stringify(expected),
    'Test 2 failed'
  );
}

function test() {
  test1();
  test2();
}

test();
