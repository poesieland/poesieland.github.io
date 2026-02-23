+++
title = "Dix-neuvième Saison : Destination bonheur"
weight = 19
type = "seasonIndex"
description = """
En gros plan : le printemps, le temps... un peu de climat.

De janvier à avril 2024"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_19.md" true %}}

---
## Catégories
{{< chartjs id="season19Pie" width="75%" jsFile="../../charts/season-19/categories-pie.js" />}}
## Métrique
{{< chartjs id="season19VerseLengthBar" width="75%" jsFile="../../charts/season-19/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season19PoemIntervalBar" width="75%" jsFile="../../charts/season-19/poem-interval-bar.js" />}}
