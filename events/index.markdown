---
layout: page
title: Events
banner: /assets/images/news-events-banner.jpg
banner_position: center 30%
banner_alt: "Great blue heron holding an amphiuma crosswise in its bill above the lake's rippled surface"
banner_credit: "\"Caught\" by John K. Guice"
---

{% assign today = site.time | date: "%Y-%m-%d" %}
{% assign upcoming = site.events | where_exp: "e", "e.event_date >= today" | sort: "event_date" %}
{% assign past = site.events | where_exp: "e", "e.event_date < today" | sort: "event_date" | reverse %}

{% if upcoming.size > 0 %}
## Upcoming

<ul class="event-list">
{% for event in upcoming %}
  <li class="event-item">
    <div class="event-date">{{ event.event_date | date: "%b %-d, %Y" }}</div>
    <div class="event-detail">
      <h3 class="event-title"><a href="{{ event.url | relative_url }}">{{ event.title | smartify }}</a></h3>
      {% if event.event_location %}<p class="event-where">{% include venue_name.html location=event.event_location %}</p>{% endif %}
      {% if event.blurb %}<p class="event-blurb">{{ event.blurb | smartify }}</p>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>
{% endif %}

{% if past.size > 0 %}
## Past

<ul class="event-list">
{% for event in past %}
  <li class="event-item">
    <div class="event-date">{{ event.event_date | date: "%b %-d, %Y" }}</div>
    <div class="event-detail">
      <h3 class="event-title"><a href="{{ event.url | relative_url }}">{{ event.title | smartify }}</a></h3>
      {% if event.event_location %}<p class="event-where">{% include venue_name.html location=event.event_location %}</p>{% endif %}
      {% if event.blurb %}<p class="event-blurb">{{ event.blurb | smartify }}</p>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>
{% endif %}
