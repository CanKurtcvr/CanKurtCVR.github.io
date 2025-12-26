<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Can Kurt - CV, Tracker & Spil</title>
<style>
    /* --- Generel Styles & Blå Baggrund --- */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #e8f1f8; 
        margin: 0;
        padding: 20px;
    }

    /* Hovedcontaineren der holder alt indholdet */
    .main-container {
        background-color: #ffffff;
        max-width: 850px;
        margin: 30px auto;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    /* --- Profil Billede --- */
    .profile-image {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #ffffff;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }

    /* --- Typografi --- */
    h1 { margin-bottom: 5px; color: #2c3e50; }
    h2 {
        border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 30px;
        color: #2c3e50; text-transform: uppercase; font-size: 1.1em; letter-spacing: 1px;
    }
    h3 { margin-bottom: 5px; margin-top: 0; font-size: 1.1em; color: #444; }
    .header { text-align: center; margin-bottom: 30px; }
    .sub-header { font-size: 1.2em; font-weight: bold; color: #555; margin-bottom: 10px; }
    .contact-info { font-size: 0.9em; color: #666; }
    .contact-info a { color: #666; text-decoration: none; border-bottom: 1px dotted #999; }
    .no-break { page-break-inside: avoid; margin-bottom: 20px; }
    .meta { font-style: italic; color: #777; font-size: 0.9em; margin-bottom: 5px; display: block; }
    ul { margin-top: 5px; padding-left: 20px; }
    li { margin-bottom: 3px; }

    /* --- Faner (Tabs) Styling --- */
    .tab {
        overflow: hidden;
        border-bottom: 2px solid #eee;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap; /* Sikrer god visning på mobil */
    }

    .tab button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 25px;
        transition: 0.3s;
        font-size: 1.1em;
        font-weight: 600;
        color: #777;
        border-bottom: 3px solid transparent;
    }

    .tab button:hover { color: #2c3e50; }
    .tab button.active {
        color: #2c3e50;
        border-bottom: 3px solid #3498db;
    }

    .tabcontent {
        display: none;
        animation: fadeEffect 0.5s;
    }
    #CV { display: block; }

    @keyframes fadeEffect {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    /* --- Habit Tracker Styling --- */
    .habit-container { margin-top: 20px; }
    .habit-item {
        background: #f9f9f9;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 4px solid #ddd;
    }
    .habit-item input[type="checkbox"] {
        transform: scale(1.5);
        margin-left: 15px;
        cursor: pointer;
    }
    .habit-item.completed {
        border-left-color: #27ae60;
        text-decoration: line-through;
        color: #888;
    }

    /* --- SPIL SEKTION STYLES --- */
    .game-menu {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 20px;
    }
    .game-btn {
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        transition: background 0.2s;
    }
    .game-btn:hover { background-color: #2980b9; }
    .game-area {
        border: 2px solid #eee;
        background: #fdfdfd;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        display: none; /* Skjult indtil et spil vælges */
    }
    
    /* Snake Styles */
    canvas#snakeCanvas {
        background-color: #222;
        display: block;
        margin: 0 auto;
        border: 4px solid #555;
    }

    /* Blackjack Styles */
    .bj-table {
        background-color: #27ae60;
        color: white;
        padding: 20px;
        border-radius: 10px;
        min-height: 200px;
    }
    .bj-cards { font-size: 1.5em; margin: 10px 0; letter-spacing: 5px; }
    .bj-controls { margin-top: 20px; }
    .bj-btn {
        background: white; color: #27ae60; border: none; padding: 8px 16px;
        font-weight: bold; cursor: pointer; border-radius: 4px; margin: 0 5px;
    }
    .bj-btn:disabled { background: #ccc; color: #666; cursor: not-allowed; }
    #bj-message { font-weight: bold; margin-top: 15px; font-size: 1.2em; height: 1.5em;}

</style>
</head>
<body>

<div class="main-container">

    <div class="header">
        <img src="1764232742594.jpeg" alt="Can Kurt" class="profile-image">
        
        <h1>Can Kurt</h1>
        <div class="sub-header">MSc-studerende i Software Design & IT-konsulent</div>
        <div class="contact-info">
            København, Danmark • <a href="tel:+4528701213">+45 28 70 12 13</a> • 
            <a href="mailto:cankurtcvr@gmail.com">cankurtcvr@gmail.com</a> • 
            <a href="https://linkedin.com/in/canxkurt">LinkedIn</a>
        </div>
    </div>

    <div class="tab">
        <button class="tablinks active" onclick="openCity(event, 'CV')">Mit CV</button>
        <button class="tablinks" onclick="openCity(event, 'HabitTracker')">Habit Tracker</button>
        <button class="tablinks" onclick="openCity(event, 'Spil')">Spil</button>
    </div>

    <div id="CV" class="tabcontent">
        <div class="no-break">
            <h2>Faglig Profil</h2>
            <p>Som kandidatstuderende i Software Design med baggrund i Informatik og Virksomhedsstudier, kombinerer jeg teknisk indsigt med forretningsforståelse. Mine kernekompetencer ligger i krydsfeltet mellem teknisk problemløsning, brugerinddragelse og optimering af forretningsprocesser. Jeg arbejder analytisk og målrettet, uanset om opgaven omhandler IT-sikkerhed, optimering af brugerrejser eller dataanalyse.</p>
        </div>

        <div class="no-break">
            <h2>Uddannelse</h2>
            
            <div class="no-break">
                <h3>MSc i Software Design</h3>
                <span class="meta">IT-Universitetet i København | 2025 – 2027 (Forventet)</span>
                <ul>
                    <li>Specialisering: Softwarearkitektur, systemudvikling og interaktionsdesign.</li>
                </ul>
            </div>

            <div class="no-break">
                <h3>BSc i Informatik & Virksomhedsstudier</h3>
                <span class="meta">Roskilde Universitet | 09/2021 – 06/2024</span>
                <ul>
                    <li>Fokus: Programmering, organisationsanalyse og digital transformation.</li>
                </ul>
            </div>
        </div>

        <div class="no-break">
            <h2>Erhvervserfaring</h2>

            <div class="no-break">
                <h3>Tolk</h3>
                <span class="meta">TolkDanmark | 2024 – Nuværende</span>
                <ul>
                    <li>Dansk–engelsk tolkning for kommunale instanser.</li>
                    <li>Kræver høj præcision, etik og evnen til at navigere neutralt i komplekse samtaler.</li>
                </ul>
            </div>

            <div class="no-break">
                <h3>Import/Export Assistent</h3>
                <span class="meta">Nordele Gastro | 02/2024 – 03/2025</span>
                <ul>
                    <li>Ansvarlig for toldbehandling, dokumentation og logistikkoordinering.</li>
                    <li>Sikring af rettidig information og proaktiv opfølgning over for kunder.</li>
                </ul>
            </div>

            <div class="no-break">
                <h3>IT-konsulent (Full-time / Try & Hire)</h3>
                <span class="meta">Danske Bank (via EY / M Networks) | 06/2022 – 12/2023</span>
                <ul>
                    <li><strong>Procesoptimering:</strong> Analyse af store datamængder og udvikling af Excel-modeller til effektivisering.</li>
                    <li><strong>Sagsbehandling & Compliance:</strong> Håndtering af kundesager i Inkassoafdelingen med fokus på jura.</li>
                    <li><strong>Oplæring:</strong> Ansvarlig for on-boarding og faglig oplæring af nye medarbejdere.</li>
                </ul>
            </div>

            <div class="no-break">
                <h3>Webudvikler</h3>
                <span class="meta">Starpack ApS | Glostrup</span>
                <ul>
                    <li>Design, kodning og drift af virksomhedens digitale platform fra kravspecifikation til implementering.</li>
                </ul>
            </div>
        </div>

        <div class="no-break">
            <h2>Udvalgte Projekter</h2>

            <div class="no-break">
                <h3>IT-Sikkerhed & Human Factors (Bachelorprojekt)</h3>
                <span class="meta">Karakter: 10</span>
                <ul>
                    <li>Dybdegående analyse af medarbejderadfærd og IT-sikkerhedskultur hos Westcon-Comstor.</li>
                    <li>Leverede konkrete anbefalinger til adfærdsændringer for at minimere sikkerhedsrisici.</li>
                </ul>
            </div>

            <div class="no-break">
                <h3>UX-Optimering & Webudvikling</h3>
                <span class="meta">Vikingrens.dk | Karakter: 7</span>
                <ul>
                    <li>Design, udvikling og lancering af website med fokus på digital tilstedeværelse for en SMV.</li>
                    <li>Baseret på User Journey-analyse og datadrevet design for at maksimere konverteringsraten.</li>
                </ul>
            </div>

            <div class="no-break">
                <h3>Algoritmiske Systemer & Etik</h3>
                <span class="meta">Analyseprojekt | Karakter: 10</span>
                <ul>
                    <li>Kritisk analyse af anbefalingsalgoritmer på YouTube med fokus på etiske implikationer.</li>
                </ul>
            </div>
        </div>

        <div class="no-break">
            <h2>Kompetencer & Frivilligt arbejde</h2>
            <ul>
                <li><strong>Personlig udvikling:</strong> Arbejder struktureret med strategi og adfærdspsykologi, hvilket styrker min strategiske tænkning i pressede situationer.</li>
                <li><strong>Frivillig lektiehjælper (Red Barnet Ungdom):</strong> Skærper pædagogiske evner og formidling af komplekst stof – kompetencer jeg bruger direkte i IT-konsulentrollen.</li>
            </ul>
        </div>
    </div> 

    <div id="HabitTracker" class="tabcontent">
        <h2>Daglig Habit Tracker</h2>
        <p style="color: #666; margin-bottom: 20px;">Hold styr på dine daglige mål for personlig og faglig udvikling.</p>

        <div class="habit-container">
            <div class="habit-item" id="habitBox1">
                <label for="habit1">Kode i mindst 1 time (Faglig udvikling)</label>
                <input type="checkbox" id="habit1" onclick="toggleDone('habitBox1')">
            </div>
            
            <div class="habit-item" id="habitBox2">
                <label for="habit2">Læse 20 sider faglitteratur/strategi</label>
                <input type="checkbox" id="habit2" onclick="toggleDone('habitBox2')">
            </div>
            
            <div class="habit-item" id="habitBox3">
                <label for="habit3">Opdatere LinkedIn eller netværke</label>
                <input type="checkbox" id="habit3" onclick="toggleDone('habitBox3')">
            </div>
            
            <div class="habit-item" id="habitBox4">
                <label for="habit4">Reflektere over dagens læring (10 min)</label>
                <input type="checkbox" id="habit4" onclick="toggleDone('habitBox4')">
            </div>

             <div class="habit-item" id="habitBox5">
                <label for="habit5">Træning / Fysisk aktivitet</label>
                <input type="checkbox" id="habit5" onclick="toggleDone('habitBox5')">
            </div>
        </div>
    </div> 

    <div id="Spil" class="tabcontent">
        <h2>Pause & Spil</h2>
        <p style="color: #666; margin-bottom: 20px;">Har du brug for en pause? Tag et spil her.</p>

        <div class="game-menu">
            <button class="game-btn" onclick="showGame('snake')">Snake</button>
            <button class="game-btn" onclick="showGame('blackjack')">Blackjack</button>
            <button class="game-btn" onclick="alert('Solitaire kræver en større skærm og mere kode. Kommer snart!')" style="background-color: #95a5a6;">Solitaire</button>
        </div>

        <div id="game-snake" class="game-area">
            <h3>Snake</h3>
            <p style="font-size: 0.9em;">Brug piletasterne til at styre.</p>
            <canvas id="snakeCanvas" width="400" height="400"></canvas>
            <button class="game-btn" onclick="initSnake()" style="margin-top:10px; background-color: #27ae60;">Start Nyt Spil</button>
        </div>

        <div id="game-blackjack" class="game-area">
            <h3>Blackjack Lite</h3>
            <div class="bj-table">
                <div>
                    <p>Dealerens Kort:</p>
                    <div id="dealer-cards" class="bj-cards"></div>
                    <p id="dealer-score">Score: 0</p>
                </div>
                <hr style="border-color: rgba(255,255,255,0.2);">
                <div>
                    <p>Dine Kort:</p>
                    <div id="player-cards" class="bj-cards"></div>
                    <p id="player-score">Score: 0</p>
                </div>
                <div id="bj-message">Tryk "Start Spil"</div>
                <div class="bj-controls">
                    <button id="btn-deal" class="bj-btn" onclick="startBlackjack()">Start Spil</button>
                    <button id="btn-hit" class="bj-btn" onclick="hit()" disabled>Hit</button>
                    <button id="btn-stand" class="bj-btn" onclick="stand()" disabled>Stand</button>
                </div>
            </div>
        </div>

    </div>

</div> 

<script>
    // --- FANE FUNKTIONALITET ---
    function openCity(evt, tabName) {
        var i, tabcontent, tablinks;
        
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
        
        // Stop snake loop hvis vi forlader spil fanen
        if(tabName !== 'Spil') {
            clearInterval(gameInterval);
        }
    }

    // --- HABIT TRACKER FUNKTIONALITET ---
    function toggleDone(boxId) {
        var box = document.getElementById(boxId);
        box.classList.toggle("completed");
    }

    // --- SPIL MENU STYRING ---
    function showGame(gameName) {
        // Skjul alle spil-områder
        document.getElementById('game-snake').style.display = 'none';
        document.getElementById('game-blackjack').style.display = 'none';
        
        // Stop snake hvis den kører
        clearInterval(gameInterval);

        // Vis valgte spil
        if(gameName === 'snake') {
            document.getElementById('game-snake').style.display = 'block';
            initSnake(); // Start snake med det samme
        } else if (gameName === 'blackjack') {
            document.getElementById('game-blackjack').style.display = 'block';
        }
    }

    /* ------------------------------
       SNAKE SPIL LOGIK
       ------------------------------ */
    var canvas, ctx;
    var gameInterval;
    var snakeSize = 20; 
    var tileCount = 20; // 400px / 20 = 20 tiles
    var playerX = 10, playerY = 10;
    var velocityX = 0, velocityY = 0;
    var trail = [];
    var tail = 5;
    var appleX = 15, appleY = 15;

    function initSnake() {
        canvas = document.getElementById('snakeCanvas');
        ctx = canvas.getContext('2d');
        
        // Reset værdier
        playerX = 10; playerY = 10;
        velocityX = 0; velocityY = 0;
        trail = [];
        tail = 5;
        
        // Stop gammel loop og start ny
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, 1000/10); // 10 FPS
        
        // Keyboard listeners
        document.addEventListener('keydown', keyPush);
    }

    function gameLoop() {
        playerX += velocityX;
        playerY += velocityY;

        // Wrap around (hvis man går ud af skærmen kommer man ind modsat)
        if(playerX < 0) playerX = tileCount - 1;
        if(playerX > tileCount - 1) playerX = 0;
        if(playerY < 0) playerY = tileCount - 1;
        if(playerY > tileCount - 1) playerY = 0;

        // Tegn baggrund
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Tegn slange
        ctx.fillStyle = "#2ecc71";
        for(var i=0; i<trail.length; i++) {
            ctx.fillRect(trail[i].x * snakeSize, trail[i].y * snakeSize, snakeSize-2, snakeSize-2);
            
            // Kollision med sig selv
            if(trail[i].x == playerX && trail[i].y == playerY) {
                if(tail > 5) { // Reset kun hvis spillet faktisk er i gang
                    tail = 5;
                    // Visuel feedback kunne tilføjes her
                }
            }
        }

        trail.push({x:playerX, y:playerY});
        while(trail.length > tail) {
            trail.shift();
        }

        // Tegn æble
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(appleX * snakeSize, appleY * snakeSize, snakeSize-2, snakeSize-2);

        // Spis æble
        if(appleX == playerX && appleY == playerY) {
            tail++;
            appleX = Math.floor(Math.random() * tileCount);
            appleY = Math.floor(Math.random() * tileCount);
        }
    }

    function keyPush(evt) {
        // Forhindre scroll med piletaster hvis man er i spillet
        if([37,38,39,40].indexOf(evt.keyCode) > -1) {
            evt.preventDefault();
        }

        switch(evt.keyCode) {
            case 37: // Venstre
                if(velocityX !== 1) { velocityX = -1; velocityY = 0; }
                break;
            case 38: // Op
                if(velocityY !== 1) { velocityX = 0; velocityY = -1; }
                break;
            case 39: // Højre
                if(velocityX !== -1) { velocityX = 1; velocityY = 0; }
                break;
            case 40: // Ned
                if(velocityY !== -1) { velocityX = 0; velocityY = 1; }
                break;
        }
    }

    /* ------------------------------
       BLACKJACK LOGIK
       ------------------------------ */
    var suits = ["♠", "♥", "♦", "♣"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = [];
    var dealerHand = [];
    var playerHand = [];
    var gameOver = false;

    function createDeck() {
        deck = [];
        for (var i = 0; i < values.length; i++) {
            for (var x = 0; x < suits.length; x++) {
                var weight = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
                if (values[i] == "A") weight = 11;
                var card = { Value: values[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
    }

    function shuffle() {
        for (var i = 0; i < 1000; i++) {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];
            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }

    function startBlackjack() {
        createDeck();
        shuffle();
        dealerHand = [];
        playerHand = [];
        gameOver = false;

        document.getElementById('btn-deal').disabled = true;
        document.getElementById('btn-hit').disabled = false;
        document.getElementById('btn-stand').disabled = false;
        document.getElementById('bj-message').innerText = "Vælg Hit eller Stand";

        // Giv kort (Dealer får kun 1 synligt i starten i denne version for simpelhed, eller 2)
        // Vi giver: Player, Dealer, Player, Dealer
        playerHand.push(deck.pop());
        dealerHand.push(deck.pop());
        playerHand.push(deck.pop());
        dealerHand.push(deck.pop());

        renderBJ();
        checkForBlackjack();
    }

    function hit() {
        if (!gameOver) {
            playerHand.push(deck.pop());
            renderBJ();
            if (getPoints(playerHand) > 21) {
                document.getElementById('bj-message').innerText = "Du gik over 21! Dealer vinder.";
                endBlackjackGame();
            }
        }
    }

    function stand() {
        if (!gameOver) {
            // Dealer trækker indtil 17
            while(getPoints(dealerHand) < 17) {
                dealerHand.push(deck.pop());
            }
            renderBJ();
            determineWinner();
            endBlackjackGame();
        }
    }

    function getPoints(hand) {
        var points = 0;
        var aces = 0;
        for(var i = 0; i < hand.length; i++) {
            points += hand[i].Weight;
            if(hand[i].Value == "A") aces++;
        }
        // Juster for es (11 eller 1)
        while (points > 21 && aces > 0) {
            points -= 10;
            aces--;
        }
        return points;
    }

    function renderBJ() {
        var dealerDiv = document.getElementById('dealer-cards');
        var playerDiv = document.getElementById('player-cards');
        
        // Vis dealer kort (hvis spillet kører, viser vi normalt kun det ene, men her viser vi begge for simpelhed eller skjuler det andet)
        // I denne simple version viser vi alle kort, men i "ægte" blackjack er det ene skjult.
        // Vi gør det simpelt: Vis alle kort, så man kan lære matematikken.
        
        var dealerText = "";
        for(var i=0; i<dealerHand.length; i++) {
            dealerText += dealerHand[i].Value + dealerHand[i].Suit + " ";
        }
        dealerDiv.innerText = dealerText;
        document.getElementById('dealer-score').innerText = "Score: " + getPoints(dealerHand);

        var playerText = "";
        for(var i=0; i<playerHand.length; i++) {
            playerText += playerHand[i].Value + playerHand[i].Suit + " ";
        }
        playerDiv.innerText = playerText;
        document.getElementById('player-score').innerText = "Score: " + getPoints(playerHand);
    }

    function checkForBlackjack() {
        var pScore = getPoints(playerHand);
        if(pScore == 21) {
            document.getElementById('bj-message').innerText = "Blackjack! Du vinder!";
            endBlackjackGame();
        }
    }

    function determineWinner() {
        var dScore = getPoints(dealerHand);
        var pScore = getPoints(playerHand);

        if (dScore > 21) {
            document.getElementById('bj-message').innerText = "Dealer gik over 21. Du vinder!";
        } else if (pScore > dScore) {
            document.getElementById('bj-message').innerText = "Du har højere score. Du vinder!";
        } else if (dScore > pScore) {
            document.getElementById('bj-message').innerText = "Dealer har højere score. Dealer vinder.";
        } else {
            document.getElementById('bj-message').innerText = "Uafgjort (Push).";
        }
    }

    function endBlackjackGame() {
        gameOver = true;
        document.getElementById('btn-deal').disabled = false;
        document.getElementById('btn-hit').disabled = true;
        document.getElementById('btn-stand').disabled = true;
    }

</script>

</body>
</html>
