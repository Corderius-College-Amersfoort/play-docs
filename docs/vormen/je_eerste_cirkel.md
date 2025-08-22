---
sidebar_position: 3
hide_table_of_contents: true
---

# 1.2 Je eerste cirkel

Tijd om iets op het scherm te tekenen.

```python
import play

play.new_circle()

play.start_program()
```

Kopieer dit stukje code naar je editor (bijvoorbeeld Thonny). Je kunt bij Thonny linksboven op een groen rondje met een pijltje erin klikken. Dan wordt jouw programma uitgevoerd.

Als het goed is, zie je een grote zwarte cirkel op je scherm.
Merk op dat we nergens hebben aangegeven:
- welke kleur de cirkel moet hebben
- hoe groot deze is
- ....

Dat is toch wel gek. Het programma heeft stiekem voor ons al een paar zaken gekozen.
Het is toch wel fijn als we het zelf kunnen veranderen.

## 1.2.1 De kleur aanpassen
We kunnen de kleur aanpassen met het attribuut **color**.
Om bijvoorbeeld de cirkel blauw te maken, kun je het volgende doen.

```python
import play

play.new_circle(color='blue')

play.start_program()
```

Ben je benieuwd uit welke kleuren je allemaal kan kiezen? Op [deze pagina](https://www.pygame.org/docs/ref/color_list.html) zie je alle opties.

### Opdracht 1.2.1 De kleur aanpassen
a) Schrijf een programma waarbij de kleur van de cirkel rood is. Kopieer het voorbeeld hieronder naar je editor (bijvoorbeeld Thonny of Visual Studio Code) en pas de kleur aan. Wanneer je tevreden bent met je code, kun je het gaan uitvoeren. 

```python 
import play

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

Het attribuut **color** gebruik je voor de kleur.
</details>

<details>
    <summary>Klik hier voor een oplossing!</summary>

```python
import play

play.new_circle(color='red')

play.start_program()
```
</details>


b) pas het programma aan met een kleur die je gekozen hebt uit de lijst van [alle kleuren](https://www.pygame.org/docs/ref/color_list.html).

```python 
import play

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

De lijst van opties vind je op [deze pagina](https://www.pygame.org/docs/ref/color_list.html).
</details>

<details>
    <summary>Klik hier voor een oplossing!</summary>

```python
import play

play.new_circle(color='aquamarine4')

play.start_program()
```
</details>

## 1.2.2 De positie aanpassen
Je kunt de cirkel ook op een andere plek zetten. Hiervoor gebruik je de **x** (horizontaal) en **y** (verticaal) attributen.
Het midden van het scherm is x=0 en y=0.

```python
import play

play.new_circle(x=0, y=0)

play.start_program()
```

Zie je de cirkel in het midden staan?

### Opdracht 1.2.2: de positie aanpassen

Waar zie je cirkel verschijnen bij:

a) x=100 en y=0 

```python 
import play

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor het antwoord</summary>

```python
import play

play.new_circle(x=100, y=0)

play.start_program()
```
De bal zou een klein stukje rechts van het midden moeten staan.

</details>

b) x=-100 en y=0

```python 
import play

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor het antwoord</summary>

```python
import play

play.new_circle(x=-100, y=0)

play.start_program()
```
De bal zou een klein stukje links van het midden moeten staan.

</details>

c) x=0 en y=100

```python 
import play

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor het antwoord</summary>

```python
import play

play.new_circle(x=0, y=100)

play.start_program()
```
De bal zou een klein stukje boven het midden moeten staan.

</details>


d) x=0 en y=-100

```python 
import play

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor het antwoord</summary>

```python
import play

play.new_circle(x=0, y=-100)

play.start_program()
```
De bal zou een klein stukje onder het midden moeten staan.

</details>



## 1.2.3 Wat kan ik aanpassen aan een cirkel?
Hierbij de lijst van attributen voor een cirkel:
- **color**: Kleur, staat standaard op 'black'. [Op deze pagina](https://www.pygame.org/docs/ref/color_list.html) zie je welke kleuropties er zijn.
- **x**: x-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar links, groter dan 0 is naar rechts.
- **y**: y-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar beneden, groter dan 0 is naar boven.
- **radius**: straal, staat standaard op 100. Hoe groter de waarde, hoe groter de cirkel.
- **border_color**: kleur van de rand, staat standaard op  'light blue'. Let op, als de **border_width** 0 is, zie je de rand niet.
- **border_width**: de breedte van de rand. Staat standaard op 0 (geen rand zichtbaar)
- **transparency**: doorzichtigheid, 0 is onzichtbaar. 100 is volledig zichtbaar.

### Opdracht 1.2.3 De mooiste cirkel

a) Teken twee cirkels die elkaar niet mogen raken. De eerste cirkel is blauw en heeft geen rand. De tweede is rood en heeft een dunne groene rand. 

Vanaf nu is het heel handig om te kijken in de [Cheatsheet](../cheatsheet.md). Als je in de cheatsheet klikt op **Cirkel (play.new_circle)**, dan zie je wat je kan veranderen aan een cirkel.

```python
import play 

# SCHRIJF HIER JE CODE

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

Twee cirkels betekent ook twee keer **play.new_circle**. 
Kijk verder goed naar welke attributen je nodig hebt.
</details>

<details>
    <summary>Klik hier voor een oplossing!</summary>

```python
import play


play.new_circle(x=-200, color='blue')
play.new_circle(x=200, color='red', border_width=10, border_color='green')

play.start_program()

```
</details>