<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Can Kurt - CV & Tracker</title>
<style>
    /* --- Generel Styles & Blå Baggrund --- */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        /* Opgave 2: Blå baggrundsfarve til hele siden */
        background-color: #e8f1f8; 
        margin: 0;
        padding: 20px;
    }

    /* Hovedcontaineren der holder alt indholdet (den hvide boks) */
    .main-container {
        background-color: #ffffff;
        max-width: 850px;
        margin: 30px auto;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    /* --- Opgave 1: Billedstyling (Mindre og rundt) --- */
    .profile-image {
        width: 130px; /* Juster størrelsen her */
        height: 130px;
        object-fit: cover; /* Sikrer at billedet ikke bliver strakt */
        border-radius: 50%; /* Gør billedet rundt */
        border: 4px solid #ffffff; /* Hvid kant omkring billedet */
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }

    /* --- Eksisterende Typografi Styles --- */
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

    /* --- Opgave 3: Faner (Tabs) Styling --- */
    /* Style for selve fane-knapperne */
    .tab {
        overflow: hidden;
        border-bottom: 2px solid #eee;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
    }

    /* Style for knapperne inde i fanen */
    .tab button {
        background-color: transparent;
        float: left;
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

    /* Skift farve ved hover */
    .tab button:hover {
        color: #2c3e50;
    }

    /* Style for den aktive fane */
    .tab button.active {
        color: #2c3e50;
        border-bottom: 3px solid #3498db; /* Blå streg under aktiv fane */
    }

    /* Skjul faneindhold som standard */
    .tabcontent {
        display: none;
        animation: fadeEffect 0.5s; /* Lille fade-in effekt */
    }

    /* Nødvendig for at vise den første fane korrekt ved start */
    #CV { display: block; }

    @keyframes fadeEffect {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    /* --- Styling til Habit Tracker --- */
    .habit-container {
        margin-top: 20px;
    }
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
    /* Eksempel på at style checkboxes lidt pænere */
    .habit-item input[type="checkbox"] {
        transform: scale(1.5);
        margin-left: 15px;
        cursor: pointer;
    }
    .habit-item.completed {
        border-left-color: #27ae60; /* Grøn når færdig */
        text-decoration: line-through;
        color: #888;
    }

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
    </div> <div id="HabitTracker" class="tabcontent">
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
    </div> </div> <script>
    // Funktion til at skifte mellem faner
    function openCity(evt, tabName) {
        var i, tabcontent, tablinks;
        
        // Skjul alt faneindhold
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        // Fjern "active" klassen fra alle knapper
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        // Vis den valgte fane og gør knappen aktiv
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Simpel funktion til at markere habits som færdige (visuelt)
    function toggleDone(boxId) {
        var box = document.getElementById(boxId);
        box.classList.toggle("completed");
    }
</script>

</body>
</html>
