---
sidebar_position: 0
---

Welke evenementen zijn er allemaal in coderius-play?

Er zijn ook nog verschillende subcategorieën van evenementen. Deze zijn:
* [Muis](./Muis.md)
* [Controllers](./Controllers.md)


# Lijst

### Application workflow

``when_program_starts``

Wanneer het programma start, wordt de functie ``when_program_starts`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer het programma start.

Voorbeeld:
```python
@play.when_program_starts
def start():
	print("Het programma is gestart")
```
---
``repeat_forever``

Wanneer het programma start, wordt de functie ``repeat_forever`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer het programma start.

Voorbeeld:
```python
@play.repeat_forever
def repeat():
	print("Dit wordt voor altijd herhaald")
```

### Keyboard

``when_key_pressed``

Wanneer een toets wordt ingedrukt, wordt de functie ``when_key_pressed`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer een toets wordt ingedrukt.

Voorbeeld:
```python
@play.when_key_pressed("a")
def key_a():
	print("De a-toets is ingedrukt")
```
---
``when_any_key_pressed``

Wanneer een toets wordt ingedrukt, wordt de functie ``when_any_key_pressed`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer een toets wordt ingedrukt.

Voorbeeld:
```python
@play.when_any_key_pressed
def key_pressed(key):
	print("Een toets is ingedrukt")
```
---
``when_key_released``

Wanneer een toets wordt losgelaten, wordt de functie ``when_key_released`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer een toets wordt losgelaten.

Voorbeeld:
```python
@play.when_key_released("a")
def key_a():
	print("De a-toets is losgelaten")
```
---
``when_any_key_released``

Wanneer een toets wordt losgelaten, wordt de functie ``when_any_key_released`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer een toets wordt losgelaten.

Voorbeeld:
```python
@play.when_any_key_released
def key_released(key):
	print("Een toets is losgelaten")
```

### Muis

``when_sprite_clicked``

Wanneer een sprite wordt aangeklikt, wordt de functie ``when_sprite_clicked`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer een sprite wordt aangeklikt.

Voorbeeld:
```python
box = play.new_box(color="blue")

@play.when_sprite_clicked(box)
def sprite_clicked(sprite):
	print("De sprite is aangeklikt")
```
Of
```python
@box.when_clicked
def sprite_clicked(sprite):
	print("De sprite is aangeklikt")
```
---
``when_mouse_clicked``

Wanneer de muis wordt aangeklikt, wordt de functie ``when_mouse_clicked`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer de muis wordt aangeklikt.

Voorbeeld:
```python
@play.when_mouse_clicked
def mouse_clicked():
	print("De muis is aangeklikt")
```
---
``when_click_released``

Wanneer de muis wordt losgelaten, wordt de functie ``when_click_released`` aangeroepen. Hierin kun je code plaatsen die je wilt uitvoeren wanneer de muis wordt losgelaten.

Voorbeeld:
```python
@play.when_click_released
def click_released():
	print("De muis is losgelaten")
```


