function updateAboutMe(){

   document.getElementById('nickname').textContent = 'Nova';
   document.getElementById('fav-food').textContent = 'Sushi';
   document.getElementById('hometown').textContent = 'Aleppo';


   const lists = document.querySelectorAll('li');
   lists.forEach(list=> {
      list.className = 'list-item';
   });
   
}

updateAboutMe();