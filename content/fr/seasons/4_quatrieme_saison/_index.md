+++
title = "Quatrième Saison : Rêves"
weight = 4
type = "seasonIndex"
description = """
Une Saison riche d'un essor romantique et passionné, célébration de l'automne et également de la lune. 

De mai à septembre 1997"""
+++

{{% param "description" %}}

---
{{% children  %}}

{{% include "./includes/season_4.md" true %}}

---
## Catégories
{{< chartjs id="season4Pie" width="75%" jsFile="../../charts/season-4/categories-pie.js" />}}
## Métrique
{{< chartjs id="season4VerseLengthBar" width="75%" jsFile="../../charts/season-4/poems-verse-length-bar.js" />}}
## Intervalle
{{< chartjs id="season4PoemIntervalBar" width="75%" jsFile="../../charts/season-4/poem-interval-bar.js" />}}
