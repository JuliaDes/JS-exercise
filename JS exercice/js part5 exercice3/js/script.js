// Créer un formulaire contenant un champ nom, un champ mail et un champ age.

// Si les champs ne correspondent pas à une regex, afficher un message d'erreur en rouge sous le champs dès que l'on entre une valeur.
let name = document.getElementById('name');
let email = document.getElementById('email');
let age = document.getElementById('age');
//1.je declare mes variables
// 2. founction fleche, onchange- when contenu change in input
name.onchange = () => {
    if (name.value.match(/^([A-Za-z-]+){1}$/)) {
        // + match c'est une fonction; pour ajoutere les caracteres ilimite, {1}  pour repeter 1 fois, $ pour fini
        document.getElementById('confirmName').innerHTML = '<p> correct </p>';
        //'<p>correct</p>' n'existe pas en HTML, nous pouvons ajouter
    } else {
        document.getElementById('confirmName').innerHTML = '<p class="wrong"> incorrect </p>';
        //  '<p class="wrong"> incorrect </p>'; add class, that does not exist in HTML
    }
}
email.onchange = () => {
    if (email.value.match(/^([a-z0-9._-]+){1}([@]{1}){1}([a-z.]+){1}$/)) {
        document.getElementById('confirmEmail').innerHTML = '<p>correct</p>';
        //'<p>correct</p>' n'existe pas en HTML, nous pouvons ajouter
    } else {
        document.getElementById('confirmEmail').innerHTML = '<p class="wrong">incorrect</p>';
    }
}
age.onchange = () => {
    if (age.value.match(/^([0-9]{1,3}){1}$/)) {
        // {1,3} max.3 numbers
        document.getElementById('confirmAge').innerHTML = '<p> correct </p>';
        //'<p>correct</p>' n'existe pas en HTML, nous pouvons ajouter
    } else {
        document.getElementById('confirmAge').innerHTML = '<p class="wrong"> incorrect </p>';
    }
}