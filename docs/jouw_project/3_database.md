---
sidebar_position: 3
---

# Een database
Gegevens opslaan op je computer is erg handig bij een spel.
Je kunt bijvoorbeeld de high score opslaan, maar ook de instellingen van de gebruiker. Speelde de gebruiker het spel de laatste keer op *easy* of toch op *medium*? Hierbij geven we je een paar voorbeelden.

## High score
Zoals in de [Cheatsheet](../cheatsheet.md) is uitgelegd, kun je een database gebruiken voor het opslaan van de high score van je spel. Hierbij een voorbeeld van hoe je dit zou kunnen doen:

```python
import play

database = play.new_database()

database.set_data('punten', 0)

huidige_highscore = database.get_data('punten')

tekst = play.new_text(words="high score is " + str(huidige_highscore))

@play.when_key_pressed("space")
def update_high_score():
    punten = database.get_data('punten')
    database.set_data('punten', punten + 1)
    tekst.words = "high score is " + str(database.get_data('punten'))

play.start_program()
```

In dezelfde map als het bestand met je Python code, vind je het bestand **database.json**. Hierin staan de gegevens opgeslagen.

## User settings
Naast de high score, kun je natuurlijk ook settings opslaan, bijvoorbeeld:

```python
import play

database = play.new_database()

database.set_data('punten', 0)
database.set_data('moeilijheid', 'makkelijk')
database.set_data('items', dict())

play.start_program()
``` 

## Maar kan ik dit niet allemaal zelf?
Zeker! Mocht je Informatica-ACTIEF gebruiken, is er een mooi hoofdstuk over dictionaries waarin je ook leert om deze als JSON op te slaan. Durf je het aan om dit zelf te doen?
Hieronder geven we je een voorzet om je op gang te helpen.
- kopieer dit codefragment en voer de code uit
- klik op spatie en update de database
- zoek naar het bestand `database.json` in **dezelfde** folder als je Python bestand. Als het goed, zie je elke keer de inhoud van het bestand veranderen iedere keer dat je op spatie klikt.


```python
import play
import os
import json

pad_mijn_db = 'database.json'
mijn_db = None

boven = play.new_text("Klik op spatie om de teller te verhogen",
                      y=100, 
                      font_size=40)
onder = play.new_text("Dit wordt ook opgeslagen in je database", 
                      y=0, 
                      font_size=40)
daaronder = play.new_text("Aantal kliks:", 
                          y=-100, 
                          font_size=40)
daarweeronder = play.new_text('0', 
                              y=-150, 
                              font_size=40)

@play.when_program_starts
def start():
    global mijn_db
    mijn_db = {'aantal kliks': 0}
    # kijk of jouw 'pad_mijn_db' al bestaat 
    if os.path.exists(pad_mijn_db):
        with open(pad_mijn_db, 'r') as infile:
            mijn_db = json.load(infile)

@play.when_key_released('space')
def update_database():
    global mijn_db

    # update je dictionary
    mijn_db['aantal kliks'] += 1
    daarweeronder.words = str(mijn_db['aantal kliks'])

    # update database.json (dit verandert het bestand op je harde schijf)
    with open(pad_mijn_db, 'w') as outfile:
        json.dump(mijn_db, outfile)

play.start_program()
```