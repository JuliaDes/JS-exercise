// Créer un fichier html et y ajouter une image. Au clic sur l'image changer sa source, au survol, l'agrandir.
let myImage = document.getElementById('myImage');
// ** creer variable, recuperer div 'myImage'
// ** creer function: myImage.onclick = function ()
// ? images.setAttribute ('src', 'images/2.png');
myImage.onclick = () => {
    myImage.src = 'images/2.png'
}
myImage.onmouseover = () => {

    myImage.style.width = '1000px';
}
myImage.onmouseout = () => {
    myImage.style.width = '500px';
}