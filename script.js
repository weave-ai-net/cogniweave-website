const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.pageYOffset > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.product-tile, .case-study-row, .stat-item, .about-pillars li').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 0.06, 0.3)}s`;
    revealObserver.observe(el);
});

const animateCounter = (element, target, duration = 1600) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const statNumber = entry.target.querySelector('.stat-number');
        if (statNumber && !statNumber.classList.contains('animated')) {
            statNumber.classList.add('animated');
            const target = parseInt(statNumber.textContent, 10);
            if (!Number.isNaN(target)) {
                animateCounter(statNumber, target);
            }
        }
        statObserver.unobserve(entry.target);
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item, .stat-card').forEach(card => {
    statObserver.observe(card);
});
