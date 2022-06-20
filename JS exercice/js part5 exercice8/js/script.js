// Créer un formulaire avec un champ prénom et un champ âge. Ajouter un bouton +. Au clic sur ce bouton, cloner les champs créés.function fieldsClone() 
button.onclick = () => {
    clone = document.getElementById('myForm').cloneNode(true);
    document.getElementById('here').appendChild(clone);
}