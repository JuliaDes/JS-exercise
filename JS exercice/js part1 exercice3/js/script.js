// Exercice3
//Créer :
// une variable name qui contiendra une chaîne de caractère
// une variable age qui contiendra un nombre entier
// une variable city qui contiendra une chaîne de caractères.
// Les afficher dans une boîte de dialogue, dans une phrase comme : Bonjour, je m'appelle Jean, j'ai 30 ans et j'habite Paris.
let name = ('Alex');
let age = ('44');
let city = ('Noyon');
// alert(' Bonjour, je m\'appelle ' + name + ' , j\'ai ' + age + ' et j\'habite ' + city);
// alert('Bonjour, je m\'appele ${name}, j\'ai ${age} ans et j\'habite ${city}.') - how to do this?

alert(`Bonjour, je m\'appelle ${name}, j\'ai ${age} ans et j\'habite ${city}.`)
    // la deuxieme fonction est plus pratique.