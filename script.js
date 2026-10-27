let currentLang = localStorage.getItem('wlf_lang') || 'fa';
let currentTheme = localStorage.getItem('wlf_theme') || 'dark';

// آدرس استخر DeDust و متغیر قیمت زنده
const DEDUST_POOL_ADDRESS = "EQC-M-HKtgd0kQ8pyQqn_tQXeV376KS-5lhuelzlzUWWhdQu";
const DEDUST_API_URL = `https://api.dedust.io/v2/pools/${DEDUST_POOL_ADDRESS}`;
let currentPoolPrice = 0.000001135;

// Idea 5: Haptic Feedback Helper
function triggerHaptic(ms = 35) {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(ms);
    }
}

// دیکشنری ترجمه‌ها (شامل کلیدهای جدید محاسبه‌گر)
const translations = {
    fa: {
        navHome: "صفحه اصلی",
        navChart: "نمودار و بازار",
        navTokenomics: "توکنومیکس",
        navRoadmap: "نقشه راه",
        navWhitepaper: "وایت‌پیپر",
        walletBtn: "اتصال کیف پول",
        heroBadge: "پلتفرم رسمی اطلاعات و معاملات توکن WLF",
        heroTitlePart1: "اکوسیستم مالی توکن",
        heroDesc: "دسترسی به آمار لحظه‌ای بازار، بررسی داده‌های زنجیره‌ای و زیرساخت امن برای فعالان بازار رمزارز.",
        copyBtn: "کپی آدرس",
        copySuccess: "کپی شد!",
        heroBtnChart: "مشاهده نمودار و قیمت",
        poolBtn: "استخر نقدینگی DeDust",
        chartTitle: "آمار زنده استخر DeDust",
        chartDesc: "اطلاعات دقیق و لحظه‌ای از استخر نقدینگی WLF/GRAM",
        stat1: "نرخ تبدیل (GRAM)",
        stat1Sub: "بروزرسانی زنده DeDust",
        stat2: "حجم معاملات (۲۴ ساعته)",
        stat2Sub: "فعالیت استخر",
        stat3: "کل نقدینگی (Liquidity)",
        stat3Sub: "ارزش دارایی استخر",
        stat4: "قفل‌شده (Permanently Locked)",
        stat4Sub: "امنیت قرارداد",
        swapTitle: "محاسبه‌گر آنی تبدیل توکن",
        swapFrom: "مقدار WLF",
        swapTo: "معادل تقریبی (GRAM)",
        chartBoxTitle: "روند تغییرات قیمت استخر",
        btn24h: "۲۴ ساعت",
        btn7d: "۷ روز",
        btn1m: "۱ ماه",
        tokenomicsTitle: "توکنومیکس",
        tokenomicsDesc: "ساختار شفاف و مدیریت توزیع دارایی‌ها",
        tBox1Title: "سقف عرضه کل",
        tBox1Desc: "حداکثر تعداد توکن‌های قابل استخراج/عرضه",
        tBox2Title: "استخر نقدینگی (LP)",
        tBox2Val: "DeDust.io",
        tBox2Desc: "تضمین‌شده در صرافی غیرمتمرکز",
        tBox3Title: "شبکه میزبان",
        tBox3Desc: "مبتنی بر استانداردهای شبکه",
        roadmapTitle: "نقشه راه",
        roadmapSub: "پروژه",
        roadmapDesc: "مراحل توسعه و چشم‌انداز آینده WLFGRAM",
        r1Title: "فاز اول: توسعه زیرساخت و راه‌اندازی",
        r1Desc: "استقرار قرارداد هوشمند روی بستر شبکه، شکل‌گیری پایگاه اولیه و معرفی به جامعه هدف.",
        r2Title: "فاز دوم: لیست شدن و تأمین نقدینگی",
        r2Desc: "عرضه در صرافی‌های مختلف، فعال‌سازی استخرهای نقدینگی و رصد داده‌های معاملاتی.",
        r3Title: "فاز سوم: توسعه ابزار تحلیل و اکوسیستم",
        r3Desc: "گسترش قابلیت‌های تحلیلی، بهبود ابزارهای رصد بازار و ایجاد قابلیت‌های پیشرفته کاربری.",
        whitepaperTitle: "وایت‌پیپر رسمی",
        whitepaperDesc: "برای آشنایی کامل با اهداف، معماری فنی، توکنومیکس دقیق و چشم‌انداز آینده پروژه، می‌توانید وایت‌پیپر رسمی ما را مطالعه یا دانلود کنید.",
        wpBtnDownload: "دانلود وایت‌پیپر (PDF)",
        footerCopy: "WLFGRAM ($WLF) - تمامی حقوق محفوظ است.",
        modalTitle: "انتخاب کیف پول"
    },
    en: {
        navHome: "Home",
        navChart: "Market & Chart",
        navTokenomics: "Tokenomics",
        navRoadmap: "Roadmap",
        navWhitepaper: "Whitepaper",
        walletBtn: "Connect Wallet",
        heroBadge: "Official WLF Token Info & Trading Platform",
        heroTitlePart1: "Financial Ecosystem Token",
        heroDesc: "Real-time market stats, on-chain data analysis, and secure infrastructure for crypto traders.",
        copyBtn: "Copy Address",
        copySuccess: "Copied!",
        heroBtnChart: "View Chart & Price",
        poolBtn: "DeDust Liquidity Pool",
        chartTitle: "DeDust Live Pool Stats",
        chartDesc: "Real-time and accurate data from WLF/GRAM liquidity pool",
        stat1: "Exchange Rate (GRAM)",
        stat1Sub: "DeDust Live Update",
        stat2: "24h Volume",
        stat2Sub: "Pool Activity",
        stat3: "Total Liquidity",
        stat3Sub: "Pool Asset Value",
        stat4: "Permanently Locked",
        stat4Sub: "Contract Security",
        swapTitle: "Instant Token Swap Calculator",
        swapFrom: "WLF Amount",
        swapTo: "Estimated (GRAM)",
        chartBoxTitle: "Pool Price Trend",
        btn24h: "24 Hours",
        btn7d: "7 Days",
        btn1m: "1 Month",
        tokenomicsTitle: "Tokenomics",
        tokenomicsDesc: "Transparent structure and asset distribution management",
        tBox1Title: "Total Supply Cap",
        tBox1Desc: "Maximum mintable/issuable token amount",
        tBox2Title: "Liquidity Pool (LP)",
        tBox2Val: "DeDust.io",
        tBox2Desc: "Secured on decentralized exchange",
        tBox3Title: "Host Network",
        tBox3Desc: "Built on network standards",
        roadmapTitle: "Roadmap",
        roadmapSub: "Project",
        roadmapDesc: "Development phases and future vision of WLFGRAM",
        r1Title: "Phase 1: Infrastructure & Launch",
        r1Desc: "Deploying smart contract, building initial community base, and project introduction.",
        r2Title: "Phase 2: Listing & Liquidity",
        r2Desc: "Listing on various exchanges, activating liquidity pools, and tracking trade data.",
        r3Title: "Phase 3: Analytics Tools & Ecosystem",
        r3Desc: "Expanding analytical capabilities, improving market tracking tools, and advanced features.",
        whitepaperTitle: "Official Whitepaper",
        whitepaperDesc: "To fully understand the goals, technical architecture, tokenomics, and future vision of the project, you can download or read our official whitepaper.",
        wpBtnDownload: "Download Whitepaper (PDF)",
        footerCopy: "WLFGRAM ($WLF) - All rights reserved.",
        modalTitle: "Select Wallet"
    }
};

function applyTranslations() {
    const t = translations[currentLang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.innerText = currentLang === 'fa' ? 'EN' : 'FA';
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    triggerHaptic(20);
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    if (!mobileMenu || !menuIcon) return;
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.className = "fa-solid fa-xmark";
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.className = "fa-solid fa-bars";
    }
}

// Theme Toggle
function toggleTheme() {
    triggerHaptic(30);
    const body = document.getElementById('bodyTag');
    const themeIcon = document.getElementById('themeIcon');
    if (!body || !themeIcon) return;
    
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('wlf_theme', currentTheme);
    
    if (currentTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.className = "fa-solid fa-sun";
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.className = "fa-solid fa-moon";
    }
}

// Language Toggle
function toggleLanguage() {
    triggerHaptic(30);
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    localStorage.setItem('wlf_lang', currentLang);
    
    const htmlTag = document.getElementById('htmlTag');
    const roadmapLine = document.getElementById('roadmapLine');
    if (!htmlTag || !roadmapLine) return;
    
    if (currentLang === 'en') {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        document.body.style.fontFamily = "'Inter', sans-serif";
        roadmapLine.className = "space-y-8 border-l-2 border-purple-500/30 pl-6 ml-3 md:ml-4 roadmap-timeline-container";
    } else {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'fa');
        document.body.style.fontFamily = "'Vazirmatn', sans-serif";
        roadmapLine.className = "space-y-8 border-r-2 border-purple-500/30 pr-6 mr-3 md:mr-4 roadmap-timeline-container";
    }

    applyTranslations();
    calculateSwap();
}

// Idea 1: Quick Swap Calculator Logic
function calculateSwap() {
    const input = document.getElementById('swapInputWlf');
    const output = document.getElementById('swapOutputGram');
    if (!input || !output) return;

    const val = parseFloat(input.value) || 0;
    const result = val * currentPoolPrice;
    output.innerText = result.toFixed(8) + " GRAM";
}

// Fetch DeDust Pool Data & Update Price
async function fetchDeDustPoolData() {
    try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(DEDUST_API_URL)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Network error');
        
        const pool = await response.json();
        if (pool) {
            let priceVal = pool.stats?.price || pool.price || 0;
            if (priceVal > 0) {
                currentPoolPrice = parseFloat(priceVal);
                const priceEl = document.getElementById('livePrice');
                if (priceEl) priceEl.innerText = `${currentPoolPrice.toFixed(8)} GRAM`;
                calculateSwap();
            }

            let volumeVal = pool.volumeUSD?.h24 || pool.stats?.volumeUSD?.h24 || pool.stats?.volumeUSD || 0;
            const volEl = document.getElementById('liveVolume');
            if (volEl) volEl.innerText = `$${Number(volumeVal).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

            let liquidityVal = pool.liquidityUSD || pool.stats?.tvlUSD || pool.tvlUSD || 0;
            const mcEl = document.getElementById('liveMarketCap');
            if (mcEl) mcEl.innerText = `$${Number(liquidityVal).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }
    } catch (error) {
        console.warn("آفلاین یا عدم دسترسی به API:", error);
    }
}

// Idea 2: TON Connect UI Initialization
let tonConnectUI = null;
if (typeof TON_CONNECT_UI !== 'undefined') {
    try {
        tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://raw.githubusercontent.com/ton-connect/docs/main/public/tonconnect-manifest.json',
            uiPreferences: { theme: TON_CONNECT_UI.THEME.DARK }
        });
    } catch (e) {
        console.log("TON Connect UI Init Notice:", e);
    }
}

const POOL_OR_CONTRACT_ADDRESS = "EQC-M-HKtgd0kQ8pyQqn_tQXeV376KS-5lhuelzlzUWWhdQu";
function connectWallet(walletType) {
    triggerHaptic(40);
    closeWalletModal();
    if (walletType === 'tonkeeper') {
        window.open(`https://app.tonkeeper.com/transfer?to=${POOL_OR_CONTRACT_ADDRESS}`, '_blank');
    } else if (walletType === 'telegram') {
        window.open(`https://t.me/wallet`, '_blank');
    }
}

// Idea 4: Modern Quick Copy Feedback (No Alert)
function copyContract() {
    triggerHaptic(50);
    const contractAddr = document.getElementById('contractText');
    if (!contractAddr) return;
    
    navigator.clipboard.writeText(contractAddr.innerText).then(() => {
        const btn = document.getElementById('copyBtnElement');
        const btnText = btn.querySelector('.copy-btn-text');
        const btnIcon = btn.querySelector('i');
        
        if (btnText && btnIcon) {
            const originalText = btnText.innerText;
            const originalIcon = btnIcon.className;
            
            btnText.innerText = translations[currentLang].copySuccess || "کپی شد!";
            btnIcon.className = "fa-solid fa-check text-emerald-400";
            
            setTimeout(() => {
                btnText.innerText = originalText;
                btnIcon.className = originalIcon;
            }, 2000);
        }
    });
}

function openWalletModal() {
    triggerHaptic(30);
    const modal = document.getElementById('walletModal');
    if (modal) modal.classList.remove('hidden');
}
function closeWalletModal() {
    triggerHaptic(20);
    const modal = document.getElementById('walletModal');
    if (modal) modal.classList.add('hidden');
}

// Chart.js Setup
const chartCanvas = document.getElementById('priceChart');
let priceChart = null;

if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['۰۸:۰۰', '۱۲:۰۰', '۱۶:۰۰', '۲۰:۰۰', '۰۰:۰۰', '۰۴:۰۰', 'اکنون'],
            datasets: [{
                label: 'روند قیمت استخر',
                data: [0.00000110, 0.00000111, 0.00000112, 0.00000112, 0.00000113, 0.00000113, 0.000001135],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af', font: { size: 10 } } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af', font: { size: 10 } } }
            }
        }
    });
}

function updateChart(period) {
    triggerHaptic(25);
    ['btn-24h', 'btn-7d', 'btn-1m'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.className = "flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg glass-panel hover:bg-purple-600/30 transition text-gray-300";
    });

    if (!priceChart) return;

    if(period === '24h') {
        const btn = document.getElementById('btn-24h');
        if (btn) btn.className = "flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg bg-purple-600 text-white transition";
        priceChart.data.labels = currentLang === 'fa' ? ['۰۸:۰۰', '۱۲:۰۰', '۱۶:۰۰', '۲۰:۰۰', '۰۰:۰۰', '۰۴:۰۰', 'اکنون'] : ['08:00', '12:00', '16:00', '20:00', '00:00', '04:00', 'Now'];
    } else if(period === '7d') {
        const btn = document.getElementById('btn-7d');
        if (btn) btn.className = "flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg bg-purple-600 text-white transition";
        priceChart.data.labels = currentLang === 'fa' ? ['روز اول', 'روز دوم', 'روز سوم', 'روز چهارم', 'روز پنجم', 'روز ششم', 'امروز'] : ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Today'];
    } else if(period === '1m') {
        const btn = document.getElementById('btn-1m');
        if (btn) btn.className = "flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg bg-purple-600 text-white transition";
        priceChart.data.labels = currentLang === 'fa' ? ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم'] : ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    }
    priceChart.update();
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const bodyTag = document.getElementById('bodyTag');
    const htmlTag = document.getElementById('htmlTag');
    const roadmapLine = document.getElementById('roadmapLine');
    const themeIcon = document.getElementById('themeIcon');

    if (bodyTag) {
        bodyTag.classList.remove('dark-theme', 'light-theme');
        bodyTag.classList.add(`${currentTheme}-theme`);
    }
    if (themeIcon) {
        themeIcon.className = currentTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }

    if (currentLang === 'en' && htmlTag && roadmapLine) {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        document.body.style.fontFamily = "'Inter', sans-serif";
        roadmapLine.className = "space-y-8 border-l-2 border-purple-500/30 pl-6 ml-3 md:ml-4 roadmap-timeline-container";
    }

    applyTranslations();
    fetchDeDustPoolData();
    calculateSwap();
    setInterval(fetchDeDustPoolData, 30000);
});