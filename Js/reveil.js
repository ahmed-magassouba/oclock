document.addEventListener("DOMContentLoaded", function () {

  let title = document.querySelector("#title")

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
  const alarmList = document.querySelector('#alarmList');


  /**
   *  un tableau qui stocke toutes les alarmes en cours de réglage
   */
  const alarmTab = [];
 const messageTab = [];
 let alarmMessage = document.querySelector("#messageAlarm") ;


  /**
   * On crée notre horloge avec une fonction
   */
  function updateTime() {
    var today = new Date();

    //On recupère l'année
    let year = today.getFullYear();

    // On recupère le mois
    let monthList = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    let month = monthList[today.getMonth()];// On a l'indice du moi dans getMonth

    // On recupère le numéro du jour du moi
    let monthDay = today.getDate();

    // On recupère le jour NB: en js le jour commence les dimanche
    let dayList = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
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
    if(messageTab[now] != null){
     alarmMessage.textContent = messageTab[now];
     messageTab.splice(now, 1)
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
      return '0' + time;
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
      alert('Alarm cleared');
    }
    title.textContent = "";
    alarmMessage.textContent = "";
  }

  /**
   * supprime une alarme de la liste non ordonnée et de la page Web lorsque "Supprimer l'alarme" est cliqué
   */
  alarmList.addEventListener('click', (event) => {
    console.log("removing element")
    if (event.target.classList.contains("deleteAlarm")) {
      event.target.parentElement.remove();
    }
  })


  /**
   * supprime une alarme du tableau lorsque "Supprimer l'alarme" est cliqué
   */
  remove = (value) => {
    let newAlarmTab = alarmTab.filter((time) => time != value);
    alarmTab.length = 0;                  // Clear contents
    alarmTab.push.apply(alarmTab, newAlarmTab);

    console.log("newAlarmTab", newAlarmTab);
    console.log("alarmTab", alarmTab);

    let notAlarm = document.querySelector("em");
    // si la taille est supérirur a zero on affiche la balise em
    if (alarmTab.length == 0) {
      notAlarm.style.display = "block";
    }

  }


  /**
   * Ajoute newAlarm à la liste non ordonnée en tant que nouvel élément de liste sur la page Web
   * @param {*} newAlarm 
   */
  function showNewAlarm(newAlarm) {
    const html = `
      <li>        
        <span class="time">${newAlarm}</span>
        <button class="deleteAlarm time-control" id="delete-button" onclick = "remove(this.value)" value=${newAlarm}>Supprimer</button>       
      </li>`
    alarmList.innerHTML += html;

  };


  //Evénement pour définir une nouvelle alarme chaque fois que le formulaire est soumis
  form.addEventListener("submit", (event) => {
    //On evite le comportement par defaut au submit
    event.preventDefault();

    let new_h = formatTime(form.hour.value);
    if (new_h === '0') {
      new_h = '00'
    }
    let new_m = formatTime(form.min.value);
    if (new_m === '0') {
      new_m = '00'
    }
    let new_s = formatTime(form.sec.value);
    if (new_s === '0') {
      new_s = '00'
    }

    let message = form.message.value;
    console.log(message);

    const newAlarm = `${new_h}:${new_m}:${new_s}`;

    messageTab[newAlarm] = message;
    console.log(messageTab);


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


        showNewAlarm(newAlarm);

        form.reset();
      } else {
        alert(`Une alarme pour ${newAlarm} est déjà définie.`);
      }

    } else {

      alert("Alarme invalide")

    }

  })




  form.addEventListener("reset", (event) => {
    clearAlarm();

  })

  //On appelle la function updateTime() toutes les secondes pour l'horloge
  setInterval(updateTime, 1000);

});
