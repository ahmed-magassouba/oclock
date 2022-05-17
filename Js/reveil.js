document.addEventListener("DOMContentLoaded", function () {
  let title = document.querySelector("#title");

  /**
   * Contirndra l'heure la minute
   */
  const clock = document.querySelector("#clock");

  /**
   * contiendra la date du jour
   */
  const date = document.querySelector("#date");

  /**
   * Notre audio qui jouera quand l'heure de l'alarm arrivera
   */
  const alarmSound = new Audio("Audio/audio2.mp3");
  alarmSound.loop = true;

  let alarmTime = null;
  let alarmTimeOut = null;

  /**
   *  On recupère notre formulaire
   */
  form = document.querySelector("form");

  /**
   *  On recupère notre liste qui contiendra tous les alarms
   */
  const alarmList = document.querySelector("#alarmList");

  /**
   *  un tableau qui stocke toutes les alarmes en cours de réglage
   */
  const alarmTab = [];
  const messageTab = [];
  let alarmMessage = document.querySelector("#messageAlarm");

  /**
   * On crée notre horloge avec une fonction
   */
  function updateTime() {
    var today = new Date();

    //On recupère l'année
    let year = today.getFullYear();

    // On recupère le mois
    let monthList = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    let month = monthList[today.getMonth()]; // On a l'indice du moi dans getMonth

    // On recupère le numéro du jour du moi
    let monthDay = today.getDate();

    // On recupère le jour NB: en js le jour commence les dimanche
    let dayList = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    let theDay = dayList[today.getDay()]; // On a l'indice du jour dans getDay

    const hour = formatTime(today.getHours());
    const minutes = formatTime(today.getMinutes());
    const seconds = formatTime(today.getSeconds());
    const now = `${hour}:${minutes}:${seconds}`;

    date.textContent = theDay + ", " + monthDay + " " + month + " " + year;
    clock.innerText = `${hour}:${minutes}:${seconds}`;

    //     On verifie si l'heure en temps réel est dans notre tableau alarmTab
    //     si oui On declenche l'alarm
    if (alarmTab.includes(now)) {
      ringing(now);
    }
  }

  /**
   * une fonction pour lancer l'audio de l'alarm au bon moment
   * @param {*} now
   */
  function ringing(now) {
    alarmSound.play();
    title.textContent = `Il est ${now}`;
    if (messageTab[now] != null) {
      alarmMessage.textContent = messageTab[now];
      messageTab.splice(now, 1);
    }
  }

  /**
   * une function pour mettre le temps au bon format
   * on passe de 1:2:3 a 01:02:03
   * @param {*} time
   * @returns
   */
  function formatTime(time) {
    if (time < 10 && time.length != 2) {
      return "0" + time;
    }
    return time;
  }

  /**
   * fonction pour effacer/arrêter l'alarme en cours de lecture
   */
  function clearAlarm() {
    alarmSound.pause();
    if (alarmTimeOut) {
      clearTimeout(alarmTimeOut);
      alert("Alarm cleared");
    }
    title.textContent = "";
    alarmMessage.textContent = "";
  }

  /**
   * supprime une alarme de la liste non ordonnée et de la page Web lorsque "Supprimer l'alarme" est cliqué
   */
  alarmList.addEventListener("click", (event) => {
    console.log("removing element");
    if (event.target.classList.contains("deleteAlarm")) {
      event.target.parentElement.remove();
    }
  });

  /**
   * supprime une alarme du tableau lorsque "Supprimer l'alarme" est cliqué
   */
  remove = (value) => {
    let newAlarmTab = alarmTab.filter((time) => time != value);
    alarmTab.length = 0; // Clear contents
    alarmTab.push.apply(alarmTab, newAlarmTab);

    console.log("newAlarmTab", newAlarmTab);
    console.log("alarmTab", alarmTab);

    let notAlarm = document.querySelector("em");
    // si la taille est supérirur a zero on affiche la balise em
    if (alarmTab.length == 0) {
      notAlarm.style.display = "block";
    }
  };

  /**
   * Ajoute newAlarm à la liste non ordonnée en tant que nouvel élément de liste sur la page Web
   * @param {*} newAlarm
   */
  function showNewAlarm(newAlarm, state) {
    const html = `
      <li>        
        <span class="time">${newAlarm}</span>
        <span class="time">${state}</span>
        <button class="deleteAlarm time-control" id="delete-button" onclick = "remove(this.value)" value=${newAlarm}>Supprimer</button>       
      </li>`;
    alarmList.innerHTML += html;
  }

  //Evénement pour définir une nouvelle alarme chaque fois que le formulaire est soumis
  form.addEventListener("submit", (event) => {
    //On evite le comportement par defaut au submit
    event.preventDefault();

    // ON recupère la datae saisie par l'utilisateur
    const date = form.date.value;

    //On le transforme en objet date
    let datealarm = new Date(date);

    // si la date n'est pas deefeni on affiche un message d'erreur
    if (isNaN(datealarm)) {
      alert("Date invalide");
      return;
    }

    //On recupère l'heure et la mn saisie par l'utilisateur
    let new_h = formatTime(datealarm.getHours());

    let new_m = formatTime(datealarm.getMinutes());

    let new_s = formatTime(datealarm.getSeconds());

    //On recupère le message saisie par l'utilisateur
    let message = form.message.value;
    console.log(message);

    //Constitution de la nouvelle alarme a rentrer dans le tableau
    const newAlarm = `${new_h}:${new_m}:${new_s}`;

    //On ajoute le messagege dans le tableau des message avec l'heure en index
    messageTab[newAlarm] = message;
    console.log(messageTab);

    //On fait la comparaison entre les date ppour voir si l'heure de l'alarme est passée ou pas
    console.log(datealarm.getTime());
    datenow = new Date();
    console.log(datenow.getTime());

    let state;
    let timeRemaining = datealarm - datenow;
    console.log(timeRemaining);
    let interval = setTimeout(timeRemaining, 1000);
    console.log(interval);
    // On crée nos constantes
    // On recupère l'equivalent d'un jour un milliseconde
    const dayOnMillisecond = 1000 * 60 * 60 * 24;
    const hourOnMillisecond = 1000 * 60 * 60;
    const minuteOnMillisecond = 1000 * 60;
    const secondOnMillisecond = 1000;

    if (datealarm < datenow) {
      state = "passée";
    } else {
     
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

      //On affiche le temps restant dnas le span de la page Web
      state = `${days}j : ${hours}h : ${minutes}mn : ${seconds}s`;
    }

    // Si l'huere est déja passé on affiche un message d'erreur
    let differenceInMs = datealarm.getTime() - datenow.getTime();
    if (differenceInMs < 0) {
      alert("le temps spécifié est déjà passé !");
      return;
    }

    //Ajouter une nouvelle alarme à la liste des alarmes
    if (isNaN(newAlarm)) {
      if (!alarmTab.includes(newAlarm)) {
        alarmTab.push(newAlarm);
        console.log(alarmTab);
        console.log(alarmTab.length);

        let notAlarm = document.querySelector("em");
        // si la taille est supérirur a zero on affiche la balise em
        if (alarmTab.length > 0) {
          notAlarm.style.display = "none";
        }

        //   showNewAlarm(newAlarm,setInterval(state,1000) );
        showNewAlarm(newAlarm, state);

        form.reset();
      } else {
        alert(`Une alarme pour ${newAlarm} est déjà définie.`);
      }
    } else {
      alert("Alarme invalide");
    }
  });

  form.addEventListener("reset", (event) => {
    clearAlarm();
  });

  //On appelle la function updateTime() toutes les secondes pour l'horloge
  setInterval(updateTime, 1000);
});
