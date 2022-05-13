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
                    <div id="j">1</div>
                    <div class="unite">Jour(s)</div>
                </div>

                <div class="box">
                    <div id="h">01</div>
                    <div class="unite">Heure(s)</div>
                </div>

                <div class="box">
                    <div id="m">47</div>
                    <div class="unite">Minute(s)</div>
                </div>

                <div class="box">
                    <div id="s">20</div>
                    <div class="unite">Seconde(s)</div>
                </div>

                <div class="box">
                    <div id="ms">330</div>
                    <div class="unite">Mseconde(s)</div>
                </div>

            </div>
        </div>

        <div class="buttonWrapper">

            <button class="button" id="start"></button>

            <button class="button" id="stop">Lap</button>

            <button class="button" id="reset"></button>

        </div>

        <ul class="laps">                           
            <li class="lap-item">
                <span class="number">#1</span>
                <span class="time-stamp">01 : 43 : 07</span>
            </li>
            <li class="lap-item">
                <span class="number">#1</span>
                <span class="time-stamp">01 : 43 : 07</span>
            </li>
            <li class="lap-item">
                <span class="number">#1</span>
                <span class="time-stamp">01 : 43 : 07</span>
            </li>
            <li class="lap-item">
                <span class="number">#1</span>
                <span class="time-stamp">01 : 43 : 07</span>
            </li>
            <li class="lap-item">
                <span class="number">#1</span>
                <span class="time-stamp">01 : 43 : 07</span>
            </li>
            <li class="lap-item">
                <span class="number">#1</span>
                <span class="time-stamp">01 : 43 : 07</span>
            </li>
            <button class="lap-clear">Tout effacer</button>
        </ul>

    </main>

    <footer></footer>


</body>

</html>