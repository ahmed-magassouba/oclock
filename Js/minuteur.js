document.addEventListener("DOMContentLoaded", function () {
  // On recupère les éléments de la page
  let body = document.querySelector("body");
  let title = document.querySelector("#title");
  let muniteur = document.querySelector("#muniteur");
  let jour = document.querySelector("#j");
  let heure = document.querySelector("#h");
  let minute = document.querySelector("#m");
  let second = document.querySelector("#s");

  // On recupère la date du jour
  let now = new Date();

  // on recuprère la date avec notre fuseau horaire
  const dateOffsetInMinutes = now.getTimezoneOffset();

  // On crée nos constantes
  // On recupère l'equivalent d'un jour un milliseconde
  const dayOnMillisecond = 1000 * 60 * 60 * 24;
  const hourOnMillisecond = 1000 * 60 * 60;
  const minuteOnMillisecond = 1000 * 60;

  // On recupère la date de fin de notre decompte
  const endDate = new Date("2022-05-10");

  getCountdown = () => {
    // On recupère la date du jour a l'instant t
    let nowDate = Date.now();
    // On recupère le temps restant avant la fin du decompte
    let timeRemaining =
      endDate - nowDate + dateOffsetInMinutes * minuteOnMillisecond;
    // On met le timeRemaining en format jour, heure, minute, seconde

    //jours
    let days = Math.floor(timeRemaining / dayOnMillisecond);

    //heures
    let restOfTimeWhithoutDay = timeRemaining - days * dayOnMillisecond;
    let hours = Math.floor(restOfTimeWhithoutDay / hourOnMillisecond);

    //minutes
    let restOfTimeWhithoutHour =
      restOfTimeWhithoutDay - hours * hourOnMillisecond;
    let minutes = Math.floor(restOfTimeWhithoutHour / minuteOnMillisecond);

    //secondes
    let restOfTimeWhithoutMinute =
      restOfTimeWhithoutHour - minutes * minuteOnMillisecond;
    let seconds = Math.floor(restOfTimeWhithoutMinute / 1000);

    console.log(days, hours, minutes, seconds);

    jour.textContent = days;
    heure.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);

      //On personalise la fin du decompte avec un background sur le body
      body.style.backgroundImage =
        "url('https://media.giphy.com/media/3oEduJIWQX9QQqQXIY/giphy.gif')";

      jour.textContent = 0;
      heure.textContent = 0;
      minute.textContent = 0;
      second.textContent = 0;

      title.innerHTML = "Le temps est écoulé";
    }
  };

  let countdownInterval = setInterval(getCountdown, 1000);

  //On initialise une fonction qui va faire notre decompte
  getCountdown();
});
