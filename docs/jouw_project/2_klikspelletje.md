---
sidebar_position: 2
---

# Klikspelletje
Een compleet ander genre is dat de gebruiker moet klikken!

```python
import play
from random import randint

bal = play.new_circle(color='black', radius=20)
punten = 0
tekst = play.new_text(words="Punten " + str(punten))

@play.repeat_forever
async def beweeg():
    await play.timer(seconds=1)
    bal.x = randint(-400, 400)
    bal.y = randint(-300, 300)

@bal.when_clicked
def update_score():
    global punten 
    punten = punten + 1
    tekst.words = "Punten " + str(punten)

play.start_program()
```

Hoe zou jij dit uit kunnen breiden?







