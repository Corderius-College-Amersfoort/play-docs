---
sidebar_position: 4
hide_table_of_contents: true
---

# 2. Fysica

Tijd voor beweging!

## Opdracht 2.1

```python 
import play  
 
cirkel = play.new_circle() 
cirkel.start_physics() 
 
play.start_program()
```

a) Run dit codefragment

b) Wat gebeurt er als je dit codefragment draait?

## 2.1 De uitleg
De code hierboven zorgt ervoor dat de bal stuitert. Dit komt door de regel **cirkel.start_physics()** Physics is Engels voor natuurkunde. play is nu aan het proberen om natuurkunde na te doen. 
Laten we de zwaartekracht (in het Engels **gravity**) eens uitzetten en de bal laten bewegen van links naar rechts.
Dit kan met de volgende twee attributen:
- **obeys_gravity**: True --> zwaartekracht wordt nagedaan, False --> geen zwaartekracht
- **x_speed**: hoe hard wil je dat de bal beweegt op de horizontale as? 

```python
import play

cirkel = play.new_circle()
cirkel.start_physics(obeys_gravity=False, x_speed=60)

play.start_program()
```
Als het goed is, zie je bal heen en weer bewegen.

## Opdracht 2.2
Pas het voorbeeld van hiervoven aan voor het programmeren van deze opdrachten.

a) Zet gravity uit laat de bal met snelheid 100 naar links bewegen.  

<details>
<summary>Klik hier voor een tip!</summary>
Positief is naar rechts, negatief is naar links 
</details>

<details>
<summary>Klik hier voor een oplossing!</summary>

```python
import play

cirkel = play.new_circle()
cirkel.start_physics(obeys_gravity=False, x_speed=-100)

play.start_program()
```

</details>

b) Laat de bal schuin naar de rechterboven bewegen (je mag zelf de snelheid bepalen)

<details>
<summary>Klik hier voor een tip!</summary>

De attributen **x_speed** en **y_speed** zijn erg nuttig. 

</details>

<details>
<summary>Klik hier voor een oplossing!</summary>

```python
import play

cirkel = play.new_circle()
cirkel.start_physics(obeys_gravity=False, x_speed=100, y_speed=100)

play.start_program()
```

</details>

## 2.2 Wat kan ik allemaal aanpassen?
Deze drie heb je net geleerd:
- **x_speed**: hoe hard wil je dat de bal beweegt op de horizontale as? 
- **y_speed**: hoe hard wil je dat de bal beweegt op de verticale as? 
- **obeys_gravity**: True --> zwaartekracht wordt nagedaan, False --> geen zwaartekracht

Deze vijf worden later nuttig, maar ze staan er nu al zodat je weet wat er mogelijk is.
- **can_move**: True --> de vorm mag bewegen, False, de vorm staat altijd stil
- **stable**: True --> als iets botst tegen deze vorm, zal deze niet bewegen, False, de vorm zal bewegen bij een botsing.
- **bounciness**: 1.0 vorm kaatst net zo hard terug als dat deze aankwam. 0 --> vorm kaatst niet terug bij botsing
- **mass**: hoe 'zwaar' is je vorm? Dit kan snel ingewikkeld worden. Maar je kan je voorstellen dat een botsing anders is tussen twee vormen die even zwaar zijn in plaats van als vormen verschillend gewicht hebben.
- **friction**: 0 --> geen frictie (energie blijft behouden).

### Opdracht 2.3 Een zwevend platform
Maak een platform zoals bij Super Mario.
Deze mag door Mario niet bewogen worden, en het moet ook blijven zweven. 

```python
import play

platform = play.new_box()
platform.start_physics()

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

Welke attributen wil je veranderen aan **play.new_box()**?
Welke attributen wil je veranderen aan **start_physics()**?

</details> 

<details>
    <summary>Klik hier voor een oplossing</summary>

```python
import play

platform = play.new_box(width=200, height=50)
platform.start_physics(obeys_gravity=False, can_move=False)

play.start_program()
```
</details>

### Opdracht 2.2 Eindeloos bewegende bal
Maak een cirkel die eindeloos beweegt, zowel horizontaal als verticaal.
Maar de zwaartekracht heeft geen invloed op de cirkel!

```python
import play

bal = play.new_circle()
bal.start_physics()

play.start_program()
```

<details>
    <summary>Klik hier voor een tip!</summary>

Bij horizontaal is het slim om te kijken naar **x_speed** en bij verticaal is het nuttig om te kijken naar ....

</details> 

<details>
    <summary>Klik hier voor een oplossing</summary>

```python
import play

bal = play.new_circle()
bal.start_physics(x_speed=100, y_speed=100, obeys_gravity=False)

play.start_program()
```
</details>




