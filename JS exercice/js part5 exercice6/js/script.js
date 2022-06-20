// Dans un formulaire, faire que les champs aient une bordure noire quand ils ont le focus. La supprimer quand ils perdent le focus.
let firstName = document.getElementById('border');
// firstName.onfocus = function () {
firstName.onfocus = () => {
        firstName.style.border = '5px black solid';
    }
    // firstName.onblur = function () {
firstName.onblur = () => {
    firstName.style.border = '5px red solid';
}