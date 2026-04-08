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

# <i class="fas fa-user"></i> About Me

Welcome to your academic homepage! This section is for your personal introduction. You can describe your current research focus, Ph.D. journey, and long-term academic goals. The layout is designed to be clean, professional, and readable.

<div class="tag-cloud" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
  <span class="research-tag" style="padding: 4px 12px; background: var(--highlight-bg); border-radius: 20px; font-size: 0.85em; font-weight: 600; color: var(--accent-blue);">🚀 Research Area 1</span>
  <span class="research-tag" style="padding: 4px 12px; background: var(--highlight-bg); border-radius: 20px; font-size: 0.85em; font-weight: 600; color: var(--accent-blue);">🔍 Research Area 2</span>
  <span class="research-tag" style="padding: 4px 12px; background: var(--highlight-bg); border-radius: 20px; font-size: 0.85em; font-weight: 600; color: var(--accent-blue);">🤖 Research Area 3</span>
</div>

</div>

<span class='anchor' id='news'></span>
<div class="section-card card-news" markdown="1">

# <i class="fas fa-fire"></i> News

<ul class="news-list">
  <li>
    <div class="news-date">2025.12</div>
    <div class="news-content">
      <span class="news-tag">Update</span> 
      Your personal academic homepage template has been successfully deployed!
    </div>
  </li>
  <li>
    <div class="news-date">2025.09</div>
    <div class="news-content">
      <span class="news-tag">Academic</span> 
      Placeholder for your latest achievement, such as "Started Ph.D. at Your University."
    </div>
  </li>
</ul>

</div>

<span class='anchor' id='publications'></span>
<div class="section-card card-pub" markdown="1">

# <i class="fas fa-book"></i> Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div class="badge">In Press</div>
    <img src='images/favicon.ico' loading="lazy" alt="publication-thumb" style="padding: 30px; opacity: 0.5;">
  </div>
  <div class='paper-box-text'>
    <span class="paper-label">Conference</span>
    <a href="#" class="paper-title">Your Paper Title: A Deep Dive into Academic Website Optimization</a>

    <p class="paper-authors"><strong>Your Name</strong>, Co-authors</p>
    
    <p class="paper-conf">Conference on Computer Science (CCS), 2025</p>

    <div class="paper-links">
      <a href="#"><i class="fab fa-github"></i> Project</a>
      <a href="#"><i class="fas fa-file-pdf"></i> Paper</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('paper1-bib')"><i class="fas fa-quote"></i> Cite</a>
      <a href="#"><i class="fas fa-code"></i> Code</a>
      <span class='show_paper_citations' data=''></span>
    </div>

    <!-- BibTeX Popup -->
    <div id="paper1-bib" style="display: none; background: var(--highlight-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 15px; margin-top: 15px; position: relative;">
      <pre id="paper1-bib-text" style="margin: 0; font-size: 0.8em; white-space: pre-wrap; color: var(--text-muted);">@inproceedings{yourname2025paper,
  title={Your Paper Title},
  author={Your Name and Others},
  booktitle={CCS},
  year={2025}
}</pre>
      <button onclick="copyBibtex('paper1-bib')" class="btn btn--small" style="position: absolute; top: 10px; right: 10px; font-size: 0.7em; background: var(--card-bg); border: 1px solid var(--border-color);"><i class="fas fa-copy"></i></button>
    </div>
  </div>
</div>

</div>

<span class='anchor' id='honors-and-awards'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-trophy"></i> Honors and Awards

<div class="news-list" style="border: none;">
  <li style="border: none; padding: 0.5em 0;">
    <div class="news-date">2025.07</div>
    <div class="news-content"><strong>Outstanding Graduate Award</strong>, Your University Name</div>
  </li>
  <li style="border: none; padding: 0.5em 0;">
    <div class="news-date">2021 - 2025</div>
    <div class="news-content"><strong>Academic Excellence Scholarship</strong> (Top 1%)</div>
  </li>
</div>

</div>

<span class='anchor' id='education'></span>
<div class="section-card card-edu" markdown="1">

# <i class="fas fa-graduation-cap"></i> Education

<div class="exp-item">
  <div class="exp-logo">UN</div>
  <div class="exp-content">
    <div class="exp-title">Ph.D. in Intelligent Science and Technology</div>
    <div class="exp-institution">Your University Name</div>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> 2025.09 - 2031.03 (Expected)</span>
      <span><i class="fas fa-map-marker-alt"></i> Location, Country</span>
    </div>
    <p class="exp-desc">Describe your research laboratory, advisor, or primary research directions here.</p>
  </div>
</div>

</div>

<span class='anchor' id='research-experience'></span>
<div class="section-card card-exp" markdown="1">

# <i class="fas fa-laptop-code"></i> Research Experience

<div class="exp-item">
  <div class="exp-logo">RA</div>
  <div class="exp-content">
    <div class="exp-title">Research Assistant</div>
    <div class="exp-institution">Your Lab Name @ University</div>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> 2025.09 - Present</span>
      <span><i class="fas fa-flask"></i> AI & SE Research Group</span>
    </div>
    <p class="exp-desc">Detail your contributions to research projects, experiments, or software development.</p>
  </div>
</div>

</div>

<span class='anchor' id='academic-services'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-users"></i> Academic Services

<ul style="margin: 0; padding-left: 1.2em; color: var(--text-muted); font-size: 0.95em;">
  <li style="margin-bottom: 8px;">Reviewer for International Conference on Machine Learning (ICML)</li>
  <li style="margin-bottom: 8px;">Member of Academic Society XYZ</li>
</ul>

</div>

<span class='anchor' id='visitor-map'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-globe"></i> Visitor Map

<div style="max-width: 500px; margin: 10px auto; text-align: center;">
  <div style="font-size: 0.9rem; font-weight: 600; color: var(--accent-blue); margin-bottom: 12px;">Global Visitor Distribution</div>
  <!-- Add your mapmyvisitors script here -->
  <p style="font-size: 0.8em; color: var(--text-muted);">[Map Placeholder]</p>
</div>

</div>

<br>
