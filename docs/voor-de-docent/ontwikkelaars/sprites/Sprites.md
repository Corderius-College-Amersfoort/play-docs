---
sidebar_position: 0
---

Welke sprites zijn er allemaal in coderius-play?

# Lijst

## Tekst

`new_text`

Maak een nieuwe tekst sprite aan. De argumenten zijn:
```python
words : str = "" (tekst)
x : int = 0 (positie)
y : int = 0 (positie) 
font : str = None (lettertype)
font_size : int = 50 (grootte)
color : str ="black" (kleur)
angle : int =0 (0-360)
transparency : int = 100 (0-100)
size : int = 100 (grootte)
```

Voorbeeld:
```python
tekst = play.new_text(words="Hallo", x=0, y=0, font=None, font_size=50, color="black", angle=0, transparency=100, size=100)
```
---

## Box

`new_box`

Maak een nieuwe box sprite aan. De argumenten zijn:
```python
color : str = "black" (kleur)
x : int = 0 (positie)
y : int = 0 (positie)
width : int = 100
height : int = 100
border_color : str = "light blue" (kleur)
border_width : int = 0 (dikte)
angle : int = 0 (0-360)
transparency : int = 100 (0-100)
size : int = 100 (grootte)
```

Voorbeeld:
```python
box = play.new_box(color="black", x=0, y=0, width=100, height=100, border_color="light blue", border_width=0, angle=0, transparency=100, size=100)
```
---

## Cirkel

`new_circle`

Maak een nieuwe cirkel sprite aan. De argumenten zijn:
```python
color : str = "black" (kleur)
x : int = 0 (positie)
y : int = 0 (positie)
radius : int = 100
border_color : str = "light blue" (kleur)
border_width : int = 0 (dikte)
transparency : int = 100 (0-100)
size : int = 100 (grootte)
angle : int = 0 (0-360)
```

Voorbeeld:
```python
cirkel = play.new_circle(color="black", x=0, y=0, radius=100, border_color="light blue", border_width=0, transparency=100, size=100, angle=0)
```
---

## Lijn

`new_line`

Maak een nieuwe lijn sprite aan. De argumenten zijn:
```python
color : str = "black" (kleur)
x : int = 0 (positie)
y : int = 0 (positie)
length : int =  None
angle : int = None (0-360)
thickness : int = 1
x1 : int = 0 (positie)
y1 : int = 0 (positie)
transparency : int = 100 (0-100)
size : int = 100 (grootte)
```

Voorbeeld:
```python
lijn = play.new_line(color="black", x=0, y=0, length=None, angle=None, thickness=1, x1=0, y1=0, transparency=100, size=100)
```
---

## Image

`new_image`

Maak een nieuwe image sprite aan. De argumenten zijn:
```python
image : str = None (afbeelding)
x : int = 0 (positie)
y : int = 0 (positie)
size : int = 100 (grootte)
angle : int = 0 (0-360)
transparency : int = 100 (0-100)
```

Voorbeeld:
```python
image = play.new_image(image=None, x=0, y=0, size=100, angle=0, transparency=100)
```
