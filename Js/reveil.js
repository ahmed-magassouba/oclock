document.addEventListener("DOMContentLoaded", function () {
    let alarmButton = document.querySelector('#alarmButton');
    let alarmSound = new Audio();
    alarmSound.src = "alarm.mp3";

    let alarmOptions = document.querySelector('#alarmOptions');
    let timer;


    function setAlarm() {

        let alarmDate = document.querySelector('input').valueAsNumber;
        console.log(alarmDate);
        if (isNaN(alarmDate)) {
            alert("Date invalide");
            return;
        }
        let alarm = new Date(alarmDate);
        let alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
        let differenceInMs = alarmTime.getTime() - (new Date()).getTime();

        if (differenceInMs < 0) {
            alert("le temps spécifié est déjà passé !");
            return;
        }

        timer = setTimeout(initAlarm, differenceInMs);

        alarmButton.textContent = 'Annuler l\'alarm';

    }


    function cancelAlarm() {
        alarmButton.textContent = 'Regler l\'alarm';
        clearTimeout(timer);
    }

    function initAlarm() {
        alarmSound.play();
        alarmOptions.style.display = "";
    }

    function stopAlarm() {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        alarmOptions.style.display = "none";
        cancelAlarm();
    }

    function snooze() {
        stopAlarm();
        setTimeout(initAlarm(), 36000);
    }


})