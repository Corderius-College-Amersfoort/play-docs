---
sidebar_position: 2
hide_table_of_contents: true
---

# Thonny

## Stap 1: Thonny installeren
Volg deze stappen om Thonny te installeren:
- Ga naar [thonny.org](https://thonny.org/).
- Kies je besturingssysteem (waarschijnlijk Windows) en download het bestand dat begint met "Installer with 64-bit Python ...".
- Installeer het programma en open het.


## Stap 2: Verwijder een eventuele oude versie van coderius-play

Klik bovenaan op `Tools" en klik daarna op "Manage packages"

![Manage Tools](@site/static/img/screenshot_thonny_tools.png)

Zoek naar `corderius-play`

![coderius-play](@site/static/img/zoek_corderius_play.png)

Als je `corderius-play` als zoekresultaat ziet verschijnen, klik er dan op en klik vervolgens op `Uninstall`.
Je kunt gewoon door naar de volgende stap als je `corderius-play` niet op je computer had staan.


## Stap 3: coderius-play installeren

Klik bovenaan op `Tools` en daarna op `Open system shell`

![system shell](@site/static/img/thonny_system_shell.png)


Kopieer het volgende commando in het zwarte scherm dat zich net geopend heeft:


```bash
pip install git+https://github.com/Corderius-College-Amersfoort/play@major-refactors
```

Je gaat een hele lap tekst zien verschijnen. Dat is ok, want de software wordt nu geïnstalleerd.

Als je geen tekst meer ziet verschijnen, is waarschijnlijk de installatie gelukt.
We kunnen dit controleren door eerst het zwarte venter weg te klikken (klik op kruisje rechtsboven) en terug te gaan naar Thonny.

Kopieer de onderstaande code in je editor:
```python
import play

play.new_circle()

play.start_program()
```

Klik op de groene knop (`Run current script`) om de code te draaien

![run](@site/static/img/thonny_run_current_script.png)

Als er een zwarte bal verschijnt, dan is de installatie gelukt!

## Stap 4: En beginnen maar!
Je kan nu beginnen [met het lesmateriaal](docs/vormen/je_eerste_programma.md).