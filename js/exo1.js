/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Contruire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/

const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];

/**
 * 
 */
items.forEach(function(item) {
  console.log(item);
  
  // 1. on va avoir besoin, pour appendChild, d'un nœud / élément
  //    donc on le crée (en terme de type de données, c'est un objet JS)
  let elt = document.createElement('li'); // on crée un Node du DOM
  elt.textContent = item;

  // 2. on sélectionne l'endroit pré-existant du HTML où on fera
  //    l'injection de contenu
  let target = document.getElementById('result');

  // 3. on utilise appendChild pour modifier le DOM (donc on travaille
  //    dans le contexte JS, pas HTML)
  target.appendChild(elt);


});

// items.forEach(generateLi);
// function generateLi() { ... }