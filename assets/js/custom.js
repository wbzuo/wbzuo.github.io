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

// ScrollSpy Implementation
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelectorAll('.greedy-nav .visible-links a').forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === '/#' + id || navLink.getAttribute('href') === '#' + id) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    });

    // Track all anchors
    document.querySelectorAll('span.anchor').forEach(section => {
        observer.observe(section);
    });
});
