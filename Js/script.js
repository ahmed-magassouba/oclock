document.addEventListener("DOMContentLoaded", function () {

    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    let numHour = document.querySelector('.numHour');
    let numDate = document.querySelector('.numDate');

    setInterval(() => {

        // On recupère la date actuelle
        let day = new Date();

        // On recupère l'heure
        let hours = day.getHours() * 30;

        // On recupère la minute
        let minutes = day.getMinutes() * deg;

        // On recupère la seconde
        let seconds = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`;
        mn.style.transform = `rotateZ(${minutes}deg)`;
        sc.style.transform = `rotateZ(${seconds}deg)`;



        /******Pour l'horloge numérique *******/

        //On recupère l'année
        let year = day.getFullYear();

        // On recupère le mois
        let monthList = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
        let month = monthList[day.getMonth()];// On a l'indice du moi dans getMonth

        // On recupère le numéro du jour du moi
        let monthDay = day.getDate();

        // On recupère le jour NB: en js le jour commence les dimanche
        let dayList = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
        let theDay = dayList[day.getDay()]; // On a l'indice du jour dans getDay

        // Afficher les heures , minutes et secondes toujours avec 2 chiffres:
        let showsDate = function (element) {
            if (element < 10) {
                return element = "0" + element;
            } else {
                return element
            }
        }

        //On recupère les heures
        let hh = showsDate(day.getHours());

        //On recupère les minutes
        let mm = showsDate(day.getMinutes());

        //On recupère les secondes
        let ss = showsDate(day.getSeconds());

        // On les affiches dans nos div coté html
        numHour.textContent = hh + ":" + mm + ":" + ss;
        numDate.textContent = theDay + ", " + monthDay + " " + month + " " + year;
    })
})