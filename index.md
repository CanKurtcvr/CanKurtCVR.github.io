<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Can Kurt - CV, Tracker & Snake</title>
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

    /* Hovedcontainer */
    .main-container {
        background-color: #ffffff;
        max-width: 850px;
        margin: 30px auto;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    /* Billedstyling */
    .profile-image {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #ffffff;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }

    /* Typografi */
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
        flex-wrap: wrap; /* Gør den responsiv */
    }

    .tab button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 20px;
        transition: 0.3s;
        font-size: 1.1em;
        font-weight: 600;
        color: #777;
        border-bottom: 3px solid transparent;
    }

    .tab button:hover { color: #2c3e50; }
    .tab button.active { color: #2c3e50; border-bottom: 3px solid #3498db; }
    .tabcontent { display: none; animation: fadeEffect 0.5s; }
    #CV { display: block; } /* Vis CV som standard */

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
    .habit-item input[type="checkbox"] { transform: scale(1.5); margin-left: 15px; cursor: pointer; }
    .habit-item.completed { border-left-color: #27ae60; text-decoration: line-through; color: #888; }

    /* --- Snake Spil Styling --- */
    #gameCanvas {
        background-color: #222;
        border: 4px solid #555;
        display: block;
        margin: 20px auto;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    .game-ui {
        text-align: center;
        margin-bottom: 20px;
    }
    .score-board {
        font-size: 1.5em;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 10px;
    }
    .start-btn {
        background-color: #27ae60;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s;
    }
    .start-btn:hover { background-color: #219150; }

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
            <a href="mailto:cankurtcvr@gmail.com">cankurtcvr@gmail.com</a>
        </div>
    </div>

    <div class="tab">
        <button class="tablinks active" onclick="openCity(event, 'CV')">Mit CV</button>
        <button class="tablinks" onclick="openCity(event, 'HabitTracker')">Habit Tracker</button>
        <button class="tablinks" onclick="openCity(event, 'SnakeGame')">Snake Spil</button>
    </div>

    <div id="CV" class="tabcontent">
        <div class="no-break">
            <h2>Faglig Profil</h2>
            <p>Som kandidatstuderende i Software Design med baggrund i Informatik og Virksomhedsstudier, kombinerer jeg teknisk indsigt med forretningsforståelse. Mine kernekompetencer ligger i krydsfeltet mellem teknisk problemløsning, brugerinddragelse og optimering af forretningsprocesser.</p>
        </div>

        <div class="no-break">
            <h2>Uddannelse</h2>
            <div class="no-break">
                <h3>MSc i Software Design</h3>
                <span class="meta">IT-Universitetet i København | 2025 – 2027 (Forventet)</span>
                <ul><li>Specialisering: Softwarearkitektur, systemudvikling og interaktionsdesign.</li></ul>
            </div>
            <div class="no-break">
                <h3>BSc i Informatik & Virksomhedsstudier</h3>
                <span class="meta">Roskilde Universitet | 09/2021 – 06/2024</span>
            </div>
        </div>

        <div class="no-break">
            <h2>Erhvervserfaring</h2>
            <div class="no-break">
                <h3>IT-konsulent (Danske Bank)</h3>
                <span class="meta">Via EY / M Networks | 06/2022 – 12/2023</span>
                <ul>
                    <li>Procesoptimering og analyse af store datamængder.</li>
                    <li>Ansvarlig for on-boarding og faglig oplæring.</li>
                </ul>
            </div>
            <div class="no-break">
                <h3>Tolk</h3>
                <span class="meta">TolkDanmark | 2024 – Nuværende</span>
            </div>
        </div>
    </div>

    <div id="HabitTracker" class="tabcontent">
        <h2>Daglig Habit Tracker</h2>
        <p style="color: #666; margin-bottom: 20px;">Sæt dine mål og hold dig ansvarlig.</p>
        <div class="habit-container">
            <div class="habit-item" id="hb1"><label>Kode i 1 time</label><input type="checkbox" onclick="toggleDone('hb1')"></div>
            <div class="habit-item" id="hb2"><label>Læse 20 sider</label><input type="checkbox" onclick="toggleDone('hb2')"></div>
            <div class="habit-item" id="hb3"><label>Netværk / LinkedIn</label><input type="checkbox" onclick="toggleDone('hb3')"></div>
            <div class="habit-item" id="hb4"><label>Fysisk Træning</label><input type="checkbox" onclick="toggleDone('hb4')"></div>
        </div>
    </div>

    <div id="SnakeGame" class="tabcontent">
        <h2>Pause Snake 🐍</h2>
        <p style="text-align: center;">Brug <strong>Piletasterne</strong> til at styre. Spis den røde mad!</p>
        
        <div class="game-ui">
            <div class="score-board">Score: <span id="score">0</span></div>
            <button class="start-btn" onclick="startGame()">Start Spil</button>
        </div>

        <canvas id="gameCanvas" width="400" height="400"></canvas>
    </div>

</div>

<script>
    /* --- TAB LOGIC --- */
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

        // Stop spillet hvis vi forlader Snake fanen (valgfrit)
        if(tabName !== 'SnakeGame') {
            clearInterval(gameLoop);
        }
    }

    function toggleDone(id) {
        document.getElementById(id).classList.toggle("completed");
    }

    /* --- SNAKE GAME LOGIC --- */
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const box = 20; // Størrelsen på et felt
    
    let snake = [];
    let food = {};
    let score = 0;
    let d; // Direction
    let gameLoop;
    let isGameRunning = false;

    // Lyt efter piletaster
    document.addEventListener("keydown", direction);

    function direction(event) {
        // Forhindre scroll når man spiller, men kun hvis Snake fanen er åben
        if(document.getElementById('SnakeGame').style.display === 'block') {
            if([37, 38, 39, 40].indexOf(event.keyCode) > -1) {
                event.preventDefault();
            }
        }

        let key = event.keyCode;
        if( key == 37 && d != "RIGHT") d = "LEFT";
        else if(key == 38 && d != "DOWN") d = "UP";
        else if(key == 39 && d != "LEFT") d = "RIGHT";
        else if(key == 40 && d != "UP") d = "DOWN";
    }

    function draw() {
        // Tegn baggrund
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Tegn Slangen
        for(let i = 0; i < snake.length; i++) {
            ctx.fillStyle = (i == 0) ? "#2ecc71" : "#27ae60"; // Hovedet er lysere
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            
            ctx.strokeStyle = "#222";
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }

        // Tegn Maden
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(food.x, food.y, box, box);

        // Gem gamle hoved position
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        // Flyt hovedet
        if(d == "LEFT") snakeX -= box;
        if(d == "UP") snakeY -= box;
        if(d == "RIGHT") snakeX += box;
        if(d == "DOWN") snakeY += box;

        // Spis mad
        if(snakeX == food.x && snakeY == food.y) {
            score++;
            document.getElementById("score").innerText = score;
            food = {
                x: Math.floor(Math.random() * 19 + 1) * box,
                y: Math.floor(Math.random() * 19 + 1) * box
            }
        } else {
            // Fjern halen
            snake.pop();
        }

        // Tjek Kollision (Vægge eller sig selv)
        let newHead = { x: snakeX, y: snakeY };

        if(snakeX < 0 || snakeX > canvas.width - box || 
           snakeY < 0 || snakeY > canvas.height - box || 
           collision(newHead, snake)) {
            clearInterval(gameLoop);
            isGameRunning = false;
            alert("Game Over! Din score: " + score);
            return;
        }

        snake.unshift(newHead);
    }

    function collision(head, array) {
        for(let i = 0; i < array.length; i++) {
            if(head.x == array[i].x && head.y == array[i].y) {
                return true;
            }
        }
        return false;
    }

    function startGame() {
        if(isGameRunning) return; // Forhindre dobbelt start

        // Reset spil
        snake = [];
        snake[0] = { x: 9 * box, y: 10 * box };
        score = 0;
        d = null; // Ingen retning ved start
        document.getElementById("score").innerText = score;
        
        // Placer mad
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };

        isGameRunning = true;
        clearInterval(gameLoop);
        gameLoop = setInterval(draw, 100); // Kør spillet (100ms speed)
    }
</script>

</body>
</html>
