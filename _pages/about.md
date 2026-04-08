---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-fw fa-user"></i> About Me

Write your personal introduction here. This template is designed for researchers and students. You can describe your current role, research interests, and academic background.

<div class="tag-cloud">
  <span class="research-tag" style="border-left: 3px solid #00369f;">🚀 Research Area 1</span>
  <span class="research-tag" style="border-left: 3px solid #4a90e2;">🔍 Research Area 2</span>
  <span class="research-tag" style="border-left: 3px solid #63b3ed;">🤖 Research Area 3</span>
</div>

</div>

<span class='anchor' id='news'></span>
<div class="section-card card-news" markdown="1">

# <i class="fas fa-fw fa-fire"></i> News

<ul class="news-list">
  <li>
    <span class="news-type type-info">Update</span>
    <span class="news-date">YYYY.MM</span>
    <div class="news-content">Your news content goes here. For example: "Personal academic homepage launched!"</div>
  </li>
  <li>
    <span class="news-type type-edu">Academic</span>
    <span class="news-date">YYYY.MM</span>
    <div class="news-content">Another news item. For example: "Started my journey at Your University!"</div>
  </li>
</ul>

</div>

<span class='anchor' id='publications'></span>
<div class="section-card card-pub" markdown="1">

# <i class="fas fa-fw fa-book"></i> Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Status</div>
      <img src='images/favicon.ico' loading="lazy" alt="publication-thumb" style="width: 100%; height: 100%; object-fit: contain; padding: 20px;">
    </div>
  </div>
  <div class='paper-box-text'>
    <span class="paper-label label-preprint">Label</span>
    <a href="#" class="paper-title">Your Publication Title: A Modern Template for Academic Portfolios</a>

    <p class="paper-authors"><strong>Your Name</strong>, Co-authors</p>
    
    <p class="paper-conf">Conference or Journal Name, YYYY</p>

    <div class="paper-links">
      <a href="#"><i class="fab fa-github"></i> Project</a>
      <a href="#"><i class="fas fa-file-pdf"></i> Paper</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('paper1-bib')"><i class="fas fa-quote-right"></i> Cite</a>
      <a href="#"><i class="fas fa-code"></i> Code</a>
      <span class='show_paper_citations' data=''></span>
    </div>

    <!-- BibTeX Popup -->
    <div id="paper1-bib" style="display: none; background: #f8f9fa; border: 1px solid #e1e4e8; border-radius: 8px; padding: 15px; margin-top: 15px; position: relative;">
      <pre id="paper1-bib-text" style="margin: 0; font-size: 0.85em; white-space: pre-wrap;">@article{yourname2025template,
  title={Your Publication Title},
  author={Your Name and Others},
  journal={Academic Venue},
  year={2025}
}</pre>
      <button onclick="copyBibtex('paper1-bib')" class="btn btn--small" style="position: absolute; top: 10px; right: 10px; font-size: 0.75em; background: #fff; border: 1px solid #ddd;"><i class="fas fa-copy"></i> Copy</button>
    </div>

    <ul style="margin-top: 15px;">
      <li>Add a short description or a one-sentence summary of your work here.</li>
    </ul>
  </div>
</div>

</div>

<span class='anchor' id='honors-and-awards'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-fw fa-trophy"></i> Honors and Awards

<div class="award-item">
  <div class="award-icon"><i class="fas fa-medal"></i></div>
  <div class="award-year">YYYY.MM</div>
  <div class="award-title">Your Award Name, Awarding Institution</div>
</div>

</div>

<span class='anchor' id='education'></span>
<div class="section-card card-edu" markdown="1">

# <i class="fas fa-fw fa-graduation-cap"></i> Education

<div class="exp-item">
  <div class="exp-logo">UN</div>
  <div class="exp-content">
    <p class="exp-title">Your University Name</p>
    <div class="exp-meta-row">
      <span><i class="fas fa-user-graduate"></i> Degree Name</span>
      <span><i class="fas fa-calendar-alt"></i> YYYY.MM - YYYY.MM</span>
      <span><i class="fas fa-map-marker-alt"></i> Location, Country</span>
    </div>
    <p class="exp-desc">Briefly describe your thesis, major courses, or academic focus.</p>
  </div>
</div>

</div>

<span class='anchor' id='research-experience'></span>
<div class="section-card card-exp" markdown="1">

# <i class="fas fa-fw fa-laptop-code"></i> Research Experience

<!-- GitHub Stats Placeholder (Remove or update with your username) -->
<div style="margin-bottom: 30px; text-align: center;">
  <p style="font-size: 0.85em; color: #718096;">[GitHub Stats: Replace 'wbzuo' with your username in about.md]</p>
</div>

<div class="exp-item">
  <div class="exp-logo">RE</div>
  <div class="exp-content">
    <p class="exp-title">Your Role @ Institution</p>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> YYYY.MM - Present</span>
      <span><i class="fas fa-flask"></i> Laboratory or Department</span>
    </div>
    <p class="exp-desc">Describe your research projects, contributions, and any key findings.</p>
  </div>
</div>

</div>

<span class='anchor' id='academic-services'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-fw fa-users"></i> Academic Services

<div class="award-item">
  <div class="award-icon" style="color: #00369f;"><i class="fas fa-check-circle"></i></div>
  <div class="award-title">Reviewer for Conference X, Journal Y.</div>
</div>

</div>

<span class='anchor' id='visitor-map'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-fw fa-globe"></i> Visitor Map

<div style="
  max-width: 500px;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
">
  <div style="font-size: 0.95rem; font-weight: 500; color: #00369f; margin-bottom: 12px;">
    Global Visitor Distribution
  </div>
  <!-- Replace the 'd' parameter with your mapmyvisitors ID -->
  <script type="text/javascript" id="mapmyvisitors"
    src="//mapmyvisitors.com/map.js?d=YOUR_ID_HERE&cl=ffffff&w=a">
  </script>
</div>

</div>

<br>
