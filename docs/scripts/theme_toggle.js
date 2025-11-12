window.addEventListener("DOMContentLoaded", () => {
    let _themeInitDone = false;

    function initThemeToggle() {
        if (_themeInitDone) return;
        _themeInitDone = true;

        const btn = document.getElementById('theme-toggle');
        const body = document.body;
        const moon = window.moon;
        const sun = window.sun;

        const renderIcon = (isLight) => {
            if (!btn) return;
                btn.innerHTML = isLight
                    ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="${moon}"/></svg>`
                    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16"><path d="${sun}"/></svg>`;
        };

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') body.classList.add('light');

        // Render initial icon (if button exists)
        renderIcon(body.classList.contains('light'));
        if (btn) {
            btn.addEventListener('click', () => {
                const isLight = body.classList.toggle('light');
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
                renderIcon(isLight);
            });
        }

        document.documentElement.classList.add("ready");
    }

    window.addEventListener('includes:loaded', initThemeToggle);
    window.addEventListener('DOMContentLoaded', initThemeToggle);
});