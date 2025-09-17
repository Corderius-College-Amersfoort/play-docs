---
sidebar_position: 0
---

Welke random functies zijn er allemaal in coderius-play?

# Lijst

`random_number`

Genereer een willekeurig getal tussen twee getallen. De argumenten zijn:
```python
start : int = 0 (begin)
end : int = 100 (eind)
```

Voorbeeld:
```python
getal = play.random_number(start=0, end=100)
```
---

`random_color`

Genereer een willekeurige kleur. Er zijn geen argumenten.

Voorbeeld:
```python
kleur = play.random_color()
```
---

`random_position`

Genereer een willekeurige positie. De argumenten zijn:
```python
x_start : int = 0 (begin x)
x_end : int = 100 (eind x)
y_start : int = 0 (begin y)
y_end : int = 100 (eind y)
```
