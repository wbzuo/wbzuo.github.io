function toggleBibtex(id) {
    const bibtex = document.getElementById(id);
    if (bibtex.style.display === "none") {
        bibtex.style.display = "block";
    } else {
        bibtex.style.display = "none";
    }
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

// --- Dark Mode Logic ---
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.setAttribute('data-theme', 'dark');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener('click', () => {
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

// --- ScrollSpy & Active Link Logic ---
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0.5) {
                document.querySelectorAll('.greedy-nav .visible-links a').forEach(navLink => {
                    navLink.classList.remove('active');
                    const href = navLink.getAttribute('href');
                    if (href === '/#' + id || href === '#' + id) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: [0, 0.5, 1.0] });

    document.querySelectorAll('span.anchor').forEach(section => {
        observer.observe(section);
    });
});
