function toggleBibtex(id, event) {
    // 彻底阻止任何可能的跳转或滚动行为
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const bibtex = document.getElementById(id);
    if (bibtex) {
        if (bibtex.style.display === "none" || bibtex.style.display === "") {
            bibtex.style.display = "block";
        } else {
            bibtex.style.display = "none";
        }
    }
    return false; // 双重保险
}

function copyBibtex(id) {
    const text = document.getElementById(id + '-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`[onclick*="copyBibtex('${id}')"]`);
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

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.setAttribute('data-theme', 'dark');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
};

if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
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

// --- ScrollSpy ---
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.greedy-nav .visible-links a').forEach(navLink => {
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
