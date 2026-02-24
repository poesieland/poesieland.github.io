+++
title = "Cinquième Saison : Espaces de vie"
weight = 5
type = "seasonIndex"
description = """
Multiples bonheurs : passion, apprentissage, amour platonique, être... mais aussi temps, être, flore, faune et automne.

De septembre 1997 à mars 1998"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_5.md" true %}}

---
## Catégories
{{< chartjs id="season5Pie" width="75%" jsFile="../../charts/season-5/categories-pie.js" />}}
## Métrique
{{< chartjs id="season5VerseLengthBar" width="75%" jsFile="../../charts/season-5/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season5PoemIntervalBar" width="75%" jsFile="../../charts/season-5/poem-interval-bar.js" />}}
