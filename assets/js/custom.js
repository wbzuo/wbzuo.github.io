// --- BibTeX Toggle ---
function toggleBibtex(id, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const bibtex = document.getElementById(id);
    if (bibtex) {
        bibtex.style.display = (bibtex.style.display === 'none' || bibtex.style.display === '') ? 'block' : 'none';
    }
    return false;
}

function copyBibtex(id) {
    const text = document.getElementById(id + '-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`[onclick*="copyBibtex('${id}')"]`);
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => { btn.innerHTML = originalText; }, 2000);
    });
}

// --- Dark Mode (fix: attribute goes on <html>, not <body>) ---
const root = document.documentElement;
const toggleBtn = document.getElementById('dark-mode-toggle');

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        root.setAttribute('data-theme', 'dark');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
};

if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (root.getAttribute('data-theme') === 'dark') {
            root.removeAttribute('data-theme');
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// --- Scroll Progress Bar + Back to Top ---
const progressBar = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollTop > 300);
}, { passive: true });

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// --- Typewriter ---
function initTypewriter() {
    const el = document.getElementById('tw-focus');
    if (!el) return;
    const phrases = ['LLMs for Code Generation', 'Software Analysis & Testing', 'Automated Software Engineering'];
    let pIdx = 0, cIdx = 0, deleting = false;
    function tick() {
        const phrase = phrases[pIdx];
        el.textContent = deleting ? phrase.slice(0, --cIdx) : phrase.slice(0, ++cIdx);
        if (!deleting && cIdx === phrase.length) {
            deleting = true;
            return setTimeout(tick, 1800);
        }
        if (deleting && cIdx === 0) {
            deleting = false;
            pIdx = (pIdx + 1) % phrases.length;
        }
        setTimeout(tick, deleting ? 40 : 80);
    }
    setTimeout(tick, 800);
}

// --- ScrollSpy ---
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTypewriter();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.greedy-nav .visible-links a').forEach(navLink => {
                    navLink.classList.remove('active');
                    const href = navLink.getAttribute('href');
                    if (href === '#' + id) navLink.classList.add('active');
                });
            }
        });
    }, { threshold: 0.2, rootMargin: '-10% 0px -70% 0px' });

    document.querySelectorAll('span.anchor').forEach(section => observer.observe(section));
});
