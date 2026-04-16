document.addEventListener('DOMContentLoaded', () => {
    
    const buyButton = document.getElementById('buyTicketBtn');
    const guestTicketBtn = document.getElementById('guestTicketBtn');
    
    function showNotification(message) {
        let existingToast = document.querySelector('.custom-toast');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.textContent = message;
        
        const isMobile = window.innerWidth < 600;
        
        toast.style.position = 'fixed';
        toast.style.bottom = isMobile ? '15px' : '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#5e1a1a';
        toast.style.border = '2px solid #d4a017';
        toast.style.color = '#ffefc0';
        toast.style.padding = isMobile ? '10px 20px' : '14px 32px';
        toast.style.borderRadius = '40px';
        toast.style.fontFamily = "'Minecraft Rus', monospace";
        toast.style.fontWeight = 'bold';
        toast.style.fontSize = isMobile ? '0.85rem' : '1.1rem';
        toast.style.zIndex = '9999';
        toast.style.boxShadow = '0 0 25px rgba(212,160,23,0.6)';
        toast.style.textAlign = 'center';
        toast.style.maxWidth = isMobile ? '90%' : 'auto';
        toast.style.whiteSpace = isMobile ? 'normal' : 'nowrap';
        toast.style.lineHeight = '1.4';
        
        document.body.appendChild(toast);
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.2s';
        setTimeout(() => { toast.style.opacity = '1'; }, 10);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 200);
        }, 3000);
    }
    
    if (buyButton) {
        buyButton.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Билет в мир MineShield забронирован! Алмазная кирка ждёт!');
            if (navigator.vibrate) navigator.vibrate(50);
        });
    }
    
    if (guestTicketBtn) {
        guestTicketBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('🎮 Билет на MineShield Fest успешно добавлен! Добро пожаловать! 🎮');
            if (navigator.vibrate) navigator.vibrate(50);
        });
    }
    
    const navBuyLink = document.querySelector('.nav-link--accent');
    if (navBuyLink) {
        navBuyLink.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Жми на главную оранжевую кнопку, чтобы попасть на фестиваль!');
        });
    }
    
    window.addEventListener('resize', () => {
        const toast = document.querySelector('.custom-toast');
        if (toast) {
            const isMobileNow = window.innerWidth < 600;
            toast.style.fontSize = isMobileNow ? '0.85rem' : '1.1rem';
            toast.style.padding = isMobileNow ? '10px 20px' : '14px 32px';
            toast.style.bottom = isMobileNow ? '15px' : '30px';
            toast.style.maxWidth = isMobileNow ? '90%' : 'auto';
            toast.style.whiteSpace = isMobileNow ? 'normal' : 'nowrap';
        }
    });
    
    const streamers = [
    { name: "Alcest_M", img: "ALCEST_M.jpg", twitch: "https://www.twitch.tv/alcest_m", tg: "https://t.me/alcest_m" },
    { name: "Alfedov", img: "Alfedov.jpg", twitch: "https://www.twitch.tv/alfedov", tg: "https://t.me/alfedovgroup" },
    { name: "BarisGold", img: "BarisGold.jpg", twitch: "https://www.twitch.tv/barsigold", tg: "https://t.me/barsigold" },
    { name: "Bez_LS", img: "Bez_LS.jpg", twitch: "https://www.twitch.tv/bez_ls", tg: "https://t.me/bez_ls" },
    { name: "CapXenomorph", img: "CapXenomorph.jpg", twitch: "https://www.twitch.tv/capxenomorph", tg: "https://t.me/capxen" },
    { name: "DEB", img: "DEB.jpg", twitch: "https://www.twitch.tv/deb_off", tg: "https://t.me/debanimation" },
    { name: "Dushenka", img: "Dushenka.jpg", twitch: "https://www.twitch.tv/dushenka", tg: "https://t.me/tdushenka" },
    { name: "Gel_mo", img: "Gel_mo.jpg", twitch: "https://m.twitch.tv/gelmoo", tg: "https://t.me/gelmoshka" },
    { name: "HeO", img: "HeO.jpg", twitch: "https://www.twitch.tv/heo_3km", tg: "https://t.me/heo_3km" },
    { name: "Jay Pokerman", img: "jay-pokerman.jpg", twitch: "https://www.twitch.tv/jaypokerman" },
    { name: "KlashRaick", img: "KlashRaick.jpg", twitch: "https://www.twitch.tv/klashraick", tg: "https://t.me/klasholand" },
    { name: "Leosha", img: "Leosha.jpg", twitch: "https://www.twitch.tv/leoshaya", tg: "https://t.me/leoshaya" },
    { name: "MoDDyChat", img: "MoDDyChat.jpg", twitch: "https://www.twitch.tv/moddychat", tg: "https://t.me/moddychat" },
    { name: "Mo1vine", img: "Mo1vine.jpg", twitch: "https://www.twitch.tv/molvine", tg: "https://t.me/mo1vine" },
    { name: "NikiWright", img: "NikiWright.jpg", twitch: "https://www.twitch.tv/nikiwrightg", tg: "https://t.me/nikiwg" },
    { name: "SecB", img: "SecB.jpg", twitch: "https://www.twitch.tv/secboba", tg: "https://t.me/secb_here" },
    { name: "SnrGiraffe", img: "SnrGiraffe.jpg", twitch: "https://twitch.tv/snrgiraffe" },
    { name: "TheKlyde", img: "TheKlyde.jpg", twitch: "https://www.twitch.tv/the_klyde", tg: "https://t.me/thekyde" }
];

const grid = document.getElementById('streamersGrid');

if (grid) {
    streamers.forEach(s => {
        const card = document.createElement('div');
        card.className = 'streamer-card';

        card.innerHTML = `
            <img src="images/${s.img}" class="streamer-img" alt="${s.name}">
            
            <div class="streamer-links">
                <a href="${s.twitch}" target="_blank">Twitch</a>
                ${s.tg ? `<a href="${s.tg}" target="_blank">Telegram</a>` : ''}
            </div>
        `;

        grid.appendChild(card);
    });
}

// FAQ аккордеон
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Закрыть все другие вопросы (опционально)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Переключить текущий вопрос
            item.classList.toggle('active');
        });
    });
});

const activities = [...document.querySelectorAll('.activity')];
const image = document.getElementById('activityImage');
const section = document.querySelector('.activities-section');
const activitiesPanel = document.querySelector('.activities-left');
const activityImageArea = document.querySelector('.activities-right');

const images = [
    "images/Konf.jpg",
    "images/Kospleer.png",
    "images/Merch.jpg",
    "images/interact.png",
    "images/Photo.jpg"
];

const MOBILE_BREAKPOINT = 768;
let currentIndex = 0;
let ticking = false;
let touchStartX = 0;
let touchDeltaX = 0;

function isMobileActivities() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
}

function keepActiveTabVisible() {
    if (!isMobileActivities() || !activitiesPanel || !activities[currentIndex]) return;

    activities[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
}

function setActiveActivity(index) {
    if (!activities.length || !image) return;
    if (index < 0 || index >= activities.length) return;

    currentIndex = index;

    activities.forEach((el, i) => {
        el.classList.toggle('active', i === currentIndex);
    });

    const nextSrc = images[currentIndex];
    if (!nextSrc) return;

    if (!image.src.includes(nextSrc)) {
        image.style.opacity = 0;
        setTimeout(() => {
            image.src = nextSrc;
            image.style.opacity = 1;
        }, 150);
    }

    keepActiveTabVisible();
}

function updateActivityByScroll() {
    if (isMobileActivities() || !section || !activities.length) return;

    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const maxScrollable = sectionHeight - windowHeight;

    if (maxScrollable <= 0) {
        setActiveActivity(0);
        return;
    }

    let scrollProgress = (window.scrollY - section.offsetTop) / maxScrollable;
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    let newIndex = Math.floor(scrollProgress * activities.length);
    if (newIndex >= activities.length) newIndex = activities.length - 1;

    if (newIndex !== currentIndex) {
        setActiveActivity(newIndex);
    }
}

function setupMobileActivitySwipe() {
    if (!activityImageArea) return;

    activityImageArea.addEventListener('touchstart', (event) => {
        if (!isMobileActivities()) return;
        touchStartX = event.touches[0].clientX;
        touchDeltaX = 0;
    }, { passive: true });

    activityImageArea.addEventListener('touchmove', (event) => {
        if (!isMobileActivities()) return;
        touchDeltaX = event.touches[0].clientX - touchStartX;
    }, { passive: true });

    activityImageArea.addEventListener('touchend', () => {
        if (!isMobileActivities()) return;
        if (Math.abs(touchDeltaX) < 40) return;

        if (touchDeltaX < 0) {
            setActiveActivity(Math.min(currentIndex + 1, activities.length - 1));
        } else {
            setActiveActivity(Math.max(currentIndex - 1, 0));
        }
    });
}

activities.forEach((activity, index) => {
    activity.addEventListener('click', () => {
        setActiveActivity(index);

        if (isMobileActivities() || !section) return;

        const maxScroll = section.offsetHeight - window.innerHeight;
        const segmentHeight = maxScroll / activities.length;
        const targetY = section.offsetTop + (segmentHeight * index) + (segmentHeight / 2);

        window.scrollTo({
            top: targetY,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    if (isMobileActivities()) return;

    if (!ticking) {
        requestAnimationFrame(() => {
            updateActivityByScroll();
            ticking = false;
        });
        ticking = true;
    }
});

window.addEventListener('resize', () => {
    if (isMobileActivities()) {
        setActiveActivity(currentIndex);
    } else {
        updateActivityByScroll();
    }
});

setupMobileActivitySwipe();

setTimeout(() => {
    setActiveActivity(0);
    updateActivityByScroll();
}, 100);