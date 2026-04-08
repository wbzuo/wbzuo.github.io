# Project Overview: AcadHomepage

AcadHomepage is a modern, responsive academic personal homepage template built with Jekyll, based on the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme. It is specifically designed for researchers and students to showcase their research, publications, and academic portfolio.

## Key Technologies
- **Static Site Generator:** [Jekyll](https://jekyllrb.com/)
- **Theme:** Modified [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
- **Styling:** SCSS (located in `_sass/`)
- **Automation:** Python (for Google Scholar scraping) and GitHub Actions
- **Dependency Management:** 
  - Ruby: `Gemfile`
  - Python: `google_scholar_crawler/requirements.txt`

## Architecture & Structure
- `_config.yml`: Global configuration for site title, description, author information, and SEO.
- `_pages/`: Contains the main markdown pages (e.g., `about.md`).
- `_includes/`: HTML partials for site components (sidebar, navigation, etc.).
- `_layouts/`: Page layout templates.
- `assets/`: Static assets including CSS, JS, fonts, and images.
- `google_scholar_crawler/`: Python script and configuration for fetching citations from Google Scholar.
- `.github/workflows/`: Automated CI/CD pipelines for site deployment and citation updates.

## Building and Running

### Local Development
To run the project locally, ensure you have Ruby and Jekyll installed:
1.  **Install Ruby dependencies:**
    ```bash
    bundle install
    ```
2.  **Run the local server:**
    ```bash
    bash run_server.sh
    ```
    This script executes `bundle exec jekyll liveserve`, making the site available at `http://127.0.0.1:4000` with live reloading.

### Automatic Updates
Google Scholar citations are automatically updated via a GitHub Action (`.github/workflows/google_scholar_crawler.yaml`). 
- **Requirement:** A `GOOGLE_SCHOLAR_ID` secret must be configured in the repository settings.
- **Schedule:** Runs on main branch updates and daily at 08:00 UTC.

## Development Conventions

- **Content:** Primary homepage content is managed in `_pages/about.md`.
- **Configuration:** Avoid frequent changes to `_config.yml` as it requires a server restart during local development.
- **Styling:** Custom styles should be added to `assets/css/main.scss` or new files in `_sass/`.
- **Citations:** Use the `<span class='show_paper_citations' data='PAPER_ID'></span>` syntax in markdown to dynamically display paper citations fetched by the crawler.

## Key Files
- `_config.yml`: Site-wide settings and author metadata.
- `_pages/about.md`: The heart of the homepage content.
- `google_scholar_crawler/main.py`: The engine for citation automation.
- `run_server.sh`: Convenient script for local testing.
