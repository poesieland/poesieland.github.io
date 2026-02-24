+++
title = "Vingt-huitième Saison : Les mots sur le chemin"
weight = 28
type = "seasonIndex"
description = """
L'automne en vedette... le temps. Une place pour l'apprentissage, le romantisme, la faune.

De juillet à septembre 2025"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_28.md" true %}}

---
## Catégories
{{< chartjs id="season28Pie" width="75%" jsFile="../../charts/season-28/categories-pie.js" />}}
## Métrique
{{< chartjs id="season28VerseLengthBar" width="75%" jsFile="../../charts/season-28/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season28PoemIntervalBar" width="75%" jsFile="../../charts/season-28/poem-interval-bar.js" />}}
