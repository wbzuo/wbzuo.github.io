function toggleBibtex(id) {
    const bibtex = document.getElementById(id);
    // Default-hidden state comes from CSS, so read the computed value
    // rather than the (initially empty) inline style.
    const isHidden = window.getComputedStyle(bibtex).display === "none";
    bibtex.style.display = isHidden ? "block" : "none";
}

function copyBibtex(id) {
    const text = document.getElementById(id + '-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`[onclick="copyBibtex('${id}')"]`);
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

// --- Dark Mode Logic (Refined) ---
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Initialize theme from local storage or system preference
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.setAttribute('data-theme', 'dark');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
};

if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent jump/reload
        let theme = 'light';
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.setAttribute('data-theme', 'dark');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
}

// --- ScrollSpy & Active Link Logic (Refined) ---
window.addEventListener('DOMContentLoaded', () => {
    initTheme(); // Set theme on load

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.site-nav__links a').forEach(navLink => {
                    navLink.classList.remove('active');
                    const href = navLink.getAttribute('href');
                    if (href === '/#' + id || href === '#' + id) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" });

    document.querySelectorAll('span.anchor').forEach(section => {
        observer.observe(section);
    });
});
