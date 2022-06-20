// Dans le fichier html fourni, faire qu'au clic sur les boutons de couleurs, le texte change aussi de couleur. Idem pour les boutons gras et italiques.
let text = document.getElementById('text');
let buttonRose = document.getElementById('buttonRose');
let buttonBlue = document.getElementById('buttonBlue');
let buttonPurple = document.getElementById('buttonPurple');
let buttonBold = document.getElementById('buttonBold');
let buttonItalic = document.getElementById('buttonItalic');

buttonRose.onclick = function() {
    text.style.color = 'pink';
}

buttonBlue.onclick = function() {
    text.style.color = 'Blue';
}

buttonPurple.onclick = function() {
    text.style.color = 'Purple';
}

buttonBold.onclick = function() {
    text.style.fontWeight = 'bold';
}

buttonItalic.onclick = function() {
    text.style.fontStyle = 'italic';
}