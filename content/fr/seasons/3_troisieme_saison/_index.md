+++
title = "Troisième Saison : Vivace"
weight = 3
type = "seasonIndex"
description = """
Ces quelques mois presque exaltés philosophiquement, avant de connaître d'autres bonheurs. Sur les thèmes du temps, du printemps, mais aussi un peu de la nuit, l'être, la lune, l'amour platonique et les portraits.

De janvier à mai 1997"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_3.md" true %}}

---
## Catégories
{{< chartjs id="season3Pie" width="75%" jsFile="../../charts/season-3/categories-pie.js" />}}
## Métrique
{{< chartjs id="season3VerseLengthBar" width="75%" jsFile="../../charts/season-3/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season3PoemIntervalBar" width="75%" jsFile="../../charts/season-3/poem-interval-bar.js" />}}
