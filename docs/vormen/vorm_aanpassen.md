---
sidebar_position: 6
hide_table_of_contents: true
---

# 1.5 Je vorm aanpassen

Tot nu toe hebben de vormen stilgestaan op je scherm.
Op die manier wordt het erg lastig om een spel te programmeren.
We hebben beweging nodig! Hiervoor moeten we wel één heel belangrijk iets leren: vormen aanpassen nadat ze gemaakt zijn.

Kijk heel kritisch naar het volgende voorbeeld:


```python 
import play 

play.new_circle()

play.start_program()
```

Hoe kan ik de cirkel veranderen **nadat** deze gemaakt is?
Oftewel, kan ik via code na **play.new_circle()** iets veranderen aan de cirkel?

## 1.5.1 De variabele
We hebben een **variabele** nodig die ons toegang geeft tot de cirkel. Een variabele is een soort naamkaartje dat je aan iets kunt geven in je programma, zodat je het later makkelijk kunt terugvinden en aanpassen.
In ons geval willen we de cirkel later nog veranderen (bijvoorbeeld de kleur of positie), dus geven we hem een naam: `cirkel`.

Kijk maar eens goed naar het onderstaande voorbeeld:


```python
import play 

cirkel = play.new_circle()
cirkel.color = 'blue'

play.start_program()
```

In dit codefragment gebeurt erg veel:
- **play.new_circle()**: dit tekent de cirkel op het scherm
- **cirkel = play.new_circle()**: dit tekent de cirkel EN zorgt ervoor dat de variabele **cirkel** verwijst naar onze cirkel
- **cirkel.color = 'blue'**: dit wijzigt van onze cirkel alleen de kleur naar blauw

Naast kleur kun je ook de x-coördinaat, y-coördinaat etc. aanpassen. Probeer het maar eens in de volgende opdracht.

### Opdracht 1.5.1: je aangepaste cirkel
Maak een nieuwe cirkel en pas deze aan:
- Verander de kleur naar 'green' 
- Verander de x-coördinaat naar 150 
- Verander de y-coördinaat naar 250 
- Vergroot de cirkel door de 'radius' (straal) aan te passen naar 200

```python
import play 

cirkel = play.new_circle()
# JOUW CODE HIER

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

De attributen die je gaat veranderen zijn: **color**, **x**, **y** en **radius**.

</details>

<details>
    <summary>Klik hier voor de oplossing!</summary>

```python  
import play 

cirkel = play.new_circle()
cirkel.color = 'green'
cirkel.x = 150
cirkel.y = 250
cirkel.radius = 200

play.start_program()
```
</details>


