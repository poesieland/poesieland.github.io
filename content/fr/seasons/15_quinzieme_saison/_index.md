+++
title = "Quinzième Saison : De place en place"
weight = 15
type = "seasonIndex"
description = """
De ruelle en avenue, de cabane en palace, de lieux rêvés aux lieux vécus, comme mon inspiration flâne à travers l'être, la ville, le temps .Les poèmes qui la composent sont à présent dans l'ordre chronologique.

D'avril à décembre 2001"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_15.md" true %}}

---
## Catégories
{{< chartjs id="season15Pie" width="75%" jsFile="../../charts/season-15/categories-pie.js" />}}
## Métrique
{{< chartjs id="season15VerseLengthBar" width="75%" jsFile="../../charts/season-15/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season15PoemIntervalBar" width="75%" jsFile="../../charts/season-15/poem-interval-bar.js" />}}
