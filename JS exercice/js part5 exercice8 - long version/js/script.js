// Créer un formulaire avec un champ prénom et un champ âge. Ajouter un bouton +. Au clic sur ce bouton, cloner les champs créés.function fieldsClone()
function fieldsClone() {
    let element = document.getElementById('inputGroupe');
    let cloneBtn = document.getElementById('clone');
    let cloneNb = Number(cloneBtn.getAttribute('cloneNumber'));
    cloneNb++;
    cloneBtn.setAttribute('cloneNumber', cloneNb);
    let cln = element.cloneNode(true);
    cln.id = cln.id + cloneNb;
    document.getElementById('form').appendChild(cln);
}