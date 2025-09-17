---
sidebar_position: 3
hide_table_of_contents: true
---

# 6.2 Wachten met `async` en `await`

Ok, `time.sleep()` werkte niet. We hebben een manier nodig om een functie te laten wachten, terwijl de rest van het spel gewoon doorgaat. Hiervoor gebruiken we `async` en `await`.

```python 
import play

ball = play.new_circle(color='black')
ball.start_physics(obeys_gravity=False, x_speed=10)

@play.when_mouse_clicked
async def tijdelijk_sneller():
    ball.physics.x_speed = 100
    await play.timer(seconds=1)
	ball.physics.x_speed = 10

play.start_program()
```

Hoe werkt dit?

```python
async def tijdelijk_sneller():
```
We hebben **async** voor **def** gezet. Dit maakt het een asynchrone functie, oftewel alles kan doorgaan en deze functie kan even wachten tot deze weer meedoet met de rest.

```python
    ball.physics.x_speed = 100
```
We zetten de x_speed van de bal op 100 pixels.

```python
    await play.timer(seconds=1)
```
We wachten 1 seconde. 

```python
	ball.physics.x_speed = 10
```
We zetten de x_speed weer op 10 pixels.
