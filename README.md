# AcadHomepage: Two-Column Academic Homepage

A clean, responsive academic personal homepage. Built with **Jekyll** (a trimmed
**Minimal Mistakes** base). Two-column layout: a sticky **profile sidebar** on the
left and a content column on the right. Near-monochrome, serif headings
(Source Serif 4), hairline rules, dark mode.

[**Live example**](https://wbzuo.github.io)

---

## ✨ Features

- 🧑‍🔬 **Profile sidebar**: photo, name, affiliation, title, location, and a grouped
  vertical link list (contact + academic profiles).
- 📚 **Venue-badge publications**: each paper shows a venue tag, title, authors,
  highlight bullets, action links, and inline BibTeX copy.
- 🔗 **Academic links** via [Academicons](https://jpswalsh.github.io/academicons/)
  (Scholar, ORCID, DBLP, Semantic Scholar, arXiv, ResearchGate, ACM, Web of Science)
  + Font Awesome — all driven from `_config.yml`.
- 🌗 **One-click dark mode** (token-driven; the GitHub cards have light/dark variants).
- 🧭 **Sticky top nav** with scroll-spy that highlights the current section; nav clicks
  scroll smoothly without reloading or changing the URL.
- 🈷️ **Bilingual About** (English + 中文); other sections English.
- 📱 Fully responsive — the sidebar stacks above the content on narrow screens.

---

## 🚀 Quick Start

### Prerequisites
- **Ruby** (v3.0+) & **Bundler**, **Jekyll**
- **Python** (v3.8+) — optional, only for the citation crawler

### Run locally
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
bundle install
bash run_server.sh        # serves http://127.0.0.1:4000
```

> **Deploy branch:** the live site is built from whatever branch is set in
> **GitHub → Settings → Pages → Source**. This repo deploys from **`personal-site`**
> (not `main`). Push there to update the live page.

---

## 🛠 Customization Guide

Day-to-day edits live in **`_config.yml`** (identity + links) and
**`_pages/about.md`** (content). Each content section uses the same wrapper:

```html
<span class='anchor' id='section-id'></span>
<div class="section-card" markdown="1">

# Section Title

...content...

</div>
```

Headings are plain text (the serif font + hairline rule are applied automatically).
The `id` is what the nav links to. `markdown="1"` lets you mix Markdown and HTML.

### 1. Identity & sidebar — `_config.yml`

```yaml
author:
  name             : "Your Name (中文名)"   # shown as the sidebar heading
  avatar           : "images/your-photo.jpg" # a real photo looks far more academic
  employer         : "Your University"        # affiliation line
  bio              : "PhD Student in ..."      # title line under affiliation
  location         : "City, Country"
  cv               : "assets/files/CV.pdf"     # "" hides the CV button
  email            : "you@example.edu"
  github           : "yourhandle"              # shown as github.com/yourhandle
  # Academic profiles — fill any you have; "" hides that link, "#" is a placeholder:
  googlescholar    : "https://scholar.google.com/citations?user=YOUR_ID"
  orcid            : "https://orcid.org/0000-0000-0000-0000"
  semanticscholar  : "https://www.semanticscholar.org/author/XXX"
  dblp             : "https://dblp.org/pid/XXX/YYY.html"
  arxiv            : "https://arxiv.org/a/lastname_f_1"
  researchgate     : "https://www.researchgate.net/profile/Your-Name"
  acm              : "https://dl.acm.org/profile/XXX"
  publons          : "https://www.webofscience.com/wos/author/record/XXX"
  linkedin         : ""
  twitter          : ""
```

The sidebar link list (`_includes/author-links.html`) is **grouped**: a contact
group (Email, GitHub, LinkedIn, Twitter) and an academic group (Scholar, ORCID,
…) separated by a hairline. **Empty strings are hidden automatically** — no broken
links. `"#"` renders as a placeholder.

### 2. About (bilingual) — `_pages/about.md`

English paragraph as Markdown, Chinese as an HTML paragraph (rendered muted):

```html
# About Me

I am ... at [Tongji University](https://www.tongji.edu.cn/) ... My research focuses on **...**.

<p class="lang-cn">我是……，研究方向聚焦于……。</p>

<div class="tag-cloud">
  <span class="research-tag">Large Language Models</span>
  <span class="research-tag">Software Analysis</span>
</div>
```

Research interests render as one dotted line (`A · B · C`).

### 3. Add a News item

```html
<ul class="news-list">
  <li>
    <div class="news-date">2025.12</div>
    <div class="news-content">Your news text.</div>
  </li>
</ul>
```

### 4. Add an Education / Experience entry

```html
<div class="exp-item">
  <div class="exp-title">Ph.D. in Computer Science</div>
  <div class="exp-institution">Your University</div>
  <div class="exp-meta-row">
    <span>2025.09 – Present</span>
    <span>City, Country</span>
  </div>
  <p class="exp-desc">One-line description.</p>
</div>
```

Education and Research Experience use the same `.exp-item`. Each `<span>` in
`.exp-meta-row` is joined by a `·` automatically.

### 5. Add a Publication (venue-badge format)

```html
<div class="pub-item">
  <div class="pub-venue">NeurIPS</div>            <!-- venue / status tag -->
  <div class="pub-body">
    <a class="pub-title" href="PAPER_URL">Paper Title</a>
    <p class="pub-authors"><strong>Your Name</strong>, Co-authors. <span class="pub-conf">Venue, Year.</span></p>
    <ul class="pub-highlights">
      <li>One-line contribution / takeaway.</li>
    </ul>
    <div class="pub-links">
      <a href="PROJECT_URL"><i class="fas fa-link"></i> Project</a>
      <a href="PDF_URL"><i class="fas fa-file-pdf"></i> Paper</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('paperN-bib')"><i class="fas fa-quote-right"></i> Cite</a>
      <a href="CODE_URL"><i class="fas fa-code"></i> Code</a>
    </div>
    <div id="paperN-bib" class="bibtex-popup">
      <pre id="paperN-bib-text">@article{key, title={...}, author={...}, year={2026}}</pre>
      <button class="bibtex-copy" onclick="copyBibtex('paperN-bib')"><i class="fas fa-copy"></i></button>
    </div>
  </div>
</div>
```

> Give each paper a unique id: replace **`paperN`** with `paper1`, `paper2`, …,
> keeping the three references (`toggleBibtex`, `<div id>`/`<pre id>`, `copyBibtex`)
> in sync.

### 6. Add an Honor / Award

```html
<ul class="news-list news-list--plain">
  <li>
    <div class="news-date">2025.07</div>
    <div class="news-content"><strong>Award Name</strong>, Institution</div>
  </li>
</ul>
```

### 7. GitHub Activity

Two image pairs (light + dark variants toggled by the theme): a contribution
**streak** (streak-stats.demolab.com) and an **activity graph**
(github-readme-activity-graph). Change `user=wbzuo` / `username=wbzuo` to your
handle in each `src`. These two hosts are reliable; the older
`github-readme-stats.vercel.app` is frequently rate-limited (503), so it's avoided.

### 8. Colours & fonts — `_sass/_homepage.scss`

All colours and the serif font come from CSS variables at the top of the file:

```scss
:root {
  --accent: #34507e;        /* the single accent (links, active nav) */
  --text-main: #1a1a1a;
  --bg-color: #ffffff;
  --border-color: #e7e7ea;  /* hairline rules */
  --serif: "Source Serif 4", Georgia, serif;   /* headings + name */
}
[data-theme="dark"] { --accent: #93b1da; /* ... */ }
```

Links never change colour or underline on hover (only the cursor). The serif
webfont is loaded in `_includes/head/custom.html`.

### 9. Navigation — `_data/navigation.yml`

Pure in-page anchors; keep the order/ids in sync with the sections:

```yaml
main:
  - title: "About"
    url: "#about-me"
  - title: "News"
    url: "#news"
  # ...
```

`assets/js/custom.js` handles dark mode, scroll-spy highlighting, the BibTeX
toggle/copy, and the smooth-scroll click handler.

### 10. Automated Citations (optional)

1. Set `googlescholar` in `_config.yml`.
2. Add a GitHub Secret `GOOGLE_SCHOLAR_ID` (Settings → Secrets → Actions).
3. In a paper's links, add `<span class='show_paper_citations' data='PAPER_ID'></span>`.

---

## 📁 Project Structure

```text
├── _config.yml                  # identity, academic links, site settings
├── _data/navigation.yml         # top nav (pure #anchors, mirrors sections)
├── _includes/
│   ├── author-profile.html      # sidebar profile card
│   ├── author-links.html        # grouped contact + academic link list
│   ├── site-nav.html            # sticky top navigation
│   └── head/custom.html         # Academicons + Source Serif 4 + MathJax
├── _layouts/default.html        # two-column shell (sidebar + content)
├── _pages/about.md              # THE MAIN CONTENT FILE (edit this!)
├── _sass/_homepage.scss         # all custom styling + theme tokens
├── assets/css/main.scss         # theme imports (rarely edited)
├── assets/js/custom.js          # dark mode, scroll-spy, BibTeX, nav scroll
└── google_scholar_crawler/      # optional citation automation
```

---

## 📄 License & Acknowledgements

- **Theme**: based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose.
- **Icons**: [Academicons](https://jpswalsh.github.io/academicons/) + [Font Awesome](https://fontawesome.com/).
- **Fonts**: [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4).
- **License**: MIT.

If you find this template useful, a ⭐ is appreciated.
