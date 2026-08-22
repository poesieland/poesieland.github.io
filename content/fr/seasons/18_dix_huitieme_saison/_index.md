+++
title = "Dix-huitième Saison : Retour aux sources"
weight = 18
type = "seasonIndex"
description = """
Retravailler en profondeur sur ce site web et relire tous mes écrits a réveillé l'envie.

Toujours tellement à raconter, de façon plus analytique, en se laissant porter par l'hiver et l'automne, le climat dérangé dont je suis témoin, la gratitude de la création, et des portraits.

D'octobre 2023 à janvier 2024"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_18.md" true %}}

---
## Catégories
{{< chartjs id="season18Pie" width="75%" jsFile="../../charts/season-18/categories-pie.js" />}}
## Métrique
{{< chartjs id="season18VerseLengthBar" width="75%" jsFile="../../charts/season-18/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season18PoemIntervalBar" width="75%" jsFile="../../charts/season-18/poem-interval-bar.js" />}}
