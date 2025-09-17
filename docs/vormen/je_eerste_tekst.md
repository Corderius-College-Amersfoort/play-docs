---
sidebar_position: 5
hide_table_of_contents: true
---

# 1.4 Je eerste tekst
Tekeningen en spellen worden duidelijker met tekst. Met **coderius-play** kun je eenvoudig tekst toevoegen.
De werkwijze is vergelijkbaar met **play.new_circle** en **play.new_box**.

Voor **play.new_text** kun je de volgende attributen gebruiken:
- **words**: De tekst die op het scherm moet verschijnen.
- **x**: x-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar links, groter dan 0 is naar rechts.
- **y**: y-positie, staat standaard op 0 (het midden). Kleiner dan 0 is naar beneden, groter dan 0 is naar boven.
- **font**: het lettertype van de tekst, bijvoorbeeld 'arial'.
- **font_size**: de grootte van het lettertype.
- **color**: de kleur van de tekst.

Hieronder zie je een voorbeeld:

```python
import play

play.new_text(words='hallo pythonista', font='arial', font_size=30)

play.start_program()
```

### Opdracht 1.4.a Johan Cruijff

Maak onderstaande afbeelding na.

![cruijff](cruijff.png)

```python
import play

# PAS ONDERSTAANDE CODE AAN
play.new_text(words='Als ik zou willen dat je het begreep,')

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

Het zijn drie **play.new_text** aanroepen en we gebruiken 'arial' als font.
De font_size is 40.

</details> 

<details>
    <summary>Klik hier voor een oplossing!</summary>

```python
import play

play.new_text(words='Als ik zou willen dat je het begreep,', y=100, font='arial', font_size=40)
play.new_text(words='zou ik het beter hebben uitgelegd', y=0, font='arial', font_size=40)
play.new_text(words='Johan Cruijff', y=-100, font='arial', font_size=40)

play.start_program()
```

</details>
