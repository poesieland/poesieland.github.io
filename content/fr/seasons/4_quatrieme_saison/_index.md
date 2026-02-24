+++
title = "Quatrième Saison : Rêves"
weight = 4
type = "seasonIndex"
description = """
Quelques mois riches d'un essor romantique et passionné, la célébration de l'automne, avec la présence de l'été, la lune et la faune.

De mai à septembre 1997"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_4.md" true %}}

---
## Catégories
{{< chartjs id="season4Pie" width="75%" jsFile="../../charts/season-4/categories-pie.js" />}}
## Métrique
{{< chartjs id="season4VerseLengthBar" width="75%" jsFile="../../charts/season-4/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season4PoemIntervalBar" width="75%" jsFile="../../charts/season-4/poem-interval-bar.js" />}}
