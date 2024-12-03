const numKids = [1, 3, 8, 4, 5];
const partnerNames = ['Noor', 'Carla', 'Rana', 'Ahmad', 'Russel'];
const locations = ['Netherlands', 'Germany', 'Spain', 'Thailand', 'Italy'];
const jobTitles = [
  'Teacher',
  'Carpenter',
  'Business Manager',
  'Web Developer',
  'Nutritionist',
];

function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const kids = selectRandomly(numKids);
  const partner = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const job = selectRandomly(jobTitles);

  return `You will be a ${job} in ${location}, married to ${partner} with ${kids} kids.`;
}

function main() {
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}