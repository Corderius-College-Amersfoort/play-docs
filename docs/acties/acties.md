---
sidebar_position: 1
hide_table_of_contents: true
---

# 3.1 Acties
Naast dat je "eigenschappen" zoals kleur, grootte, positie, etc. kunt veranderen, kun je ook acties uitvoeren op je vormen.
Een voorbeeld hiervan is **verbergen**.

Kopieer eerst het volgende codefragment naar je editor en voer het uit.

```python
import play 

cirkel = play.new_circle()

play.start_program()
```

Als het goed is, zie je een cirkel op je scherm. Laten we één regel code toevoegen.


```python
import play 

cirkel = play.new_circle()
cirkel.hide()

play.start_program()
```

<details>
    <summary>Wat denk je dat er gaat gebeuren? Klik hier voor het antwoord.</summary>

De bal verdwijnt! Maar hoe werkt het echt?

```python
cirkel = play.new_circle()
```
Met **play.new_circle** maak je de cirkel en **cirkel =** zorgt ervoor dat we de variabele **cirkel** kunnen gebruiken om de cirkel te veranderen.

```python
cirkel.hide()
```
Met **cirkel.hide()** verberg je de cirkel.
De actie wordt dus gedaan met **hide()**. Vergeet niet de haakjes!

</details>

## 3.1.1 En weer tevoorschijn
Met **show()** laat je de cirkel weer zien.

```python
import play 

cirkel = play.new_circle()
cirkel.hide()
cirkel.show()

play.start_program()
```

<details>
    <summary>Wat denk je? Zie je de cirkel wel of niet als dit codefragment draait?</summary>

De cirkel is wel te zien! We doen alleen wel iets geks.
We laten eerst de cirkel verdwijnen met **cirkel.hide()** en daarna weer verschijnen met **cirkel.show()**.
</details>



