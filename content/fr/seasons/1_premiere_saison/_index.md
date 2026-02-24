+++
title = "Première Saison : Premiers élans"
description = """
Mes premiers poèmes suivant strictement la versification néoclassique, apprise courant 1995, mais aussi des poèmes plus anciens et remaniés.

Ce nouveau "moule" qu'est la versification exacerbe l'écriture pour laisser libre cours à mes sentiments adolescents : réflexions sur mon enfance, nombreux sujets de révolte, rêves d'amour platonique et passionné, rêveries dans des paysages marins ou campagnards.

De 1994 à septembre 1996"""
weight = 1
type = "seasonIndex"
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_1.md" true %}}

---
## Catégories
{{< chartjs id="season1Pie" width="75%" jsFile="../../charts/season-1/categories-pie.js" />}}
## Métrique
{{< chartjs id="season1VerseLengthBar" width="75%" jsFile="../../charts/season-1/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season1PoemIntervalBar" width="75%" jsFile="../../charts/season-1/poem-interval-bar.js" />}}
