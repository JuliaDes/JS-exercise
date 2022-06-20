// Demander une note à l'utilisateur :

// Si elle est entre 0 et 4 afficher Nul
// Si elle est entre 4 et 6 afficher Moyen
// Si elle est entre 6 et 8 afficher Assez Bien
// Si elle est entre 8 et 9 afficher Bien
// Si elle est égale à 10 afficher Excellent

let number = prompt('Let une note');
let message = document.getElementById('message')
if (number >= 0 && number < 4) {
    message.innerText = 'NUL';
}
if (number >= 4 && number < 6) {
    message.innerText = 'Moyen';
}
if (number >= 6 && number < 8) {
    message.innerText = "Assez Bien";
}
if (number >= 8 && number < 9) {
    message.innerText = "Bien";
}
if (number == 10) {
    message.innerText = "Excellent";
}


















// let message = document.getElementById('message');
// if (number >= 0 && number < 4) {
//     message.innerText = 'NUL';
// }
// if (number >= 4 && number <= 6) {
//     message.innerText = 'Moyen';
// }
// if (number >= 6 && number <= 8) {
//     message.innerText = 'Assez Bien';
// }
// if (number >= 8 && number <= 9) {
//     message.innerText = 'Bien';
// }
// if (number == 10) {
//     message.innerText = 'Excellent';
// }