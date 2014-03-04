---
layout: default
title: Home
---

Hello.
------

My name's Dan.  Nice to meet you.

I do internet and developery things.  Check out my [resume](resume) or
[projects](projects) page for more, or get in touch.

Around the Web
--------------

<ul id="around-the-web">
  <li><a href="http://facebook.com/danfinnie"><img alt="Facebook" src="/public/images/facebook.png" /></a></li>
  <li><a href="http://www.linkedin.com/in/danfinnie"><img alt="LinkedIn" src="/public/images/linkedin.png" /></a></li>
  <li><a href="https://github.com/danfinnie"><img alt="GitHub" src="/public/images/github.png" /></a></li>
  <li><a id="email" href="mailto:dan@danfinnie.com">Email</a></li>
</ul>

{% comment %}
<div class="posts">
  {% for post in paginator.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <span class="post-date">{{ post.date | date_to_string }}</span>

    {{ post.content }}
  </div>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="/page{{paginator.next_page}}">Older</a>
  {% else %}
    <span class="pagination-item older">Older</span>
  {% endif %}
  {% if paginator.previous_page %}
    {% if paginator.page == 2 %}
      <a class="pagination-item newer" href="/">Newer</a>
    {% else %}
      <a class="pagination-item newer" href="/page{{paginator.previous_page}}">Newer</a>
    {% endif %}
  {% else %}
    <span class="pagination-item newer">Newer</span>
  {% endif %}
</div>
{% endcomment %}
