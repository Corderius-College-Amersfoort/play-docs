---
sidebar_position: 8
---

# 1.7 Informatie opvragen over een vorm

Wanneer je een spel programmeert, gaan dingen vaak niet zoals je verwacht. Om problemen op te lossen (dit noemen we **debuggen**), moet je informatie over je vormen kunnen opvragen, zoals hun positie of kleur. Dit doe je meestal via de `VARIABELE.ATTRIBUUT` notatie.

In het onderstaande voorbeeld is `mijn_cirkel` de variabele en `color` het attribuut.

```python
import play 

mijn_cirkel = play.new_circle()

print(mijn_cirkel.color)

play.start_program()

```
Als het goed is, zie je in je **shell** of **console** nu het volgende staan: 

```
pygame-ce 2.5.3 (SDL 2.30.12, Python 3.10.11)
black
```
We hebben dus opgevraagd dat **mijn_cirkel.color** de waarde **black** heeft.
Naast **color** kun je alle attributen opvragen van een vorm, bijvoorbeeld **x**, **y**, etc.

## Opdracht 1.7.a

Bekijk het voorbeeld hieronder. 
- maak een cirkel en zet die op x-positie 50 en y-positie -100
- vraag dan de x- en y-posities op door **print** te gebruik bij de start van het programma


```python
import play  

mijn_cirkel = play.new_circle() 

mijn_cirkel.color = 'blue' 

@play.when_program_starts
def start():
    print('print hieronder de x- en y-positie')

play.start_program() 
```

<details>
    <summary>Klik hier voor de oplossing!</summary>

```python
import play  

mijn_cirkel = play.new_circle() 

mijn_cirkel.color = 'blue' 
mijn_cirkel.x = 50
mijn_cirkel.u = -100

@play.when_program_starts
def start():
    print('print hieronder de x- en y-positie')
    print(mijn_cirkel.x)
    print(mijn_cirkel.y)

play.start_program() 
```

</details>