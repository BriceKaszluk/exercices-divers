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

const list = document.getElementById('result')

//boucler le tableau
items.forEach(item => {
    //créer élément <li>
    const listElement = document.createElement('li')
    //on insère la valeur du tableau dans l'élément créé
    listElement.textContent = item
    //insérer <li> dans le result
    list.appendChild(listElement)
})

