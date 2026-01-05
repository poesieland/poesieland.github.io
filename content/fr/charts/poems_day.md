+++
title = "Quels jours de l'année m'inspirent ?"
weight = 3
+++

## Au jour le jour

Ces statistiques incluent mes {{% include "/content/common/poem_count_en.md" %}} poèmes en anglais.

{{< chartjs id="poemDayRadar" width="90%" jsFile="../general/poems-day-radar.js" />}}

## Des jours avec et des jours sans

Ces jours de l'année où ma plume est restée au repos :

{{% include "../includes/days_without_creation.md" true %}}

## Du lundi au dimanche

{{< chartjs id="poemDayOfWeekPie" width="60%" jsFile="../general/poem-dayofweek-pie.js" />}}

## Jours exubérants

Et les jours où j'écris plus d'un poème ?

{{< chartjs id="poemIntensityPie" width="60%" jsFile="../general/poem-intensity-pie.js" />}}

{{% include "../includes/most_intense_days.md" true %}}

## Des jours entre

Et dans le temps, quel est l'intervalle entre deux poèmes ?

{{< chartjs id="poemIntervalBar" width="100%" jsFile="../general/poem-interval-bar.js" />}}

{{% include "../includes/longest_intervals.md" true %}}

## Des jours sans cesser

Et dans le temps, les séries sont-elles longues et fréquentes ?

{{< chartjs id="poemSeriesBar" width="100%" jsFile="../general/poem-series-bar.js" />}}

{{% include "../includes/longest_series.md" true %}}