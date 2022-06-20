// Créer un formulaire demandant un mot de passe et une confirmation de mot de passe et comportant un bouton.
// Au clic sur le bouton, si les deux champs sont identiques, les entourer de vert. Sinon les entourer en rouge.

let firstPassword = document.getElementById('firstPassword');
let secondPassword = document.getElementById('secondPassword');
document.getElementById('button').onclick = () => {
    if (firstPassword.value === secondPassword.value) {
        firstPassword.style.borderColor = 'green';
        secondPassword.style.borderColor = 'green';
    } else {
        firstPassword.style.borderColor = 'red';
        secondPassword.style.borderColor = 'red';
    }
}