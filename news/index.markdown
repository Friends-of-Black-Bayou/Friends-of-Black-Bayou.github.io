---
layout: page
title: News
banner: /assets/images/news-events-banner.jpg
banner_position: center 30%
banner_alt: "Great blue heron holding an amphiuma crosswise in its bill above the lake's rippled surface"
banner_credit: "\"Caught\" by John K. Guice"
---

<ul class="post-list">
{% for post in site.posts %}
<li class="post-list-item">
<a class="post-list-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
<p class="post-list-date">{{ post.date | date: "%B %-d, %Y" }}</p>
<div class="post-list-excerpt">{{ post.excerpt }}</div>
</li>
{% endfor %}
</ul>
