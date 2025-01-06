/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickName = document.getElementById('nickname');
const food = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');
const li = document.querySelectorAll('li');

nickName.textContent = 'Lidya';
food.textContent = 'Pasta';
homeTown.textContent = 'Ethiopia';

li.forEach((list) => (list.className = 'list-item'));
