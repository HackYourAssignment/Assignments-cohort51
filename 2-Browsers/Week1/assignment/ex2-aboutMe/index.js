/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const doc = document;

const nickName = doc.getElementById('nickname');
nickName.innerText = 'Nick';

const favFood = doc.getElementById('fav-food');
favFood.innerText = 'Fish';

const hometown = doc.getElementById('hometown');
hometown.innerText = 'Addis Ababa';

const liElements = doc.getElementsByTagName('li');

const liElementArray = Array.from(liElements);
liElementArray.forEach((li) => li.classList.add('list-item'));
