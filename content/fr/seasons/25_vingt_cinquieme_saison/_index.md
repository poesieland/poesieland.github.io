+++
title = "Vingt-cinquième Saison : Coeur et âme"
weight = 25
type = "seasonIndex"
description = """
Quelques mois printaniers d'inspiration assez équilibrée et variée, avec le retour d'ombres et lumières... Thèmes principaux : printemps, crépuscule, angoisse, temps, apprentissage, flore.

De février à avril 2025"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_25.md" true %}}

---
## Catégories
{{< chartjs id="season25Pie" width="75%" jsFile="../../charts/season-25/categories-pie.js" />}}
## Métrique
{{< chartjs id="season25VerseLengthBar" width="75%" jsFile="../../charts/season-25/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season25PoemIntervalBar" width="75%" jsFile="../../charts/season-25/poem-interval-bar.js" />}}
