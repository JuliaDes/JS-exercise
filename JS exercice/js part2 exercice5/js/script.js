// Créer une variable day et lui attribuer une valeur entre 1 et 7.

// A l'aide d'un switch, afficher :


// Lundi si day est égal à 1
// Mardi si day est égal à 2
// Mercredi si day est égal à 3
// Jeudi si day est égal à 4
// Vendredi si day est égal à 5
// Samedi si day est égal à 6
// Dimanche si day est égal à 7


let day = Number(prompt('Write the day 1 to 7'));

switch (day) {
    case 1:
        alert('Lundi');
        break;
    case 2:
        alert('Mardi');
        break;
    case 3:
        alert('Mercredi');
        break;
    case 4:
        alert('Jeudi');
        break;
    case 5:
        alert('Vendredi');
        break;
    case 6:
        alert('Samedi');
        break;
    case 7:
        alert('Dimanche');
        break;
    default:
        alert('Relis la consigne');
}