document.addEventListener("DOMContentLoaded", function () {
    const start = document.querySelector(".start");
    console.log(start)
    const lap = document.querySelector(".lap");
    const reset = document.querySelector(".reset");
    const laps = document.querySelector(".laps");
    const clear = document.querySelector(".lap-clear");

    //les div pour inserrer le temps
    let jour = document.querySelector("#j");
    let heure = document.querySelector("#h");
    let minute = document.querySelector("#m");
    let second = document.querySelector("#s");
    let milliSecond = document.querySelector("#ms");

    let isPlay = false;
    let isReset = false;
    let lapItemm = 0;

    //Mes variable jours
    let daysCounter = 0;
    let days;

    //Mes variable heures
    let hoursCounter = 0;
    let hours;

    //Mes variable minutes
    let minCounter = 0;
    let min;
    //variables pour les secondes
    let secCounter = 0;
    let sec;
    //variables pour les milli secondes
    let milliSecCounter = 0;
    let milliSec;

    let interval = null;

    const toggleButton = () => {
        lap.classList.remove("hidden");
        reset.classList.remove("hidden");
    }

    // const timer = () => {
    //     secCounter++;
    //     milliSecCounter++
    //     //On format le temps
    //     days = Math.floor(secCounter / (3600 * 24))
    //     hours = Math.floor((secCounter - (days * 3600 * 24)) / 3600);
    //     min = Math.floor((secCounter - (hours * 3600 )) / 60);
    //     sec = secCounter % 60;
    //     milliSec = milliSecCounter % 1000;

    //     jour.textContent = days;
    //     heure.textContent = hours;
    //     minute.textContent = min;
    //     second.textContent = sec;
    //     milliSecond.textContent = milliSec;


    // }

    // const play = () => {
    //     setInterval(timer, 1000)
    // }

    //Modification du button play en pause et inversement
    const play = () => {
        if (!isPlay && !isReset) {
            start.style.backgroundImage = "url('Images/pause.png')";

            //Mis en place du counter des jours
            days = setInterval(() => {
                jour.textContent = ++daysCounter;
            }, 1000 * 60 * 60 * 24);


            //Mis en place du counter des heures
            hours = setInterval(() => {
                if (hoursCounter === 24) {
                    hoursCounter = 0;
                }
                heure.textContent = ++hoursCounter;
            }, 1000 * 60 * 60);


            //Mis en place du counter des minutes
            min = setInterval(() => {
                if (minCounter === 60) {
                    minCounter = 0;
                }
                minute.textContent = (minCounter<9) ? `0${++minCounter}`:++minCounter;
            }, 1000 * 60);

            //Mis en place du counter des secondes
            sec = setInterval(() => {
                if (secCounter === 60) {
                    secCounter = 0;
                }
                second.textContent = (secCounter<9) ? `0${++secCounter}`:++secCounter;
            }, 1000);

            //Mis en place du counter des millisecondes
            milliSec = setInterval(() => {
                if (milliSecCounter === 100) {
                    milliSecCounter = 0;
                }
                milliSecond.textContent = ++milliSecCounter;
            }, 10);

            isPlay = true;
            isReset = true;
        } else {
            start.style.backgroundImage = "url('Images/play.png')"
            clearInterval(days);
            clearInterval(hours);
            clearInterval(min);
            clearInterval(sec);
            clearInterval(milliSec);
            isPlay = false;
            isReset = false;
        }
        toggleButton();
    }

    //Mis en place du button pour rafraichir
    const refresh = () => {
        isReset = true;
        play();
        lap.classList.add("hidden");
        reset.classList.add("hidden");

        jour.textContent = "00";
        daysCounter = 0;
        heure.textContent = "00";
        hoursCounter = 0;
        minute.textContent = "00";
        minCounter = 0;
        second.textContent = "00"
        secCounter = 0;
        milliSecond.textContent = "00";
        milliSecCounter = 0;

    }

    const tour = () => {
        const li = document.createElement("li");
        const number = document.createElement("span");
        const timeStamp = document.createElement("span");

        li.setAttribute("class", "lap-item");
        number.setAttribute("class", "number");
        timeStamp.setAttribute("class", "time-stamp");

        number.textContent = `#${++lapItemm}`;
        timeStamp.textContent = `${daysCounter}j : ${hoursCounter}h : ${minCounter}mn : ${secCounter}s : ${milliSecCounter}ms`;
        li.append(number, timeStamp);
        laps.append(li);
        clear.classList.remove("hidden");

    }


    const clearAll = () => {
        laps.textContent = "";
        clear.classList.add("hidden");
    }


    start.addEventListener("click", play);
    reset.addEventListener("click", refresh);
    lap.addEventListener("click", tour);
    clear.addEventListener("click", clearAll);


})