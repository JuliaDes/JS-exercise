// Partie3 - Les boucles
// A l'aide d'une boucle, afficher toutes les années entre 2020 et 2030. Colorer en rouge toutes les années bissextiles.
for (year = 2020; year <= 2030; year++) {
    if (year % 4 == 0) {
        document.getElementById('yearsList').innerHTML += '<p style="color:red">' + year + '</p>';

    } else {
        document.getElementById('yearsList').innerHTML += '<p>' + year + '</p>';
    }
}




//document.getElementById('yearsList') = J'indique où le trouver dans l'HTML
//innerHTM = Je lui demande d'écrire
//+= permet d'ajouter, si il n'y a que le =, il prend que la dernière valeur, il ecrase tout, ici, seul 2030
//'<li class = "colorList">' + year + '</li>' = Je mets mon texte


// for (year = 2020; year <= 2030; year++) {
//     if (year % 4 == 0) {
//         document.getElementById('yearsList').innerHTML += '<p style="color:red">' + year + '</p>';
//     } else {
//         document.getElementById('yearsList').innerHTML += '<p>' + year + '</p>';
//     }
// }