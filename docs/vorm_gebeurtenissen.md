---
sidebar_position: 6
hide_table_of_contents: true
---

# 5. Gebeurtenissen bij een vorm

Bij de vorige opdrachten leerde je hoe je programma kan reageren op een gebeurtenis in het spel, zoals wanneer de gebruiker op een knop drukt. We kijken nu hoe je programma kan reageren op objecten en objecten onderling.

Tip: kijk voor informatie over dit onderwerp in de [cheatsheet](cheatsheet.md).

## Opdracht 5.a Stap voor stap naar een botsing

a) de basis
- Maak eerst zelf een blauwe bal, met als naam van de variabele `bal`. 
- Maak daarna een batje met de naam `batje` en plaatst deze aan de rechterkant van het scherm.

<details>
<summary> Kijk hier voor het antwoord</summary>

```python
import play

bal = play.new_circle(color="blue", radius=50)
batje = play.new_box(x=300)

play.start_program()
```

</details>

b) Probeer nu het volgende:
- Laat de bal automatisch naar rechts bewegen
- Zorg dat de bal niet naar beneden valt
- Pas het batje aan zodat die ook niet valt en niet kan bewegen.
- Lukt het om de bal en het batje te laten botsen?

<details>
    <summary>Klik hier voor een tip</summary>

Gebruik **start_physics()** voor laten bewegen. De eigenschappen **x_speed** en **obeys_gravity** kunnen erg nuttig zijn.
</details>

<details>
<summary>Kijk hier voor het antwoord</summary>

```python
import play

bal = play.new_circle(color="blue", radius=50)
bal.start_physics(x_speed=40, obeys_gravity=False)
batje = play.new_box(x=300)
batje.start_physics(can_move=False, obeys_gravity=False)

play.start_program()
```
</details>

c) reageren op de botsing
Voeg nu het volgende codefragment aan je code toe (dus tussen je code en **play.start_program()**):

```python
text = play.new_text('batje is niet aangeraakt', y=200, font_size=50)
@bal.when_stopped_touching(batje) 
def aangeraakt(): 
    text.words = 'batje is aangeraakt'
```

### 5.1 Theorie: de event-decorator

Wat is die regel met de `@` ervoor?

De `@...` regel heet een **event-decorator**. Deze laat de functie die er direct onder staat één keer afgaan als de specifieke gebeurtenis plaatsvindt.

De algemene vorm is:
```python
@vorm1.when_..._touching(vorm2)
def doe_iets():
    # reactie op gebeurtenis
```

In ons voorbeeld:
```python
@bal.when_stopped_touching(batje)
def aangeraakt():
    text.words = 'batje is aangeraakt'
```

Hier laat `@bal.when_stopped_touching(batje)` de functie `aangeraakt` één keer afgaan op het moment dat `bal` ophoudt `batje` te raken (dus precies bij de overgang van wel aanraken naar niet meer aanraken). De code binnen `aangeraakt` wordt dan uitgevoerd.

Let op:
- **bal** wijst hier naar de **variabele** `bal`. Deze variabele wijst naar de gemaakte cirkel.
- **batje** wijst hier naar de **variabele** `batje`. Deze variabele wijst naar het gemaakte batje.

Als onze bal dus botst tegen ons batje en weer terugkaatst, vindt deze gebeurtenis plaats.


