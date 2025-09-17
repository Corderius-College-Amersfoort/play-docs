---
sidebar_position: 2
hide_table_of_contents: true
---

# 3.2 Zijn acties functies?
Nu zul je denken, zijn acties niet gewoon hetzelfde als de functies die we eerder gezien hebben?

```python
import play 

cirkel = play.new_circle()
cirkel.hide()

play.start_program()
```

Oftewel, is **hide()** niet gewoon een functie? Het antwoord is: ja en nee.

## Voorbeeld van een Python functie:
Het doel van een functie is om een aantal Python-commando's te bundelen, zodat je niet elke keer dezelfde regels code hoeft te typen:

```python
def happy_birthday(name):
    print("Happy birthday to you!")
    print("Happy birthday to you!")
    print("Happy birthday, dear " + name + ".")
    print("Happy birthday to you!")

happy_birthday("Rachab")
```

Als je dit programma kopieert naar je editor (bijvoorbeeld Thonny of Visual Studio Code) en uitvoert, zou je het volgende moeten zien:

```
Happy birthday to you!
Happy birthday to you!
Happy birthday, dear Rachab.
Happy birthday to you!
```


Een vraag: hoeveel regels code komen erbij als je ook "Happy birthday" willen zingen voor de tweelingzus Rachel?

<details>
    <summary>Klik hier voor het antwoord</summary>

Slechts één! De functie wordt maar één keer gedefinieerd. Daarna heb je iedere keer maar één regel code nodig om de functie aan te roepen.

```python
def happy_birthday(name):
    print("Happy birthday to you!")
    print("Happy birthday to you!")
    print("Happy birthday, dear " + name + ".")
    print("Happy birthday to you!")

happy_birthday("Rachab")
happy_birthday("Rachel")
```

</details>

## En een method?
Wat we veel gebruiken in coderius-play is een functie, maar die is dan vastgeplakt aan bijvoorbeeld een vorm. Dit noemen we een methode:

```python
import play 

cirkel = play.new_circle()
cirkel.hide()

play.start_program()
```

In dit voorbeeld zit de methode **hide()** vast aan het **cirkel**-object. Wanneer we **cirkel.hide()** uitvoeren, weet Python dat de hide-methode specifiek op deze ene cirkel moet worden toegepast.