# AcadHomepage: Modern Academic Portfolio Template

**AcadHomepage** is a professional, responsive, and highly customizable academic personal homepage template. Built with **Jekyll** and a deeply refined **Minimal Mistakes** theme, it provides a modern "card-based" aesthetic for researchers, PhD students, and scholars.

[**Demo & Personal Example**](https://wbzuo.github.io)

---

## ✨ Key Features

- 🃏 **Card-Based Layout**: Elevated white cards with color-coded section accents.
- 🌓 **One-Click Dark Mode**: Smooth transition between light and dark themes.
- 📖 **Publication Management**: Interactive cards with integrated BibTeX copying and Altmetric/Dimensions badges.
- 🤖 **Automated Citations**: Sync Google Scholar citation counts via GitHub Actions.
- 📱 **Fully Responsive**: Perfect display on desktop, tablet, and mobile.
- 🔗 **ScrollSpy Navigation**: Header menu highlights the active section as you scroll.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have the following installed:
- **Ruby** (v3.0+) & **Bundler**
- **Jekyll**
- **Python** (v3.8+) — *Optional, only for citation crawler*

### 2. Fork and Clone
1. Fork this repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

### 3. Install & Run
```bash
# Install Ruby dependencies
bundle install

# Run the local server
bash run_server.sh
```
Visit `http://127.0.0.1:4000` to preview.

---

## 🛠 Customization Guide

### 1. Basic Info
Open `_config.yml` and update the following:
- `title`, `description`, `author.name`, `bio`, `social links`, etc.
- Replace `images/favicon.ico` with your own avatar.

### 2. Main Content
Edit `_pages/about.md`. Use the provided HTML components:
- **News**: Use `<ul class="news-list">` with `type-info`/`type-edu` tags.
- **Publications**: Use the `.paper-box` structure for each paper. 
- **Experience/Education**: Use `.exp-item` with custom logos.

### 3. Automated Citations (Google Scholar)
To enable automatic citation updates:
1. In `_config.yml`, set your `googlescholar` ID.
2. Add a GitHub Secret: `Settings > Secrets > Actions > New repository secret`.
   - Name: `GOOGLE_SCHOLAR_ID`
   - Value: Your unique ID (e.g., `TExqnA3...`).
3. In `about.md`, use: `<span class='show_paper_citations' data='PAPER_ID'></span>`.

---

## 📁 Project Structure

```text
├── _config.yml          # Global configuration & Metadata
├── _data/               # Navigation menu configuration
├── _includes/           # HTML partials (Sidebars, Masthead, Widgets)
├── _pages/about.md      # THE MAIN CONTENT FILE (Edit this!)
├── _sass/               # Custom SCSS (Variable-driven card system)
├── assets/js/custom.js  # Dark mode & ScrollSpy logic
└── google_scholar_crawler/ # Python automation engine
```

---

## 📄 License & Acknowledgements

- **Theme**: Based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose.
- **License**: MIT.

If you like this template, please give it a ⭐!
