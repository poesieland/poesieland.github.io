+++
title = "Vingt-quatrième Saison : Les mots respirent"
weight = 24
type = "seasonIndex"
description = """
L'hiver, le ciel, le temps.

De décembre 2024 à février 2025"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_24.md" true %}}

---
## Catégories
{{< chartjs id="season24Pie" width="75%" jsFile="../../charts/season-24/categories-pie.js" />}}
## Métrique
{{< chartjs id="season24VerseLengthBar" width="75%" jsFile="../../charts/season-24/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season24PoemIntervalBar" width="75%" jsFile="../../charts/season-24/poem-interval-bar.js" />}}
