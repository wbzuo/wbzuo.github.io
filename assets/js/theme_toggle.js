// 主题切换。初始值由 _layouts/default.html 里的内联脚本在首次绘制前设定，
// 这里只负责按钮交互和图标状态。属性挂在 <html> 上。
(function () {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function syncIcon() {
        var dark = root.getAttribute('data-theme') === 'dark';
        btn.innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }

    syncIcon();

    btn.addEventListener('click', function () {
        var dark = root.getAttribute('data-theme') === 'dark';
        if (dark) {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', 'dark');
        }
        try {
            localStorage.setItem('theme', dark ? 'light' : 'dark');
        } catch (e) { /* private mode: choice just won't persist */ }
        syncIcon();
    });

    // 用户没手动选过时，跟随系统设置变化
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            try { if (localStorage.getItem('theme')) return; } catch (err) { return; }
            if (e.matches) root.setAttribute('data-theme', 'dark');
            else root.removeAttribute('data-theme');
            syncIcon();
        });
    }
})();
