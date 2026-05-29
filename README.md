# AcadHomepage: Minimal Academic Portfolio Template

**AcadHomepage** is a clean, responsive academic personal homepage template. Built with **Jekyll** and a refined **Minimal Mistakes** theme, it uses a minimal, typographic layout (serif headings, hairline rules, generous whitespace) aimed at researchers, PhD students, and scholars.

[**Demo & Personal Example**](https://wbzuo.github.io)

---

## ✨ Key Features

- 📄 **Minimal Typographic Layout**: No cards or shadows — serif section headings, a single hairline rule, and whitespace. Paper-like academic feel.
- 🔗 **Academic Icon Row**: Google Scholar, ORCID, DBLP, Semantic Scholar, arXiv, ResearchGate, GitHub, Email — via [Academicons](https://jpswalsh.github.io/academicons/) + Font Awesome.
- 🌓 **One-Click Dark Mode**: Smooth light/dark switch (all colours are token-driven).
- 📖 **Publication Cards**: Per-paper entry with inline BibTeX copy.
- 🤖 **Automated Citations**: Sync Google Scholar citation counts via GitHub Actions.
- 📱 **Fully Responsive** + 🔗 **ScrollSpy** header navigation.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Ruby** (v3.0+) & **Bundler**
- **Jekyll**
- **Python** (v3.8+) — *optional, only for the citation crawler*

### 2. Fork and Clone
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 3. Install & Run
```bash
bundle install      # install Ruby dependencies
bash run_server.sh  # run the local server
```
Visit `http://127.0.0.1:4000` to preview.

> **Deploy note:** this repo's live site is served from the **`personal-site`** branch (GitHub Pages → Settings → Pages → Source). Push there to update the live page; `main` is kept as a clean template and does not auto-deploy.

---

## 🛠 Customization Guide

> Day-to-day edits live in **`_pages/about.md`** (content) and **`_config.yml`** (identity).
> Each content section uses the same wrapper — copy a block, paste it, fill it in.

### Section wrapper (the pattern every block uses)

```html
<span class='anchor' id='your-section-id'></span>
<div class="section-card" markdown="1">

# Section Title

...your content...

</div>
```

- Headings are plain text (the serif + hairline rule is applied automatically). No icons needed.
- The `id` on `<span class='anchor'>` is what the navbar links to (see *Navigation*).
- `markdown="1"` lets you mix Markdown and HTML inside the block.

### 1. Identity & Sidebar — `_config.yml`

```yaml
author:
  name            : "Your Name"
  avatar          : "images/your-avatar.png"   # square image looks best
  bio             : "PhD Student @ Your University"
  location        : "City, Country"
  employer        : "Your University"
  cv              : "assets/files/Your_CV.pdf"  # "" hides the CV link
  email           : "you@example.com"
  github          : "yourhandle"
  # Academic / social links — fill any you have; empty ones are hidden:
  googlescholar   : "https://scholar.google.com/citations?user=YOUR_ID"
  orcid           : "https://orcid.org/0000-0000-0000-0000"
  dblp            : "https://dblp.org/pid/XXX/YYY.html"
  semanticscholar : "https://www.semanticscholar.org/author/XXX"
  arxiv           : "https://arxiv.org/a/lastname_f_1"
  researchgate    : "https://www.researchgate.net/profile/Your-Name"
  linkedin        : ""
  twitter         : ""
```

Each filled field adds one icon to the sidebar's academic icon row. **Empty strings (`""`) are hidden automatically** — no broken links.

### 2. Research interests — About section

Rendered as a single dotted line (`A · B · C`):

```html
<div class="tag-cloud">
  <span class="research-tag">Large Language Models</span>
  <span class="research-tag">Software Analysis</span>
  <!-- add / remove <span> freely -->
</div>
```

### 3. Add a News item

```html
<ul class="news-list">
  <li>
    <div class="news-date">2025.12</div>
    <div class="news-content">Your news text here.</div>
  </li>
  <!-- duplicate the <li> above for each item (newest on top) -->
</ul>
```

Optional small label: put `<span class="news-tag">Paper</span>` at the start of `.news-content`.

### 4. Add an Education / Experience entry

```html
<div class="exp-item">
  <div class="exp-title">Ph.D. in Computer Science</div>
  <div class="exp-institution">Your University</div>
  <div class="exp-meta-row">
    <span>2025.09 – Present</span>
    <span>City, Country</span>
  </div>
  <p class="exp-desc">One-line description of your focus or achievement.</p>
</div>
<!-- duplicate the whole .exp-item for each entry -->
```

Education and Research Experience use the **same** `.exp-item` block. Each `<span>` in `.exp-meta-row` is joined by a `·` automatically.

### 5. Add a Publication

```html
<div class='paper-box'>
  <div class='paper-box-image'>
    <div class="badge">In Progress</div>        <!-- optional status; remove if published -->
    <img src='images/your-thumb.png' loading="lazy" alt="publication-thumb">
  </div>
  <div class='paper-box-text'>
    <span class="paper-label">Preprint</span>    <!-- venue / type tag -->
    <a href="PAPER_URL" class="paper-title">Your Paper Title</a>
    <p class="paper-authors"><strong>Your Name</strong>, Co-authors</p>
    <p class="paper-conf">Venue / Journal, Year</p>
    <div class="paper-links">
      <a href="PROJECT_URL"><i class="fas fa-link"></i> Project</a>
      <a href="PDF_URL"><i class="fas fa-file-pdf"></i> Paper</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('paperN-bib')"><i class="fas fa-quote-right"></i> Cite</a>
      <a href="CODE_URL"><i class="fas fa-code"></i> Code</a>
      <span class='show_paper_citations' data=''></span>  <!-- Scholar citation count -->
    </div>
    <div id="paperN-bib" class="bibtex-popup">
      <pre id="paperN-bib-text">@article{key2026title,
  title={Your Paper Title},
  author={Your Name and Others},
  year={2026}
}</pre>
      <button class="bibtex-copy" onclick="copyBibtex('paperN-bib')"><i class="fas fa-copy"></i></button>
    </div>
  </div>
</div>
```

> **Important:** give each paper a unique id. Replace **`paperN`** with `paper1`, `paper2`, … and keep the three references (`toggleBibtex`, the `<div id>` / `<pre id>`, and `copyBibtex`) in sync.

### 6. Add an Honor / Award

```html
<ul class="news-list news-list--plain">
  <li>
    <div class="news-date">2025.07</div>
    <div class="news-content"><strong>Award Name</strong>, Institution</div>
  </li>
</ul>
```

### 7. Academic Services

Plain Markdown list inside the block:

```markdown
- Reviewer for Conference / Journal Name.
- PC member, Workshop Name.
```

### 8. Colours & fonts — `_sass/_homepage.scss`

All colours and the serif heading font come from variables at the top of the file. Edit once, both themes update:

```scss
:root {
  --accent: #1d4ed8;        /* light-mode accent (links, hover) */
  --text-main: #1a1a1a;
  --bg-color: #ffffff;
  --border-color: #e5e7eb;  /* the hairline rules */
  --serif: Georgia, Cambria, "Times New Roman", serif;  /* heading font */
}
[data-theme="dark"] { --accent: #7aa2f7; /* ... */ }
```

### 9. Show / hide the GitHub Stats & Visitor Map

Both are self-contained `.section-card` blocks near the bottom of `about.md`. To remove one, delete its block (the `<span class='anchor'>` line plus the `<div class="section-card">…</div>`). For GitHub Stats, change `username=wbzuo` in the image URL to your handle.

### 10. Navigation menu — `_data/navigation.yml`

Keep the menu order in sync with your section order; each `url` must match a section `id`:

```yaml
main:
  - title: "About Me"
    url: "/#about-me"
  # ...one entry per section
```

### 11. Automated Citations (Google Scholar)

1. In `_config.yml`, set your `googlescholar` profile URL.
2. Add a GitHub Secret: `Settings > Secrets and variables > Actions > New repository secret`.
   - Name: `GOOGLE_SCHOLAR_ID`, Value: your Scholar user id (e.g. `TExqnA3...`).
3. In a publication's links, use `<span class='show_paper_citations' data='PAPER_ID'></span>`.

---

## 📁 Project Structure

```text
├── _config.yml            # Global configuration & identity (author links here)
├── _data/navigation.yml   # Top navigation menu (mirror section order)
├── _includes/             # HTML partials (sidebar / author-profile, masthead)
├── _pages/about.md        # THE MAIN CONTENT FILE (edit this!)
├── _sass/_homepage.scss   # All custom styling + theme tokens (edit colours/font here)
├── assets/css/main.scss   # Theme imports (rarely edited)
├── assets/js/custom.js    # Dark mode, ScrollSpy, BibTeX toggle/copy
└── google_scholar_crawler/ # Python citation automation
```

---

## 📄 License & Acknowledgements

- **Theme**: Based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose.
- **Icons**: [Academicons](https://jpswalsh.github.io/academicons/) + [Font Awesome](https://fontawesome.com/).
- **License**: MIT.

If you like this template, please give it a ⭐!
