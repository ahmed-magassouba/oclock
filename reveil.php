<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reveil</title>

    <!-- link css -->
    <link rel="stylesheet" href="Css/reveil.css">

    <!-- script js -->
    <script src="Js/reveil.js"></script>

</head>

<body>
    <header></header>
    <main>

        <p id="title"></p>
        <p id="messageAlarm"></p>

        <section>
            <img src="Images/horlo.png" alt="image de l'horloge">
            <div>
                <span id="date"></span>
                <span id="clock"></span>
            </div>
        </section>

        <p>Programmer un reveil </p>

        <form class="setAlarm">
            <div>
                <input type="datetime-local" name="date" id="date">
                <!-- <input type="number" name="hour" id="hour" placeholder="HH" max="23" min="00">
                <input type="number" name="min" id="min" placeholder="MM" max="59" min="00">
                <input type="number" name="sec" id="sec" placeholder="SS" max="59" min="00"> -->

            </div>
            <p>Entrer un message</p>
            <input type="text" name="message" id="message">
            <div class="controls">
                <button type="submit" class="set-alarm">Ajouter</button>
                <button type="reset" class="clear-alarm">Arrêter</button>
            </div>
        </form>

        <p>
            <img src="Images/alarm.png" alt="image alarm">
            Alarmes à venir
        </p>


        <ul id="alarmList">
            <em id="notAlarm">Aucun reveil programmer</em>
        </ul>

    </main>
    <footer>
        <ul>
            <li> <a href="">Accueil</a> </li>
            <li> <a href="horloge.php">Horloge</a> </li>
            <li><a href="minuteur.php">Minuteur</a> </li>
            <li><a href="chronomrtre.php">Chronomètre</a></li>
            <li><a href="reveil.php">Réveil</a> </li>
        </ul>
    </footer>
</body>

</html>