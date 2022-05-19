<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muniteur</title>

    <!-- link css -->
    <link rel="stylesheet" href="Css/minuteur.css">

    <!-- script js -->
    <script src="Js/minuteur.js"></script>

</head>

<body>

    <header></header>

    <main>
        <div id="wrapper">
            <div id="title">Minuteur</div>
            <div id="minuteur">

                <div class="box">
                    <div id="j"></div>
                    <div class="unite">Jour(s)</div>
                </div>

                <div class="box">
                    <div id="h"></div>
                    <div class="unite">Heure(s)</div>
                </div>

                <div class="box">
                    <div id="m"></div>
                    <div class="unite">Minute(s)</div>
                </div>

                <div class="box">
                    <div id="s"></div>
                    <div class="unite">Seconde(s)</div>
                </div>

                <div class="box">
                    <div id="ms"></div>
                    <div class="unite">Mseconde(s)</div>
                </div>

            </div>
        </div>


        <form>

            <span>
                <label>Temps d'arrêt</label>
                <input type="datetime-local" id="time">
            </span>

            <div>
                <button id="play">
                    <img src="Images/play.png" alt="">
                </button>

                <button id="pause">
                    <img src="Images/pause.png" alt="">
                </button>

                <button id="refresh">
                    <img src="Images/refresh.png" alt="">
                </button>
            </div>

        </form>

        <audio id="audio">
            <source src="Audio/audio.mp3" type="audio/mpeg">
        </audio>

    </main>
    <footer>
        <ul>
            <li> <a href="https://github.com/ahmed-magassouba/oclock.git">Github</a></li>
            <li> <a href="horloge.php">Horloge</a> </li>
            <li><a href="minuteur.php">Minuteur</a> </li>
            <li><a href="chronometre.php">Chronomètre</a></li>
            <li><a href="reveil.php">Réveil</a> </li>
        </ul>
    </footer>
</body>

</html>