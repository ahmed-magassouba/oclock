document.addEventListener("DOMContentLoaded", function () {
  // On recupère les éléments de la page
  let body = document.querySelector("body");
  let title = document.querySelector("#title");
  let muniteur = document.querySelector("#muniteur");
  let jour = document.querySelector("#j");
  let heure = document.querySelector("#h");
  let minute = document.querySelector("#m");
  let second = document.querySelector("#s");
  let milliSecond = document.querySelector("#ms");

  // On recupère la date du jour
  let now = new Date();

  // on recuprère la date avec notre fuseau horaire
  const dateOffsetInMinutes = now.getTimezoneOffset();

  // On crée nos constantes
  // On recupère l'equivalent d'un jour un milliseconde
  const dayOnMillisecond = 1000 * 60 * 60 * 24;
  const hourOnMillisecond = 1000 * 60 * 60;
  const minuteOnMillisecond = 1000 * 60;
  const secondOnMillisecond = 1000;

  // On recupère la date de fin de notre decompte
  // Dans notre champ input on recupère la sasie de l'utilisateur
  let timeInsert = document.querySelector("#time");
  let play = document.querySelector("#play");


  //On crée un évènement pour le champ input
  play.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      timeInsert.value === null ||
      timeInsert.value === undefined ||
      timeInsert.value === ""
    ) {
      alert("Veuillez entrer un temps d'arrêt du minuteur");
    } else {
     
      // console.log(timeInsert.value);

      let timeChoice;
      if (timeChoice != null || timeChoice != undefined || timeChoice != "") {
        timeChoice = "";
      }
      timeChoice = timeInsert.value;

     let endDate = new Date(timeChoice);

      getCountdown = () => {
        // On recupère la date du jour a l'instant t
        let nowDate = Date.now();

        // On recupère le temps restant avant la fin du decompte
        let timeRemaining = endDate - nowDate; //+ dateOffsetInMinutes * minuteOnMillisecond

        // On met le timeRemaining en format jour, heure, minute, seconde

        //jours
        let days = Math.floor(timeRemaining / dayOnMillisecond);
        if (days < 10) {
          days = "0" + days;
        }
        //heures
        let restOfTimeWhithoutDay = timeRemaining - days * dayOnMillisecond;
        let hours = Math.floor(restOfTimeWhithoutDay / hourOnMillisecond);
        if (hours < 10) {
          hours = "0" + hours;
        }

        //minutes
        let restOfTimeWhithoutHour =
          restOfTimeWhithoutDay - hours * hourOnMillisecond;
        let minutes = Math.floor(restOfTimeWhithoutHour / minuteOnMillisecond);
        if (minutes < 10) {
          minutes = "0" + minutes;
        }

        //secondes
        let restOfTimeWhithoutMinute =
          restOfTimeWhithoutHour - minutes * minuteOnMillisecond;
        let seconds = Math.floor(restOfTimeWhithoutMinute / 1000);
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        //millisecondes
        let restOfTimeWhithoutSecond =
          restOfTimeWhithoutMinute - seconds * secondOnMillisecond;
        let milliSeconds = restOfTimeWhithoutSecond;
        if (milliSeconds < 10) {
          milliSeconds = "00" + milliSeconds;
        }

        // console.log(days, hours, minutes, seconds);

        jour.textContent = days;
        heure.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
        milliSecond.textContent = milliSeconds;
        // console.log(timeRemaining);
        if (timeRemaining <= 0) {
          clearInterval(countdownInterval);

          //On personalise la fin du decompte avec un background sur le body
          body.style.backgroundImage = "url('Images/sablier.png')";

          jour.textContent = "00";
          heure.textContent = "00";
          minute.textContent = "00";
          second.textContent = "00";
          milliSecond.textContent = "000";
          title.innerHTML = "Le temps est écoulé";

          play.style.display = "block";
          pause.style.display = "none";

          //On met le son de fin du decompte
          let audio = document.querySelector("#audio");
          audio.play();

        } else {
          title.innerHTML = "Le minuteur est lancé";
          //On personalise la fin du decompte avec un background sur le body
          body.style.backgroundImage = "url('')";
        }
      };

      let countdownInterval = setInterval(
        () => requestAnimationFrame(getCountdown),
        100
      );

      //On initialise une fonction qui va faire notre decompte
      getCountdown();

      //Mettre le minutteur en pause
      let pause = document.querySelector("#pause");
      let count =1;
      if (count==1){
        play.style.display = "none";
        pause.style.display = "block";
      }

      pause.addEventListener("click", function (event) {
        event.preventDefault();
        
        pause.style.display = "none";
        play.style.display = "block";
        clearInterval(countdownInterval);
        count=0;
        title.innerHTML = "Le minuteur est en pause";
      });
    }
  });

  //button pour rafraichir la page
  let refresh = document.querySelector("#refresh");
  refresh.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
  });
  
});
