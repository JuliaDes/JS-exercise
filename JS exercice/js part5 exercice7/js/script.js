// Dans le fichier html fourni, faire grandir le texte au scroll.
let documentBody = document.getElementsByTagName('body')[0];
documentBody.onscroll = () => {
    documentBody.style.fontSize = '40px';
}