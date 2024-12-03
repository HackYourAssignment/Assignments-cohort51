
export function giveCompliment(name) {
  const compliments = [
    'amazing',
    'awesome',
    'brilliant',
    'fantastic',
    'great',
    'outstanding',
    'wonderful',
    'impressive',
    'remarkable',
    'incredible',
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];

  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture member';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Alex';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

