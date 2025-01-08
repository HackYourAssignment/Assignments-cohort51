/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

let nickname = document.getElementById('nickname');
nickname.textContent = 'sfk';
let favFood = document.getElementById('fav-food');
favFood.textContent = 'Hamburgers';
let hometown = document.getElementById('hometown');
hometown.textContent = 'Istanbul';

const listArray = Array.from(document.getElementsByTagName('li'));
listArray.forEach((li) => {
  li.setAttribute('class', 'list-item');
});
