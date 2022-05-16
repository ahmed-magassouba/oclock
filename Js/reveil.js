document.addEventListener("DOMContentLoaded", function () {
  let alarmButton = document.querySelector("#alarmButton");
  let alarmSound = new Audio();
  alarmSound.src = "Audio/audio2.mp3";

  let alarmOptions = document.querySelector("#alarmOptions");
  let stop = document.querySelector("#stop");
  let snooze = document.querySelector("#snooze");
 var timer;

  function setAlarm() {
    let alarmDate = document.querySelector("input").valueAsNumber;
    console.log(alarmDate);
    if (isNaN(alarmDate)) {
      alert("Date invalide");
      return;
    }
    let alarm = new Date(alarmDate);
    let alarmTime = new Date(
      alarm.getUTCFullYear(),
      alarm.getUTCMonth(),
      alarm.getUTCDate(),
      alarm.getUTCHours(),
      alarm.getUTCMinutes(),
      alarm.getUTCSeconds()
    );
    let differenceInMs = alarmTime.getTime() - (new Date()).getTime();

    if (differenceInMs < 0) {
      alert("le temps spécifié est déjà passé !");
      return;
    }

    timer = setTimeout(initAlarm, differenceInMs);

    alarmButton.textContent = "Annuler l'alarm";
    alarmOptions.style.display = "block";
  
  }

  function cancelAlarm() {
    alarmButton.textContent = "Regler l'alarm";
    clearTimeout(timer);
    alarmOptions.style.display = "none";
  }

  function initAlarm() {
    alarmSound.play();
    alarmOptions.style.display = "";
    alarmButton.textContent = "Regler l'alarm";
  }

  function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmOptions.style.display = "none";
    cancelAlarm();
  }

  function snoozeAlarm() {
    stopAlarm();
    setTimeout(initAlarm, 300000);
  }

  alarmButton.addEventListener("click", (event) => {
    if (alarmButton.textContent === "Regler l'alarm") {
      setAlarm();
    } else if (alarmButton.textContent === "Annuler l'alarm") {
      cancelAlarm();
    }
  });

  stop.addEventListener("click", (event) => {
    stopAlarm();
  });

  snooze.addEventListener("click", (event) => {
    snoozeAlarm();
  });


});
