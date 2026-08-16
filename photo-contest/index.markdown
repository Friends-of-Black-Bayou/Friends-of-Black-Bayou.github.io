---
layout: page
title: Photo Contest
banner: /assets/images/photo_contest-banner.jpg
banner_position: center 75%
banner_credit: "“Lucky Lightning” by Michael Gammon, Honorable Mention 2025"
description: "The annual Friends of Black Bayou photo contest, and an archive of past winning photographs."
---

{% assign contest = site.data.photo_contest %}

Founded in 2004 by Charles Heck, Sr., the Friends of Black Bayou photo contest
runs every year, and its aim has never changed: 
to encourage protection of wildlife and conservation of natural resources through photographic skills and an appreciation of natural settings on the Refuge. 
As always, there are no submission fees for your photos, so get your phones and cameras out and capture nature at its best.

## Enter the {{ contest.year }} Contest
{% if contest.open %} 
{% include photo_contest_panel.html %}
{% else %} 
Entries for the {{ contest.year }} contest are closed. 
Winners will be announced at [Fall Celebration](/fall-celebration)
{% endif %}

## Past Winners

<div class="card-grid">
{% for item in site.data.photo_contest_years %}
<a class="card" href="{{ item.url | relative_url }}">
<div class="card-image" style="--card-image: url('{{ item.image | relative_url }}');"></div>
<div class="card-body">
<h3 class="card-title">{{ item.year }} Winning Photos</h3>
<p class="card-blurb">{{ item.blurb }}</p>
<span class="card-link">View the gallery →</span>
</div>
</a>
{% endfor %}
</div>
