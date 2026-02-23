+++
title = "Vingt-neuvième Saison : Kaléidoscopes"
weight = 29
type = "seasonIndex"
description = """
La saison-phare, l'automne... Aussi le temps, la faune, l'aube, le crépuscule. 

De septembre à novembre 2025."""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_29.md" true %}}

---
## Catégories
{{< chartjs id="season29Pie" width="75%" jsFile="../../charts/season-29/categories-pie.js" />}}
## Métrique
{{< chartjs id="season29VerseLengthBar" width="75%" jsFile="../../charts/season-29/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season29PoemIntervalBar" width="75%" jsFile="../../charts/season-29/poem-interval-bar.js" />}}
