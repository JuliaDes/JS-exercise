// Partie 4 Les fonctions
// Exercice1
// Écrire une fonction qui prend 2 nombres en paramètres et qui retourne le résultat de leur multiplication.

// Créer un formulaire permettant d'entrer deux nombres. Au clic sur un bouton, lancer votre fonction.

function multiplyNumber(firstNumber, secondNumber) {
    // creer une function 
    alert(firstNumber * secondNumber);
}
document.getElementById('button').onclick = () => {
    multiplyNumber(5, 8);
    // faire une fonction flechee car multyNumber a plusieurs parametres
}