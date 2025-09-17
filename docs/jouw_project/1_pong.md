---
sidebar_position: 1
---

# Pong
Pong is een klassieker en een perfect project om met `coderius-play` te bouwen!
Laten we eens bekijken wat je hiervoor nodig hebt. Bij elke stap geven we tips hoe je dit kunt aanpakken.

Voor voorbeelden ga je uiteraard naar de [Cheatsheet](../cheatsheet.md).

## De bal
Gebruik een cirkel voor de bal en laat deze bewegen.
Een goede start is `bal.start_physics(obeys_gravity=False, x_speed=200)`.

## De batjes
Gebruik een rechthoek voor een batje. Voeg ook hier fysica aan toe, maar zorg dat het batje niet uit zichzelf beweegt: `batje.start_physics(obeys_gravity=False, can_move=False)`.
Maak er twee, zodat je tegen elkaar kunt spelen.

## Batje bewegen
Gebruik `@play.when_key_pressed` om de batjes omhoog en omlaag te laten bewegen met de pijltjestoetsen.

## Wanneer scoort een speler een punt?
Een slimme truc is om twee onzichtbare muren te maken: één helemaal links en één helemaal rechts. Dit worden de "doelen".
Wanneer de bal zo'n muur raakt, heeft de andere speler een punt. Dit is makkelijker te programmeren dan controleren of de bal de rand van het scherm raakt!

Een speler krijgt een punt zodra de bal de muur van de tegenstander raakt. Deze gebeurtenis moet maar één keer per botsing een punt geven.
Tip: bekijk `5. Gebeurtenissen bij een vorm` om te zien hoe je dit doet.

## Score & Reset
Voor de score gebruik je twee tekstobjecten: één voor de linkerspeler en één voor de rechter.
Vergeet niet `global` te gebruiken in de functie waarin je de score aanpast.

Als de bal een van de muren raakt, moet je een aantal dingen doen:
- Geef de juiste speler een punt.
- Reset de positie van de bal naar het midden.
- Geef de bal weer een beginsnelheid.
- Werk de scoretekst op het scherm bij.

## De bal diagonaal laten bewegen
Om het spel interessanter te maken, kun je de bal ook diagonaal laten bewegen. Naast `x_speed` bestaat er ook `y_speed`. Probeer bijvoorbeeld: `start_physics(obeys_gravity=False, x_speed=60, y_speed=60)`.

Hieronder een voorbeeld:

![pong](pong.png)

## Mogelijke uitbreidingen
- Wanneer heeft iemand gewonnen?
- Kun je een batje door de computer laten besturen?
- Hoe maak je een startmenu?
- Power-ups: een groter batje, een snellere bal, of een tijdelijke onzichtbare bal.
- Een duidelijk scorebord.
- Versnelling: verhoog de balsnelheid na elke keer dat een batje wordt geraakt.
- Speltimer: voeg een timer toe die aftelt tot het einde van het spel.
