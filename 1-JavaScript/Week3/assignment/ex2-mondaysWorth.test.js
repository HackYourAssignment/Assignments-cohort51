/*------------------------------------------------------------------------------
Full description atL https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-2-whats-your-monday-worth

- Complete the function names `computeEarnings`. It should take an array of
  tasks and an hourly rate as arguments and return a formatted Euro amount
  (e.g: `€11.34`) comprising the total earnings.
- Use the `map` array function to take out the duration time for each task.
- Multiply each duration by a hourly rate for billing and sum it all up.
- Make sure the program can be used on any array of objects that contain a
  `duration` property with a number value.
------------------------------------------------------------------------------*/
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(mondayTasks, hourlyRate) {
  const totalHours =
    mondayTasks.reduce((total, task) => (total += task.duration), 0) / 60;
  const totalEarnings = totalHours * hourlyRate;

  return `€${totalEarnings.toFixed(2)}`;
}

// ! Unit tests (using Jest)
describe('js-wk3-mondaysWorth', () => {
  test('computeEarnings should take two parameters', () => {
    expect(computeEarnings.length).toBe(2);
  });

  test('computeEarnings should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
