+++
title = "Vingt-et-unième Saison : C'est vivre qui compte"
weight = 21
type = "seasonIndex"
description = """
Une vraie fascination pour le soir. Aussi d'autres sujets : l'été, le temps, le ciel, l'automne, la faune.

De juin à septembre 2024"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_21.md" true %}}

---
## Catégories
{{< chartjs id="season21Pie" width="75%" jsFile="../../charts/season-21/categories-pie.js" />}}
## Métrique
{{< chartjs id="season21VerseLengthBar" width="75%" jsFile="../../charts/season-21/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season21PoemIntervalBar" width="75%" jsFile="../../charts/season-21/poem-interval-bar.js" />}}
