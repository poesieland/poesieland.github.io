+++
title = "Vingt-deuxième Saison : Au temps le dire"
weight = 22
type = "seasonIndex"
description = """
L'automne, l'angoisse, le ciel, ainsi que le temps et l'hiver.

De septembre à novembre 2024"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_22.md" true %}}

---
## Catégories
{{< chartjs id="season22Pie" width="75%" jsFile="../../charts/season-22/categories-pie.js" />}}
## Métrique
{{< chartjs id="season22VerseLengthBar" width="75%" jsFile="../../charts/season-22/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season22PoemIntervalBar" width="75%" jsFile="../../charts/season-22/poem-interval-bar.js" />}}
