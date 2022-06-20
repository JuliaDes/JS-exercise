// Demander à l'aide d'une boîte de dialogue l'âge d'un utilisateur. 
// S'il a plus de 18 ans, lui afficher Vous êtes majeur, sinon lui afficher Vous êtes mineur.
let age = prompt('Your age?');
if (age >= 18) {
    alert('Vous etes majeur');
} else
    alert('Vous etes mineur');