let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
for (let day of days) {
    if (day == 'Samedi' || day == 'Dimanche') {
        document.write('<p class="weekend">' + day + '</p>');
    } else {
        document.write('<p>' + day + '</p>');
    }

}