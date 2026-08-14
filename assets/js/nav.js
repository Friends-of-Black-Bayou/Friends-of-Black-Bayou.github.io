const btn = document.querySelector('.nav-toggle');
btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') == 'true';
    btn.setAttribute('aria-expanded', String(!open));
});

