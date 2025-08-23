---
sidebar_position: 1
hide_table_of_contents: true
---

# 6.1 Wachten met time.sleep
Soms wil je een pauze in je spel. 99% van de mensen grijpt dan naar **time.sleep**.
Het probleem is dat **time.sleep** het hele spel op pauze zet! Dat werkt dus niet. Op naar iets dat wel werkt!

Je hebt nu twee opties:
- je bent benieuwd waarom **time.sleep** niet werkt --> ga door met deze pagina
- je wilt weten wat wel werkt --> ga naar de volgende pagina

We beginnen met een bewegende bal.

```python 
import play

ball = play.new_circle(color='black')
ball.start_physics(obeys_gravity=False, x_speed=10)

play.start_program()
```

## 6.1.1 Wachten met time.sleep
We gaan nu proberen om de bal tijdelijk sneller te laten bewegen bij een muisklik.
Je meest logische gedachte is misschien om **time.sleep** te gebruiken:

```python 
import play
import time

bal = play.new_circle(color='black')
bal.start_physics(obeys_gravity=False, x_speed=10)

@play.when_mouse_clicked
def tijdelijk_sneller():
    bal.physics.x_speed = 1000
    time.sleep(1)
    bal.physics.x_speed = 10

play.start_program()
```

Gaat de bal sneller bewegen? Wat gebeurt er eigenlijk?

```python
@play.when_mouse_clicked
```
Wanneer de muis geklikt wordt:
- **def tijdelijk_sneller():** voeren we deze functie uit
- **bal.physics.x_speed = 1000** we geven de bal een hoge snelheid
- **time.sleep(1)** we wachten een seconde
- **bal.physics.x_speed = 10** we geven de bal een lage snelheid

Het probleem is dat **time.sleep** het hele spel op pauze zet! Dat werkt dus niet. Op naar iets dat wel werkt!






