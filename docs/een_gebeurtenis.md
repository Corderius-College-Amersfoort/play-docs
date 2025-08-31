---
sidebar_position: 5
hide_table_of_contents: true
---

# 4. Gebeurtenissen
Als ik spatie intyp, wil ik graag dat iets beweegt..... kan dat?
In **play** kun je iets veranderen als de gebruiker iets doet. We noemen dit ook wel een gebeurtenis.
Zeker!

```python
import play

box = play.new_box()

@play.when_key_pressed("space")
def spatie_ingedrukt():
  box.x = box.x + 10
    
play.start_program()
```
Wat gebeurt hier allemaal?

```python
@play.when_key_pressed("space")
```
Dit is de gebeurtenis. De gebeurtenis heet dus **when_key_pressed**.
We moeten de gebeurtenis wel vertellen bij welke toets we iets willen doen, in dit geval **space** wat natuurlijk staat voor spatie.

```python
def spatie_ingedrukt():
    box.x = box.x + 10 
```
Direct onder de gebeurtenis plaatsen we een functie **spatie_ingedrukt**.
Deze functie wordt uitgevoerd zodra de gebeurtenis gebeurt, in dit geval het indrukken van de spatiebalk.


## Opdracht 4.a ook links en rechts
a) Voer het onderstaand code fragment uit. Wat gebeurt er als je op pijltje omhoog drukt? 

```python
import play

box = play.new_box()

@play.when_key_pressed("up")
def omhoog():
  box.y = box.y + 10

@play.when_key_pressed('down')
def omlaag():
  box.y = box.y - 10
    
play.start_program()
```

<details>
  <summary>Klik hier voor het antwoord</summary>

  Als het goed is, gaat de rechthoek omhoog.

</details>


b) Pas het aan zodat als je op pijltje naar rechts klikt, de rechthoek naar rechts gaat

<details>
  <summary>Klik hier voor de oplossing</summary>

```python
import play

box = play.new_box()

@play.when_key_pressed("right")
def omhoog():
  box.x = box.x + 10

@play.when_key_pressed("up")
def omhoog():
  box.y = box.y + 10

@play.when_key_pressed('down')
def omlaag():
  box.y = box.y - 10
    
play.start_program()
```

</details>

c) Voeg nu code toe zodat het reageert op pijltje naar links en de box dan ook naar links beweegt 

<details>
  <summary>Klik hier voor de oplossing</summary>

```python
import play

box = play.new_box()

@play.when_key_pressed("up")
def omhoog():
  box.y = box.y + 10

@play.when_key_pressed('down')
def omlaag():
  box.y = box.y - 10

@play.when_key_pressed("left")
def omhoog():
  box.x = box.x - 10

@play.when_key_pressed('right')
def omlaag():
  box.x = box.x + 10
    
play.start_program()
```
</details>

## Opdracht 4.b Klikken
Naast **when_key_pressed** bestaan er nog meer gebeurtenissen.
Kijk maar eens in de [cheatsheet](cheatsheet.md).

a) Kies één gebeurtenis uit de [cheatsheet](cheatsheet.md)

b) kopieer het voorbeeld van de gekozen gebeurtenis naar je editor en draai het codefragment

c) pas de code van het voorbeeld aan naar iets wat jij leuker vindt :)