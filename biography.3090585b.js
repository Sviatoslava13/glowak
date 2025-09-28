const certificateImages = document.querySelectorAll('.certificate-image');
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.querySelector('.close-button');
let currentIndex = 0;
const imageSources = Array.from(certificateImages).map((img)=>img.src);
// Логіка модального вікна для зображень
certificateImages.forEach((img, index)=>{
    img.addEventListener('click', ()=>{
        modal.style.display = 'flex';
        modalImage.src = img.src;
        currentIndex = index;
    });
});
closeButton.addEventListener('click', ()=>{
    modal.style.display = 'none';
});
window.addEventListener('click', (event)=>{
    if (event.target === modal) modal.style.display = 'none';
});
window.addEventListener("keydown", (event)=>{
    if (event.key === "Escape" && modal.style.display === 'flex') modal.style.display = 'none';
});
window.addEventListener("keydown", (event)=>{
    if (modal.style.display === 'flex') {
        if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
            modalImage.src = imageSources[currentIndex];
        } else if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % imageSources.length;
            modalImage.src = imageSources[currentIndex];
        } else if (event.key === "Escape") modal.style.display = 'none';
    }
});
// ====== Функціонал для перемикання мови ======
const translations = {
    uk: {
        pageTitle: "\u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0456\u044F",
        navHome: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
        navAbout: "\u041F\u0440\u043E \u0432\u0447\u0438\u0442\u0435\u043B\u044F",
        navProgram: "\u041D\u0430\u0432\u0447\u0430\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430",
        navTest: "\u0422\u0435\u0441\u0442",
        navMaterials: "\u041C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438",
        langUkrainian: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
        langEnglish: "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430",
        teacherName: "\u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0456\u044F",
        teacherTitle: "\u0412\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457",
        experienceYears: "5 \u0440\u043E\u043A\u0456\u0432 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F",
        experienceBritishSchool: "\u0414\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u0443 \u0411\u0440\u0438\u0442\u0430\u043D\u0441\u044C\u043A\u0456\u0439 \u0448\u043A\u043E\u043B\u0456",
        generalEnglish: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430",
        conversationalEnglish: "\u0420\u043E\u0437\u043C\u043E\u0432\u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430",
        qualificationsTitle: "\u041A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u0430\u0446\u0456\u0457",
        qual1: 'Leadership seminar',
        qual2: 'Emotional intelligence seminar',
        qual3: 'NCFE (Northern Council for Further Education) certificate level 2',
        qual4: 'NCFE (Northern Council for Further Education) certificate level 3',
        qual5: 'Managing classroom conflict training',
        backToHome: "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
        defaultLang: "\u041C\u043E\u0432\u0430",
        optionOne: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
        optionTwo: "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430",
        footerHome: "\u0413\u041E\u041B\u041E\u0412\u041D\u0410",
        footerAbout: "\u041F\u0420\u041E \u0412\u0427\u0418\u0422\u0415\u041B\u042F",
        footerProgram: "\u041D\u0410\u0412\u0427\u0410\u041B\u042C\u041D\u0406 \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u0418",
        footerTest: "\u0422\u0415\u0421\u0422",
        footerMaterials: "\u041C\u0410\u0422\u0415\u0420\u0406\u0410\u041B\u0418",
        footerFAQ: "\u041F\u041E\u0428\u0418\u0420\u0415\u041D\u0406 \u0417\u0410\u041F\u0418\u0422\u0410\u041D\u041D\u042F",
        footerReviews: "\u0412\u0406\u0414\u0413\u0423\u041A\u0418",
        footerContact: "\u0417\u0412\u041E\u0420\u041E\u0422\u041D\u0406\u0419 \u0417\u0412'\u042F\u0417\u041E\u041A",
        footerCopyright: " 2025 \u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0456\u044F \u041C\u0438\u0445\u0430\u0439\u043B\u0456\u0432\u043D\u0430. \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E.",
        footerPrivacyPolicy: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456",
        footerPhone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D +380 96 988 19 22"
    },
    en: {
        pageTitle: 'Anastasiia',
        navHome: 'Home',
        navAbout: 'About Teacher',
        navProgram: 'Study Program',
        navTest: 'Test',
        navMaterials: 'Materials',
        langUkrainian: 'Ukrainian',
        langEnglish: 'English',
        teacherName: 'Anastasiia',
        teacherTitle: 'English Teacher',
        experienceYears: '5 years of teaching',
        experienceBritishSchool: 'Experience working in a British school',
        generalEnglish: 'General English',
        conversationalEnglish: 'Conversational English',
        qualificationsTitle: 'Qualifications',
        qual1: 'Leadership seminar',
        qual2: 'Emotional intelligence seminar',
        qual3: 'NCFE (Northern Council for Further Education) certificate level 2',
        qual4: 'NCFE (Northern Council for Further Education) certificate level 3',
        qual5: 'Managing classroom conflict training',
        backToHome: 'Back to Home Page',
        defaultLang: 'Language',
        optionOne: 'Ukrainian',
        optionTwo: 'English',
        footerHome: "HOME",
        footerAbout: "ABOUT TEACHER",
        footerProgram: "STUDY PROGRAMS",
        footerTest: "TEST",
        footerMaterials: "MATERIALS",
        footerFAQ: "FAQ",
        footerReviews: "REVIEWS",
        footerContact: "FEEDBACK",
        footerCopyright: "2025 Anastasiia Mykhailivna. All rights reserved.",
        footerPrivacyPolicy: "Privacy Policy",
        footerPhone: "Phone +380 96 988 19 22"
    }
};
const langRadioButtons = document.querySelectorAll('input[name="option"]');
const htmlElement = document.querySelector('html');
const selectedLanguageDisplay = document.querySelector('.select .selected');
function updateContent(lang) {
    document.querySelectorAll('[data-lang-key]').forEach((element)=>{
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) element.textContent = translations[lang][key];
    });
    if (translations[lang]) {
        selectedLanguageDisplay.setAttribute('data-default', translations[lang]['defaultLang']);
        selectedLanguageDisplay.setAttribute('data-one', translations[lang]['optionOne']);
        selectedLanguageDisplay.setAttribute('data-two', translations[lang]['optionTwo']);
    }
    const backButton = document.querySelector('.certificates a');
    if (backButton && translations[lang] && translations[lang]['backToHome']) backButton.textContent = translations[lang]['backToHome'];
}
function setLanguage(lang) {
    htmlElement.lang = lang;
    localStorage.setItem('lang', lang);
    updateContent(lang);
    if (lang === 'uk') selectedLanguageDisplay.textContent = translations.uk.optionOne;
    else if (lang === 'en') selectedLanguageDisplay.textContent = translations.en.optionTwo;
    else selectedLanguageDisplay.textContent = translations[localStorage.getItem('lang')] ? translations[localStorage.getItem('lang')].defaultLang : translations.uk.defaultLang;
    langRadioButtons.forEach((radio)=>{
        radio.checked = radio.value === lang;
    });
}
document.addEventListener('DOMContentLoaded', ()=>{
    const savedLang = localStorage.getItem('lang') || 'uk';
    setLanguage(savedLang);
});
langRadioButtons.forEach((radio)=>{
    radio.addEventListener('change', (event)=>{
        setLanguage(event.target.value);
    });
});
const selectBox = document.querySelector('.select');
const optionsBox = document.querySelector('.options');
const selectedOption = document.querySelector('.select .selected');
selectBox.addEventListener('click', ()=>{
    optionsBox.classList.toggle('active');
    selectBox.classList.toggle('active');
});
optionsBox.querySelectorAll('input[type="radio"]').forEach((radio)=>{
    radio.addEventListener('change', (e)=>{
        setLanguage(e.target.value);
        optionsBox.classList.remove('active');
        selectBox.classList.remove('active');
    });
});
//ТЕМНА ТЕМА
document.addEventListener('DOMContentLoaded', ()=>{
    const checkbox = document.querySelector('.toggle-switch .checkbox');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') checkbox.checked = true;
    }
    checkbox.addEventListener('change', ()=>{
        if (checkbox.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
const sections = document.querySelectorAll("section, .profile-section, .qualification-section");
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", ()=>{
    let current = "";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach((link)=>{
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
});

//# sourceMappingURL=biography.3090585b.js.map
