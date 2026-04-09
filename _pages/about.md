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

I am Wenbin Zuo (左文彬), a PhD student in Intelligent Science and Technology at [Tongji University](https://www.tongji.edu.cn/), Shanghai, China. I received my B.S. degree in Software Engineering from [Jiangxi University of Finance and Economics](https://www.jxufe.edu.cn/) in 2025.

My research interests primarily lie in the intersection of **Artificial Intelligence** and **Software Engineering**, with a focus on LLMs for Code Generation, Software Analysis, and deep learning for optimization.

<div class="tag-cloud" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
  <span class="research-tag" style="padding: 4px 12px; background: var(--highlight-bg); border-radius: 20px; font-size: 0.85em; font-weight: 600; color: var(--accent-blue);">🚀 Large Language Models (LLMs)</span>
  <span class="research-tag" style="padding: 4px 12px; background: var(--highlight-bg); border-radius: 20px; font-size: 0.85em; font-weight: 600; color: var(--accent-blue);">🔍 Software Analysis & Verification</span>
  <span class="research-tag" style="padding: 4px 12px; background: var(--highlight-bg); border-radius: 20px; font-size: 0.85em; font-weight: 600; color: var(--accent-blue);">🤖 Automated Software Engineering</span>
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
      🎉🎉 Personal academic homepage launched! Stay tuned for more updates.
    </div>
  </li>
  <li>
    <div class="news-date">2025.09</div>
    <div class="news-content">
      <span class="news-tag">Academic</span> 
      🎓🎓 Started my Ph.D. journey at <strong>Tongji University</strong>, Shanghai!
    </div>
  </li>
</ul>

</div>

<span class='anchor' id='publications'></span>
<div class="section-card card-pub" markdown="1">

# <i class="fas fa-book"></i> Publications 

<!-- Publication Item 1 -->
<div class='paper-box'>
  <div class='paper-box-image'>
    <img src='images/favicon.ico' alt="paper-thumb" style="padding: 40px; opacity: 0.2;">
  </div>
  <div class='paper-box-text'>
    <span class="paper-type-tag">Conference Paper</span>
    <a href="https://github.com/wbzuo" class="paper-title">Optimizing Large Language Models for Reliable Code Synthesis and Automated Software Testing</a>

    <p class="paper-authors">
      <span class="author-me">Wenbin Zuo</span>, Advisor Name, Co-author A, Co-author B
    </p>
    
    <p class="paper-venue">
      Proceedings of the International Conference on Software Engineering (ICSE), 2026 
      <br><span>[Featured as Top Academic Highlight]</span>
    </p>

    <div class="paper-links">
      <a href="https://github.com/wbzuo"><i class="fab fa-github"></i> GitHub</a>
      <a href="#"><i class="fas fa-file-pdf"></i> PDF</a>
      <a href="javascript:void(0)" onclick="return toggleBibtex('paper1-bib', event)" class="btn-cite"><i class="fas fa-quote-right"></i> Cite</a>
      <a href="#"><i class="fas fa-code"></i> Code</a>
      <span class='show_paper_citations' data=''></span>
    </div>

    <!-- BibTeX Popup -->
    <div id="paper1-bib" class="bibtex-box">
      <pre id="paper1-bib-text">@inproceedings{zuo2026optimizing,
  title={Optimizing Large Language Models for Reliable Code Synthesis},
  author={Zuo, Wenbin and Others},
  booktitle={ICSE},
  year={2026}
}</pre>
      <button onclick="copyBibtex('paper1-bib')" class="copy-btn"><i class="fas fa-copy"></i> Copy BibTeX</button>
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
    <div class="news-content"><strong>Outstanding Graduate Award</strong>, Jiangxi University of Finance and Economics</div>
  </li>
  <li style="border: none; padding: 0.5em 0;">
    <div class="news-date">2021 - 2025</div>
    <div class="news-content"><strong>Multiple University-level Scholarships</strong> and Academic Excellence Awards</div>
  </li>
</div>

</div>

<span class='anchor' id='education'></span>
<div class="section-card card-edu" markdown="1">

# <i class="fas fa-graduation-cap"></i> Education

<div class="exp-item">
  <div class="exp-logo">TJ</div>
  <div class="exp-content">
    <div class="exp-title">Ph.D. in Intelligent Science and Technology</div>
    <div class="exp-institution">Tongji University</div>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> 2025.09 - 2031.03 (Expected)</span>
      <span><i class="fas fa-map-marker-alt"></i> Shanghai, China</span>
    </div>
    <p class="exp-desc">Focusing on LLMs for automated software engineering and software analysis.</p>
  </div>
</div>

<div class="exp-item">
  <div class="exp-logo">JF</div>
  <div class="exp-content">
    <div class="exp-title">B.S. in Software Engineering</div>
    <div class="exp-institution">Jiangxi University of Finance and Economics</div>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> 2021.09 - 2025.07</span>
      <span><i class="fas fa-map-marker-alt"></i> Jiangxi, China</span>
    </div>
    <p class="exp-desc">Graduated as an Outstanding Graduate with top academic performance.</p>
  </div>
</div>

</div>

<span class='anchor' id='research-experience'></span>
<div class="section-card card-exp" markdown="1">

# <i class="fas fa-laptop-code"></i> Research Experience

<div style="margin-bottom: 30px; text-align: center;">
  <img src="https://github-readme-stats.vercel.app/api?username=wbzuo&show_icons=true&theme=buefy&hide_border=true&count_private=true" alt="GitHub Stats" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
</div>

<div class="exp-item">
  <div class="exp-logo">RA</div>
  <div class="exp-content">
    <div class="exp-title">Research Assistant</div>
    <div class="exp-institution">Tongji University</div>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> 2025.09 - Present</span>
      <span><i class="fas fa-flask"></i> Intelligent Software Engineering Lab</span>
    </div>
    <p class="exp-desc">Conducting research on LLM-based code synthesis and testing.</p>
  </div>
</div>

</div>

<span class='anchor' id='academic-services'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-users"></i> Academic Services

<ul style="margin: 0; padding-left: 1.2em; color: var(--text-muted); font-size: 0.95em;">
  <li style="margin-bottom: 8px;">Reviewer for upcoming conferences/journals in AI and Software Engineering.</li>
</ul>

</div>

<span class='anchor' id='visitor-map'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-globe"></i> Visitor Map

<div style="
  max-width: 500px;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
">
  <div style="font-size: 0.95rem; font-weight: 500; color: #00369f; margin-bottom: 12px;">
    Global Visitor Distribution
  </div>
  <script type="text/javascript" id="mapmyvisitors"
    src="//mapmyvisitors.com/map.js?d=TExqnA3tGu9npMTINv6yTrAzGBWl9pvwiau3Cx5prQg&cl=ffffff&w=a">
  </script>
</div>

</div>

<br>
