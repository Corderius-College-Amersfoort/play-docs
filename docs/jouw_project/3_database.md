---
sidebar_position: 3
---

# Een database
Gegevens opslaan op je computer is erg handig bij een spel.
Je kan bijvoorbeeld de high score opslaan, maar ook settings van de gebruiker. Speelde deze het spel het laatste op *easy* of toch medium? Hierbij geven we je een paar voorbeelden.

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










