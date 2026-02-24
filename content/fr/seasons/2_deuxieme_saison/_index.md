+++
title = "Deuxième Saison : Tableaux"
weight = 2
type = "seasonIndex"
description = """
Par petites touches, l'inspiration guidée par l'automne puis l'hiver, l'envie de dresser quelques portraits, également l'amitié, le crépuscule et la flore.

De septembre à décembre 1996"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_2.md" true %}}

---
## Catégories
{{< chartjs id="season2Pie" width="75%" jsFile="../../charts/season-2/categories-pie.js" />}}
## Métrique
{{< chartjs id="season2VerseLengthBar" width="75%" jsFile="../../charts/season-2/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season2PoemIntervalBar" width="75%" jsFile="../../charts/season-2/poem-interval-bar.js" />}}
