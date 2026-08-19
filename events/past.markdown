---
layout: page
title: Past Events
permalink: /events/past/
description: "A historical record of events held at Black Bayou Lake National Wildlife Refuge, 2012 to 2018."
---

A record of events held at the refuge between 2012 and 2018, carried over from the
Friends of Black Bayou archive. Entries are preserved as they were written; many are
brief log lines rather than full descriptions. Where a fuller write-up exists, it is
linked.

{% assign groups = site.data.past_events | group_by_exp: "e", "e.date | date: '%Y'" | sort: "name" | reverse %}
{% for g in groups %}
## {{ g.name }}

<ul class="event-list">
{% for e in g.items %}
  <li class="event-item">
    <div class="event-date">{{ e.date | date: "%b %-d" }}</div>
    <div class="event-detail">
      <p class="event-blurb">{{ e.text | smartify }}</p>
      {% for u in e.see %}<a class="more-link" href="{{ u | relative_url }}">Read more →</a>{% endfor %}
    </div>
  </li>
{% endfor %}
</ul>
{% endfor %}
