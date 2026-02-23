+++
title = "Trentième Saison : Tout fait sens"
weight = 30
type = "seasonIndex"
description = """
La saison en vedette : l'hiver. Aussi la faune, les chats occupent mon coeur. Et une petite place pour la neige.

De novembre 2025 à janvier 2026."""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_30.md" true %}}

---
## Catégories
{{< chartjs id="season30Pie" width="75%" jsFile="../../charts/season-30/categories-pie.js" />}}
## Métrique
{{< chartjs id="season30VerseLengthBar" width="75%" jsFile="../../charts/season-30/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season30PoemIntervalBar" width="75%" jsFile="../../charts/season-30/poem-interval-bar.js" />}}
