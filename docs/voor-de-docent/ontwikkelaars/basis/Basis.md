---
sidebar_position: 0
---

Welke random functies zijn er allemaal in coderius-play?

# Lijst

## Applicatie workflow

`start_program`

Met deze functie kan je het programma starten. Er zijn geen argumenten.

Voorbeeld:
```python
play.start_program()
```
---

`stop_program`

Met deze functie kan je het programma stoppen. Er zijn geen argumenten.

Voorbeeld:
```python
play.stop_program()
```
---

`animate`

Met deze functie kan je wachten tot het volgende frame voor bijvoorbeeld animaties. Er zijn geen argumenten.

Voorbeeld:
```python
await play.animate()
```
---

`set_backdrop`

Met deze functie kan je de achtergrond van het scherm instellen. De argumenten zijn:
```python
color_or_image : str = "black" (kleur of afbeelding)
```

Voorbeeld:
```python
play.set_backdrop(color_or_image="black")
```
Ook kan je een afbeelding gebruiken:
```python
play.set_backdrop(color_or_image="afbeelding.png")
```
---

`timer`

Met deze functie kan je een timer instellen. De argumenten zijn:
```python
seconds : float = 1.0 (seconden)
```

Voorbeeld:
```python
await play.timer(seconds=1.0)
```
---

`key_is_pressed`

Met deze functie kan je controleren of een toets is ingedrukt. De argumenten zijn:
```python
key : str (toets)
```

Voorbeeld:
```python
if play.key_is_pressed("a"):
	print("De a-toets is ingedrukt")
```



