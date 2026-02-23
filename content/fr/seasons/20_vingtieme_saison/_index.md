+++
title = "Vingtième Saison : Le temps qui nous reste"
weight = 20
type = "seasonIndex"
description = """
Climat, été, portraits, crépuscule et eau douce sont les thèmes de cette saison.

D'avril à juin 2024"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_20.md" true %}}

---
## Catégories
{{< chartjs id="season20Pie" width="75%" jsFile="../../charts/season-20/categories-pie.js" />}}
## Métrique
{{< chartjs id="season20VerseLengthBar" width="75%" jsFile="../../charts/season-20/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season20PoemIntervalBar" width="75%" jsFile="../../charts/season-20/poem-interval-bar.js" />}}
