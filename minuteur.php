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

        </div>
    </div>


    <form action="">

        <span>
            <label for="time">Entrer votre date</label>
            <input type="datetime-local" name="time" id="time">
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


    <footer></footer>
</body>

</html>