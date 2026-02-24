+++
title = "Neuvième Saison : Souffles"
weight = 9
type = "seasonIndex"
description = """
A la recherche de nouvelles inspirations, l'amour prenant bien moins de place. Toujours la création, l'être, l'art musical omniprésents mais une apparition de l'espoir.

De septembre à décembre 1998"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_9.md" true %}}

---
## Catégories
{{< chartjs id="season9Pie" width="75%" jsFile="../../charts/season-9/categories-pie.js" />}}
## Métrique
{{< chartjs id="season9VerseLengthBar" width="75%" jsFile="../../charts/season-9/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season9PoemIntervalBar" width="75%" jsFile="../../charts/season-9/poem-interval-bar.js" />}}
