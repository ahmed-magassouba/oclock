<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronomètre</title>

    <!-- link css -->
    <link rel="stylesheet" href="Css/chronometre.css">

    <!-- script js -->
    <script src="Js/chronometre.js"></script>

</head>

<body>

    <header></header>
    <main>
        <div id="wrapper">
            <div id="title">Chronomètre</div>
            <div id="minuteur">

                <div class="box">
                    <div id="j">00</div>
                    <div class="unite">Jour(s)</div>
                </div>

                <div class="box">
                    <div id="h">00</div>
                    <div class="unite">Heure(s)</div>
                </div>

                <div class="box">
                    <div id="m">00</div>
                    <div class="unite">Minute(s)</div>
                </div>

                <div class="box">
                    <div id="s">00</div>
                    <div class="unite">Seconde(s)</div>
                </div>

                <div class="box">
                    <div id="ms">00</div>
                    <div class="unite">Mseconde(s)</div>
                </div>

            </div>
        </div>

        <div class="buttonWrapper">

            <button class="button lap hidden" id="lap">Lap</button>

            <button class="button start" id="start"></button>

            <button class="button reset hidden" id="reset"></button>

        </div>

        <ul class="laps">
        </ul>
        <button class="lap-clear hidden">Tout effacer</button>
    </main>

    <footer>
        <ul>
            <li><a href="https://github.com/ahmed-magassouba/oclock.git">Github</a></li>
            <li> <a href="horloge.php">Horloge</a> </li>
            <li><a href="minuteur.php">Minuteur</a> </li>
            <li><a href="chronometre.php">Chronomètre</a></li>
            <li><a href="reveil.php">Réveil</a> </li>
        </ul>
    </footer>


</body>

</html>