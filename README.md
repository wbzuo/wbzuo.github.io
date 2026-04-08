# AcadHomepage: Modern Academic Personal Homepage

AcadHomepage is a professional, responsive, and highly customizable academic personal homepage template. Built with **Jekyll** and based on a deeply refined **Minimal Mistakes** theme, it is designed for researchers, PhD students, and scholars to showcase their research, publications, and academic journey with a modern "card-based" aesthetic.

## ✨ Key Features

- 🃏 **Card-Based Layout**: Distinct, color-coded sections for News, Publications, Education, and more.
- 🎨 **Modern Visuals**: Subtle hover effects, gradient icons, and a clean White/Blue academic color palette.
- 🤖 **Automated Citations**: Integrated Python crawler to sync Google Scholar citations automatically via GitHub Actions.
- 📱 **Fully Responsive**: Optimized for desktop, tablets, and mobile devices.
- 🔗 **Smooth Navigation**: One-page scrolling experience with anchor-link support.

---

## 🚀 Getting Started

### Prerequisites

- **Ruby** (v3.0+) and **Bundler**
- **Python** (v3.8+) for the Google Scholar crawler
- **Jekyll**

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wbzuo/wbzuo.github.io.git
   cd wbzuo.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   pip install -r google_scholar_crawler/requirements.txt
   ```

3. **Run the local server:**
   ```bash
   bash run_server.sh
   ```
   Open your browser and navigate to `http://127.0.0.1:4000`.

---

## 🛠 Maintenance Guide

### 1. Personal Information & Sidebar
Edit `_config.yml` to update your name, bio, social links (GitHub, Google Scholar, Twitter), and avatar.
> **Note**: Restart the server after modifying `_config.yml`.

### 2. Main Content (About Me, News, Pubs)
Primary content is managed in `_pages/about.md`. The page uses custom HTML components:

- **Adding News**: Wrap items in `<ul class="news-list">` using `news-type` and `news-date` spans.
- **Adding Publications**: Use the `.paper-box` component. It supports:
  - `paper-label`: `label-conf`, `label-journal`, or `label-preprint`.
  - `paper-links`: Stylized buttons for Project, PDF, and Code.
- **Education & Experience**: Use the `.exp-item` component with `exp-logo` and `exp-meta-row`.

### 3. Navigation Menu
Update links and labels in `_data/navigation.yml`. Ensure URL anchors (e.g., `#publications`) match the IDs in `about.md`.

---

## 📊 Automated Google Scholar Citations

This project uses a GitHub Action to keep your citation counts up to date.

1. **Configure your ID**: In `_config.yml`, set `googlescholar` to your profile URL.
2. **Setup Secret**: In your GitHub repository settings, go to `Settings > Secrets and variables > Actions` and add a new secret named `GOOGLE_SCHOLAR_ID` with your unique ID (found in the URL after `user=`).
3. **Display Citations**: Use `<span class='show_paper_citations' data='PAPER_ID'></span>` in `about.md` where `PAPER_ID` is the ID of the specific paper.

---

## 📁 Project Structure

```text
├── _config.yml          # Site configuration & Metadata
├── _data/               # Navigation & data files
├── _includes/           # HTML partials (Sidebar, Map, etc.)
├── _pages/about.md      # MAIN CONTENT FILE
├── _sass/               # Custom SCSS styles (Card system)
├── assets/              # CSS, JS, Fonts, and Images
├── google_scholar_crawler/ # Python citation automation
└── .github/workflows/   # CI/CD (Auto-update & Deploy)
```

---

## 📄 License & Credits

- **Theme**: Based on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose.
- **License**: MIT License.

Feel free to fork this project and adapt it for your own academic homepage! If you find it helpful, a ⭐️ is much appreciated.
