# AcadHomepage: Clean Academic Portfolio Template

**AcadHomepage** is a professional, responsive academic personal homepage template. Built with **Jekyll** and a refined **Minimal Mistakes** theme, it uses a calm, restrained card layout aimed at researchers, PhD students, and scholars.

[**Demo & Personal Example**](https://wbzuo.github.io)

---

## ✨ Key Features

- 🃏 **Clean Card Layout**: Calm, evenly-spaced cards — one accent colour, no visual noise.
- 🌓 **One-Click Dark Mode**: Smooth transition between light and dark themes (all colours are token-driven).
- 📖 **Publication Cards**: Per-paper card with inline BibTeX copy.
- 🤖 **Automated Citations**: Sync Google Scholar citation counts via GitHub Actions.
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile.
- 🔗 **ScrollSpy Navigation**: Header menu highlights the active section as you scroll.

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

---

## 🛠 Customization Guide

> Almost everything you edit day-to-day lives in **`_pages/about.md`** (content) and **`_config.yml`** (identity).
> Each content section follows the same wrapper — copy a block, paste it, fill it in.

### Section wrapper (the pattern every block uses)

```html
<span class='anchor' id='your-section-id'></span>
<div class="section-card" markdown="1">

# <i class="fas fa-user"></i> Section Title

...your content...

</div>
```

- The `id` on the `<span class='anchor'>` is what the navbar links to (see *Navigation* below).
- `markdown="1"` lets you mix Markdown and HTML inside the card.
- Pick any [Font Awesome](https://fontawesome.com/icons) / [Academicons](https://jpswalsh.github.io/academicons/) icon for the title.

### 1. Identity & Sidebar — `_config.yml`

```yaml
author:
  name          : "Your Name"
  avatar        : "images/your-avatar.png"   # square image looks best
  bio           : "PhD Student @ Your University"
  location      : "City, Country"
  employer      : "Your University"
  googlescholar : "https://scholar.google.com/citations?user=YOUR_ID"
  cv            : "assets/files/Your_CV.pdf"
  email         : "you@example.com"
  github        : "yourhandle"               # leave "" to hide an icon
  twitter       : ""
  linkedin      : ""
  orcid         : ""
```

Empty strings (`""`) hide the corresponding social icon automatically.

### 2. Research-interest tags — About section

```html
<div class="tag-cloud">
  <span class="research-tag">🚀 Large Language Models</span>
  <span class="research-tag">🔍 Software Analysis</span>
  <!-- add / remove <span> tags freely -->
</div>
```

### 3. Add a News item

```html
<ul class="news-list">
  <li>
    <div class="news-date">2025.12</div>
    <div class="news-content">
      <span class="news-tag">Update</span>
      🎉 Your news text here.
    </div>
  </li>
  <!-- duplicate the <li> above for each new item (newest on top) -->
</ul>
```

`<span class="news-tag">` is an optional small label (e.g. `Update`, `Academic`, `Paper`) — drop it if you don't want one.

### 4. Add an Education / Experience entry

```html
<div class="exp-item">
  <div class="exp-logo">TJ</div>                 <!-- 2–3 letter abbreviation -->
  <div class="exp-content">
    <div class="exp-title">Ph.D. in Computer Science</div>
    <div class="exp-institution">Your University</div>
    <div class="exp-meta-row">
      <span><i class="fas fa-calendar-alt"></i> 2025.09 - Present</span>
      <span><i class="fas fa-map-marker-alt"></i> City, Country</span>
    </div>
    <p class="exp-desc">One-line description of your focus or achievement.</p>
  </div>
</div>
<!-- duplicate the whole .exp-item for each entry -->
```

Education and Research Experience use the **same** `.exp-item` block.

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
      <a href="PROJECT_URL"><i class="fab fa-github"></i> Project</a>
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
  <!-- duplicate the <li> for each award -->
</ul>
```

(`news-list--plain` is the borderless, tighter variant used for awards/services.)

### 7. Academic Services

Just a plain Markdown list inside the card:

```markdown
- Reviewer for Conference / Journal Name.
- PC member, Workshop Name.
```

### 8. Change the accent colour / theme — `_sass/_homepage.scss`

All colours come from CSS variables at the top of the file. Edit once, both themes update:

```scss
:root {
  --accent: #2563eb;        /* light-mode accent */
  --card-bg: #ffffff;
  --bg-color: #f8fafc;
  /* ... */
}
[data-theme="dark"] {
  --accent: #60a5fa;        /* dark-mode accent */
  /* ... */
}
```

### 9. Show / hide the GitHub Stats & Visitor Map

Both are self-contained `.section-card` blocks near the bottom of `about.md`.
To remove either, delete its block (the `<span class='anchor'>` line plus the `<div class="section-card">…</div>`).
For GitHub Stats, change `username=wbzuo` in the image URL to your handle.

### 10. Navigation menu — `_data/navigation.yml`

Keep the menu order in sync with your section order. Each `url` must match a section `id`:

```yaml
main:
  - title: "About Me"
    url: "/#about-me"
  - title: "News"
    url: "/#news"
  # ...one entry per section
```

### 11. Automated Citations (Google Scholar)

1. In `_config.yml`, set your `googlescholar` profile URL.
2. Add a GitHub Secret: `Settings > Secrets and variables > Actions > New repository secret`.
   - Name: `GOOGLE_SCHOLAR_ID`
   - Value: your Scholar user id (e.g. `TExqnA3...`).
3. In a publication's links, use `<span class='show_paper_citations' data='PAPER_ID'></span>`.

---

## 📁 Project Structure

```text
├── _config.yml            # Global configuration & identity
├── _data/navigation.yml   # Top navigation menu (mirror section order)
├── _includes/             # HTML partials (sidebar, masthead, widgets)
├── _pages/about.md        # THE MAIN CONTENT FILE (edit this!)
├── _sass/_homepage.scss   # All custom styling + theme tokens (edit colours here)
├── assets/css/main.scss   # Theme imports (rarely edited)
├── assets/js/custom.js    # Dark mode, ScrollSpy, BibTeX toggle/copy
└── google_scholar_crawler/ # Python citation automation
```

---

## 📄 License & Acknowledgements

- **Theme**: Based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose.
- **License**: MIT.

If you like this template, please give it a ⭐!
