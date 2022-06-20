//  A l'aide d'une boucle afficher tous les nombre de 0 à 100. 
// Pour chaque multiples de 15, les remplacer par '...'


for (number = 0; number <= 100; number++) {
    if (number % 15 == 0) {
        document.getElementById('number').innerHTML += '<p> ...</p>';
    } else {
        document.getElementById('number').innerHTML += '<p>' + number + '</p>';
    }

}