/*

Chacun son tour
===============

Un intégrateur nous a gentiment préparé des div en `display: none`. 
C'est à nous de les afficher en JS.

Objectifs
---------
- Cibler les div avec la classe CSS `.box`
- Afficher les div une à une avec 1 seconde entre chaque

Notions
-------
- DOM : document.querySelectorAll ou getElementsByClassName
- JS : for ou forEach / setTimeout

*/

// getElementsByClassName retourne un objet de type HTMLCollection
// qui malheureusement ne possède pas la fonction forEach :(
// let boxes1 = document.getElementsByClassName('box');

// Mieux vaut utiliser querySelector[All]
let boxes2 = document.querySelectorAll('.box');

// function displayBox(item, index, items) {
//   console.log(item);
//   item.style.display = 'block';
// }

// function displayWithADelay() {
//   boxes2.forEach(displayBox);
// }

// var delay = 1000;

// C'est pas mal, mais le fait de faire le setTimeout en premier ne
// permet pas de gérer l'évolution du délai.
// setTimeout(displayWithADelay, delay);



let displayBox = (item, index, items) => {
  setTimeout(() => {
    item.style.display = 'block';
  }, 1000 * index);
}

// On inverse setTimeout et forEach !
boxes2.forEach(displayBox);
