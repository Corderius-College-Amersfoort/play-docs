---
sidebar_position: 3
hide_table_of_contents: true
---

# Visual Studio Code

## Visual Studio Code installeren
Ga naar [code.visualstudio.com](https://code.visualstudio.com/) en download het programma voor jouw besturingssysteem.
Open het nadat je de installatie doorlopen hebt.

## Een projectmap openen
Start VS Code en open de map (`File` en dan `Open Folder`) waarin je Python-project staat.
Het is belangrijk dat je eerst de projectmap opent. Dan weet VS Code automatisch waar bestanden en de terminal moeten werken.

## Python installeren
We gaan drie stappen uitvoeren. Voor elke stap verwijzen we naar het hoofdstuk in de Youtube video hieronder die het uitlegt.
- de Programmeertaal Python (zie hoofdstuk `Install Python`)
- Python extension (zie hoofdstuk `Install Python extension`)
- Een virtual environment (zie hoofdstuk `Virtual Environment`)

<iframe width="704" height="396" src="https://www.youtube.com/embed/D2cwvpJSBX4" title="Getting Started with Python in VS Code (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## coderius-play installeren.
- Klik bovenaan op `Terminal`
- Klik op `New terminal`

Onderaan Visual Studio Code opent een terminal. Kopieer hierin het volgende commando:
```bash
pip uninstall corderius-play
```
Mocht je `coderius-play` al een keer geïnstalleerd hebben, dan hebben we die nu verwijderd. Dan weten we zeker dat we zo de goede versie installeren.
Dan gaan we nu `coderius-play` installeren. Kopieer het volgende commando en plak het in de terminal:

```bash
pip install git+https://github.com/Corderius-College-Amersfoort/play@major-refactors
```

## Testen of het gelukt is
Kopieer het volgende codefragment naar VS code en voer het uit.
Het hoofdstuk `Executing Python file options` kan hierbij nuttig zijn.

```python
import play

play.new_circle()

play.start_program()
```
Als een zwarte bal verschijnt, dan ben je klaar voor [de volgende stap](docs/vormen/je_eerste_programma.md).


