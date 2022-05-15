document.addEventListener("DOMContentLoaded", function () {
    let alarmButton = document.querySelector('button');
    let alarmSound = new Audio();
    alarmSound.src="alarm.mp3" ;

    alarmButton.addEventListener("click", function (event) {
      let alarmDate=document.querySelector('input').valueAsNumber;
      console.log(alarmDate);
        if (isNaN(alarmDate)) {
            alert("Date invalide");
            return;
        }
        let alarm = new Date(alarmDate);
        let alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
        let differenceInMs = alarmTime.getTime()-(new Date())-getTime();

        if(differenceInMs<0){
            alert("le temps spécifié est déjà passé !");
            return;
        }

        setTimeout(initAlarm, differenceInMs);
    })


    function initAlarm() {
       alarmSound.play();
    }
})