# TODO — Offene Punkte vor Veröffentlichung

Stand: 2026-09-07. Diese Datei listet, was in der Portfolio-Seite noch fehlt oder geprüft werden
sollte. Einfach `[PLACEHOLDER]` im Editor suchen, um jede Stelle im Code direkt zu finden.

## ✅ Erledigt

- Name überall eingetragen: **René Hill**
- E-Mail: `renehill170@gmail.com` (Footer aller Seiten, Kontaktseite, mailto-Links)
- LinkedIn: `linkedin.com/in/rene-hill-4a516637b` (Kontaktseite)
- itch.io-Profil: `lordr3ne.itch.io` (Kontaktseite)
- itch.io-Link für Blizz: `lordr3ne.itch.io/blizz` (eigener "Play on itch.io"-Button auf der Blizz-Seite)
- Alle vier Case Studies (Home ?weet Home, SeaTeam, Blizz, Moshpit) vollständig mit echtem Text
  aus den `*CaseStudy.txt`-Dateien befüllt: Subtitle, Team/Rolle/Zeitraum/Tools, Overview, Design
  Challenge, My Contribution, Outcome & Learnings
- Alle Bilder/GIFs aus "Projekte für Portfolio" eingebunden und komprimiert (Details siehe unten)
- Startseiten-Projektkarten (Kurzbeschreibung + Tags) an die echten Inhalte angepasst

## ⚠️ Noch offen

### 1. CV (`cv.html`)
- **Fehlende Datei:** Der Download-Button verlinkt auf `cv/rene-hill-cv.pdf` — diese Datei liegt
  noch nicht im `cv/`-Ordner. Ohne sie ist der Button aktuell ein 404-Link.
- Intro-Satz oben auf der Seite ist noch Platzhaltertext ("One line on how you'd like reviewers
  to read the CV…")
- Zeile mit "Last updated: Month 2026 · PDF, ~1–2 pages" muss noch auf echtes Datum/Seitenzahl
  angepasst werden

### 2. Skills-Seite (`skills.html`) — ✅ erledigt (2026-10-07), bitte gegenlesen
- Positionierung jetzt als **Game Designer** statt "Game Designer / Technical Designer"
  (Titel, Meta-Beschreibungen, Hero-Zeile und Footer auf allen Seiten angepasst).
- Gruppe "Technical" (Gameplay Scripting, Tools, Version Control, Data & Balancing) entfernt und
  durch **"Process"** ersetzt. Neue Struktur, jeder Skill mit Beleg aus den Case Studies:
  - **01 Design:** Systems & Economy Design (geteilte Wirtschaft, HSH) · Core Loop Design (Dual
    Core Loop, HSH) · Asymmetric Co-op Design (Farbfilter-Brillen, SeaTeam) · Game Feel
    (Gewichtsklassen der Möbel, HSH)
  - **02 Process:** Rapid Prototyping (Blizz in 1 Woche) · Playtesting & Iteration (6 Paper-Tests
    HSH, 2 Playtests SeaTeam) · Rules & Design Documentation (Regelwerk ~2,5 Seiten, GDD) ·
    Design Lead & Moderation (Lead bei HSH, Teamorga bei SeaTeam)
  - **03 Sound:** Sound Design (~95 % selbst aufgenommen, Blizz) · Sound as Mechanic
    (Dissonanzfilter, Blizz) · Audio-Driven Feel (Audio-Pass für Währung/Treffer, HSH)
  - **04 Visuals & Space:** Environmental Storytelling (4 Verfallsstufen, HSH) · Visual
    Readability (Farbtrennung im Druck, SeaTeam) · Physical Prototyping (Brillen, Tiles, Box,
    SeaTeam)
- Rausgeflogen, weil es dafür keinen Beleg in den Case Studies gibt: Level Design, Combat &
  Encounter Design, Adaptive Music (FMOD/Wwise), UI/UX, Shader & VFX Collaboration.
- Intro-Satz ist eingetragen. Moshpit taucht auf der Skills-Seite bewusst nicht auf, weil die
  Case Study aktuell fast nur Programmierung (Crowd-Simulation, MultiMesh) zeigt. Die Rolle
  "Game Design & Programming" auf der Moshpit-Seite ist unverändert geblieben.

### 3. Startseite (`index.html`)
- Der Absatz unter der Headline ("I'm a game designer who thinks in systems and feel…") ist noch
  generischer Platzhaltertext aus dem Template, nicht deine eigene Stimme.

### 4. Kontaktseite (`contact.html`)
- Intro-Satz ("Open to full-time roles, contract work, and collaborations — reach out through
  whichever channel is easiest.") ist noch der generische Template-Text. Inhaltlich neutral genug,
  um stehen zu bleiben, aber bitte bestätigen, ob das so stimmt (Verfügbarkeit für Vollzeit/
  Freelance etc.).

### 5. Blizz — nur ein Bild vorhanden
- Im Ordner lag nur `BlizzInGamePicture.png`. Die beiden zusätzlichen Media-Slots aus der
  Case-Study-Vorlage wurden entfernt (nicht nur versteckt), weil kein zweites Bild da war. Falls
  es weitere Screenshots oder ein GIF gibt, gerne nachreichen — dann baue ich sie ein.

### 6. Titel "Home ?weet Home"
- Das "?" statt "S" ist kein Fehler beim Einpflegen, sondern steht so in deiner
  `HomeSweetHomeCaseStudy.txt` ("HOME, ?WEET HOME") — vermutlich bewusst wegen des
  Horror-/Psyche-Twists im Spiel. Falls das nicht so gewollt war: Bescheid geben, dann ändere ich
  es global auf "Home Sweet Home".

### 7. Sonstiges
- Copyright-Jahr ist überall fest auf **2026** gesetzt (`© 2026 René Hill`) — falls das nicht
  stimmen soll, muss es global ersetzt werden.
- `cv/README.txt` im `cv`-Ordner ist der ursprüngliche Platzhalter-Hinweis aus dem Template —
  kann gelöscht werden, sobald die echte CV-PDF drin liegt.

## Technische Hinweise

- Das ursprüngliche MoshPit-GIF (45 MB) wurde zu MP4/WebM (~1,5 MB) konvertiert und liegt unter
  `assets/video/moshpit/`. Läuft auf der Moshpit-Seite als Autoplay-Loop-Video statt als GIF.
- Alle Projektbilder wurden komprimiert und liegen unter `assets/img/projects/<projekt>/`
  (z. B. SeaTeam-Foto: 17 MB → 448 KB).
- Das Home-?weet-Home-GDD (`FinalGDD.pdf`, 28 MB) liegt unter
  `assets/docs/home-sweet-home/home-sweet-home-gdd.pdf` und ist über einen Download-Button auf der
  Case-Study-Seite verlinkt.
- Der Ordner **"Projekte für Portfolio"** wurde nicht verändert oder gelöscht — er dient weiterhin
  als Rohmaterial-Backup für alle Bilder, GIFs und Texte.
