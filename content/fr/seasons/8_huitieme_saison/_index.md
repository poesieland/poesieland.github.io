+++
title = "Huitième Saison : Reflets perdus"
weight = 8
type = "seasonIndex"
description = """
Tant de passion pour signer la fin d'un amour, beaucoup de poèmes de cette Saison sont allés clore mon recueil... Toujours l'exploration de l'être, de la création, de l'art musical pour exprimer mes doutes.

De juillet à septembre 1998"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_8.md" true %}}

---
## Catégories
{{< chartjs id="season8Pie" width="75%" jsFile="../../charts/season-8/categories-pie.js" />}}
## Métrique
{{< chartjs id="season8VerseLengthBar" width="75%" jsFile="../../charts/season-8/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season8PoemIntervalBar" width="75%" jsFile="../../charts/season-8/poem-interval-bar.js" />}}
