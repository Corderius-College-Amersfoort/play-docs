---
sidebar_position: 8
---

# 7. Een score bijhouden met `global`
Hoe houd je een score bij in een spel? Als je een variabele, zoals `score`, wilt aanpassen *binnen* een functie, heb je het speciale sleutelwoord `global` nodig.

## 7.1 Een veelgemaakte fout

Kopieer onderstaande code naar je editor en voer de code uit:

```python
import play

score = 0
score_tekst = play.new_text(str(score), y=100, font_size=40)

@play.when_key_released("space")
def spatie_ingedrukt():
    score = score + 1
    score_tekst.words = str(score)
    
play.start_program()
```

Druk maar eens op spatie. Als het goed is verandert er niets en zie je het volgende in je console:

```
UnboundLocalError: local variable 'score' referenced before assignment
```

Dit betekent dat we niet de **rechten** hebben om de variabele **score** te wijzigen.

## 7.2 een goed voorbeeld
We gaan het statement **global** toevoegen.
Als we het commando **global VARIABLE** geven, dan hebben we wel de rechten om de variabele te wijzigen.

```python
import play

score = 0
score_tekst = play.new_text(str(score), y=100, font_size=40)

@play.when_key_released("space")
def spatie_ingedrukt():
    global score
    score = score + 1
    score_tekst.words = str(score)
    
play.start_program()
```      
