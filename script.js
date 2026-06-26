// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Set active link based on current page
    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);
    window.addEventListener('scroll', updateActiveLink);
    // Load main page notices (latest 3)
    loadMainNotices();
});

// Update active navigation link
function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = '#' + section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Load latest 3 notices for main page from notices/data.json
async function loadMainNotices() {
    try {
        const res = await fetch('notices/data.json');
        if (!res.ok) return;
        const data = await res.json();
        const notices = Array.isArray(data.notices) ? data.notices : [];
        const latestNotices = notices
            .slice()
            .sort((a, b) => Number(b.id) - Number(a.id))
            .slice(0, 3);
        const container = document.getElementById('mainNoticeList');
        if (!container) return;
        container.innerHTML = '';
        latestNotices.forEach(n => {
            // create a clickable card that navigates to detail page when tapped
            const cardLink = document.createElement('a');
            cardLink.className = 'notice-card-link';
            cardLink.href = n.detailPage ? ('notices/' + n.detailPage) : '#';
            const item = document.createElement('div');
            item.className = 'notice-item';
            // preview may contain HTML (a, strong, etc.)
            item.innerHTML = n.preview || '';
            cardLink.appendChild(item);
            container.appendChild(cardLink);
        });
    } catch (e) {
        console.error('Failed to load notices:', e);
    }
}

// Access Counter (placeholder)
// In production, this would communicate with XServer
document.addEventListener('DOMContentLoaded', function() {
    const counterText = document.getElementById('accessCounterText');
    if (counterText) {
        // Placeholder: Show a demo count
        const demoCount = Math.floor(Math.random() * 1000) + 100;
        const counterSpan = document.getElementById('counter');
        if (counterSpan) {
            counterSpan.textContent = demoCount;
        }
    }
});

// Smooth scroll for anchor links (fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// サブナビの位置をメインnavbarの高さに動的に合わせる
function adjustSubNavbar() {
    const navbar = document.querySelector('.navbar');
    const subNavbar = document.querySelector('.sub-navbar');
    
    if (navbar && subNavbar) {
        const navHeight = navbar.offsetHeight;
        subNavbar.style.top = `${navHeight}px`;
        
        // scroll-paddingも動的に調整
        document.documentElement.style.scrollPaddingTop = `${navHeight + subNavbar.offsetHeight + 10}px`;
    }
}

// ページ読み込み時 + リサイズ時
window.addEventListener('load', adjustSubNavbar);
window.addEventListener('resize', adjustSubNavbar);

// 念のため少し遅らせて再調整（画像読み込み後など）
setTimeout(adjustSubNavbar, 300);