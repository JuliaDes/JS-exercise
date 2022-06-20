// Partie 4 Les fonctions
// Exercice1
// Écrire une fonction qui prend 2 nombres en paramètres et qui retourne le résultat de leur multiplication.

// Créer un formulaire permettant d'entrer deux nombres. Au clic sur un bouton, lancer votre fonction.



function multiplyNumber(firstNumber, secondNumber) {
    // créer une fonction
    alert(firstNumber * secondNumber);
}
document.getElementById('button').onclick = () => {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    multiplyNumber(number1, number2);
    // faire une fonction fléchée car multiplyNumber à plusieurs parametres
}