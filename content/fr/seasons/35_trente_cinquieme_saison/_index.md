+++
title = "Trente-cinquième Saison : Un jour à la fois"
weight = 35
type = "seasonIndex"
description = """
Tout en écrivant les poèmes de la trente-quatrième Saison, je ressentais une urgence de vivre chaque jour, sans penser au lendemain.

A partir d'août 2026"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_35.md" true %}}

---
## Catégories
{{< chartjs id="season35Pie" width="75%" jsFile="../../charts/season-35/categories-pie.js" />}}
## Métrique
{{< chartjs id="season35VerseLengthBar" width="75%" jsFile="../../charts/season-35/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season35PoemIntervalBar" width="75%" jsFile="../../charts/season-35/poem-interval-bar.js" />}}
