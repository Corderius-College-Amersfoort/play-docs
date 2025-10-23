---
sidebar_position: 2
hide_table_of_contents: true
---

## Installeer coderius-play
Om de code uit dit project gebruiken moeten we nog iets extra's op onze computer installeren. Dit heet een package.

### Thonny gebruikers
Klik bovenaan op "Tools" en klik daarna op "Open system shell"

![Manage Tools](@site/static/img/thonny_system_shell.png)

Er opent een zwart scherm waarin je kan typen.
Kopieer hier het volgende commando in en druk op Enter.

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

Als je er een zwarte bal verschijnt, dan is de installatie gelukt!

### VS code gebruikers

Mocht je bekend zijn met **pip**, dan kun je het package installeren via:
```bash
pip install git+https://github.com/Corderius-College-Amersfoort/play@major-refactors
```


