//ПІДРУЧНИКИ
const ACCESS_CODE = "12345";
const books = [
    {
        name: "travel english.pdf",
        id: "1MQ6rkUdMH9MT8ojsucFCDS77Q9hqwm5Z",
        size: 6784338,
        url: "https://drive.google.com/file/d/1MQ6rkUdMH9MT8ojsucFCDS77Q9hqwm5Z/view"
    },
    {
        name: "English for Everyone. English Idioms (2).pdf",
        id: "1QaiVQaPlq3wWHWw0YEKDzG0EVYZe40Tk",
        size: 19166038,
        url: "https://drive.google.com/file/d/1QaiVQaPlq3wWHWw0YEKDzG0EVYZe40Tk/view"
    },
    {
        name: "English for Everyone. Vocabulary Builder (2).pdf",
        id: "1kxUNotxa7vw2EnyDvA_GjVHFKpr2_FuD",
        size: 28269939,
        url: "https://drive.google.com/file/d/1kxUNotxa7vw2EnyDvA_GjVHFKpr2_FuD/view"
    },
    {
        name: "English for Everyone. Grammar Guide (2).pdf",
        id: "1bvWuoyPLSoXw9DCvYdSqDzkQVpHJ2iEU",
        size: 25310798,
        url: "https://drive.google.com/file/d/1bvWuoyPLSoXw9DCvYdSqDzkQVpHJ2iEU/view"
    },
    {
        name: "English for Everyone. Phrasal Verbs (2).pdf",
        id: "19o77muLi4GaRKRiGGMOiEH5Vsyor4nkE",
        size: 38398336,
        url: "https://drive.google.com/file/d/19o77muLi4GaRKRiGGMOiEH5Vsyor4nkE/view"
    },
    {
        name: "English for Everyone. Grammar Guide. Practice Book.pdf",
        id: "1BxWUSNTiOf0ZH9t9XOicqFDx-qPU4Tia",
        size: 22817790,
        url: "https://drive.google.com/file/d/1BxWUSNTiOf0ZH9t9XOicqFDx-qPU4Tia/view"
    },
    {
        name: "GG4 Workbook (2).pdf",
        id: "1VazfiLCxzwjdLxf8fcz-pDc-L6iqs6Sk",
        size: 22817790,
        url: "https://drive.google.com/file/d/1VazfiLCxzwjdLxf8fcz-pDc-L6iqs6Sk/view"
    },
    {
        name: "GG1 Student's Book.pdf",
        id: "13ARj4HVLSI7MHQN82szMSnnbAtDAM6Vs",
        size: 22817790,
        url: "https://drive.google.com/file/d/13ARj4HVLSI7MHQN82szMSnnbAtDAM6Vs/view"
    },
    {
        name: "GG2 Student's Book.pdf",
        id: "1GDyY1JRawd7USW23uWmRnPiU1sZ66yaH",
        size: 22817790,
        url: "https://drive.google.com/file/d/1GDyY1JRawd7USW23uWmRnPiU1sZ66yaH/view"
    },
    {
        name: "GG2 Student's Book.pdf",
        id: "1jTqibchB1doh80r8RauCH_D0x-pUbz1k",
        size: 22817790,
        url: "https://drive.google.com/file/d/1jTqibchB1doh80r8RauCH_D0x-pUbz1k/view"
    },
    {
        name: "Solutions Elementary 3rd Workbook (2).pdf",
        id: "1h_jRNJDWtU1Jm4F0HgeQTo9No-dSUSHO",
        size: 22817790,
        url: "https://drive.google.com/file/d/1h_jRNJDWtU1Jm4F0HgeQTo9No-dSUSHO/view"
    },
    {
        name: "Solutions Pre-Int.3rd Student's Book (2).pdf",
        id: "11Ivg-O5LtgJHXZHGSyCHvt55CyVAz7FJ",
        size: 22817790,
        url: "https://drive.google.com/file/d/11Ivg-O5LtgJHXZHGSyCHvt55CyVAz7FJ/view"
    },
    {
        name: "Solutions Pre-Int.3rd Workbook (2).pdf",
        id: "169dRHyAILSwcqjgL-F8IIWWs4ouGVqnz",
        size: 22817790,
        url: "https://drive.google.com/file/d/169dRHyAILSwcqjgL-F8IIWWs4ouGVqnz/view"
    },
    {
        name: "Solutions Inter.3rd Student's Book (2).pdf",
        id: "1O1hFBJNpqW5JqqjihijzlJSCjWwjxVyZ",
        size: 22817790,
        url: "https://drive.google.com/file/d/1O1hFBJNpqW5JqqjihijzlJSCjWwjxVyZ/view"
    },
    {
        name: "Solutions Inter.3rd Student's Book (2).pdf",
        id: "1cLsFMDucoLpaMvzJvl1L7sU7eUNGZhy9",
        size: 22817790,
        url: "https://drive.google.com/file/d/1cLsFMDucoLpaMvzJvl1L7sU7eUNGZhy9/view"
    },
    {
        name: "Solutions Elementary 3rd Student's Book (2).pdf",
        id: "1f355INMsq5MdgdK7j1GsWJCkW9Lr8ZZE",
        size: 22817790,
        url: "https://drive.google.com/file/d/1f355INMsq5MdgdK7j1GsWJCkW9Lr8ZZE/view"
    },
    {
        name: "SpeakOut A1 3rd Workbook.pdf",
        id: "1bc8udLiVR5QOm-NjrpqQ9Ogk413uYFlV",
        size: 22817790,
        url: "https://drive.google.com/file/d/1bc8udLiVR5QOm-NjrpqQ9Ogk413uYFlV/view"
    },
    {
        name: "AEF 3rd 5 Workbook.pdf",
        id: "1gkWyN3vunnxuahVSQh3MmDlkpSzYXAOL",
        size: 22817790,
        url: "https://drive.google.com/file/d/1gkWyN3vunnxuahVSQh3MmDlkpSzYXAOL/view"
    },
    {
        name: "AEF 3rd 4 Workbook.pdf",
        id: "1R_GnBJoTH0mX9InbH44_zTKYscAyfuEQ",
        size: 22817790,
        url: "https://drive.google.com/file/d/1R_GnBJoTH0mX9InbH44_zTKYscAyfuEQ/view"
    },
    {
        name: "AEF 3rd 3 Workbook.pdf",
        id: "1_rM5VKg81mmhGuKpKXYA83B82DDiNUwV",
        size: 22817790,
        url: "https://drive.google.com/file/d/1_rM5VKg81mmhGuKpKXYA83B82DDiNUwV/view"
    },
    {
        name: "AEF 3rd 1 Stud.Book.pdf",
        id: "1XfXDK6S87Nm8Js-mTo9rIB8NweYyrGQ8",
        size: 22817790,
        url: "https://drive.google.com/file/d/1XfXDK6S87Nm8Js-mTo9rIB8NweYyrGQ8/view"
    },
    {
        name: "AEF 3rd 1 Workbook.pdf",
        id: "1dMd4C03A9BgR3hG9XX5stjCAWYVVyT3H",
        size: 22817790,
        url: "https://drive.google.com/file/d/1dMd4C03A9BgR3hG9XX5stjCAWYVVyT3H/view"
    },
    {
        name: "EF4th Intermediate Workbook (2).pdf",
        id: "1L5CY_fhluZBQ1JmJYVp_TexY2R5HSiAL",
        size: 22817790,
        url: "https://drive.google.com/file/d/1L5CY_fhluZBQ1JmJYVp_TexY2R5HSiAL/view"
    },
    {
        name: "EF4th Pre-Intermediate Student's Book (2).pdf",
        id: "1WImYG7vBIUyP6n4BzZuDxZ0SF3vWgCYj",
        size: 22817790,
        url: "https://drive.google.com/file/d/1WImYG7vBIUyP6n4BzZuDxZ0SF3vWgCYj/view"
    },
    {
        name: "EF4th Pre-Intermediate Workbook.pdf",
        id: "1QWtnWp1iaPbzTOswT6Zwgd-Wrm39uAXs",
        size: 22817790,
        url: "https://drive.google.com/file/d/1QWtnWp1iaPbzTOswT6Zwgd-Wrm39uAXs/view"
    },
    {
        name: "EF4th Elementary Workbook.pdf",
        id: "1kk-Zi7kpm8GNaBcRaW1cye-OkuUIw4cV",
        size: 22817790,
        url: "https://drive.google.com/file/d/1kk-Zi7kpm8GNaBcRaW1cye-OkuUIw4cV/view"
    },
    {
        name: "EF4th Beginner Workbook.pdf",
        id: "1ocMkI5geYDcfRIrRWPrWEoIkbeyqzG-q",
        size: 22817790,
        url: "https://drive.google.com/file/d/1ocMkI5geYDcfRIrRWPrWEoIkbeyqzG-q/view"
    },
    {
        name: "SpeakOut A2 3rd Workbook.pdf",
        id: "1CZPw2US9-UXxtNSffC6TCdfRabraZFiQ",
        size: 22817790,
        url: "https://drive.google.com/file/d/1CZPw2US9-UXxtNSffC6TCdfRabraZFiQ/view"
    },
    {
        name: "EF4th Upper-Intermediate Workbook.pdf",
        id: "1Dc2Tqs_odDk4cF0niEhQSyt82tPMdVoS",
        size: 22817790,
        url: "https://drive.google.com/file/d/1Dc2Tqs_odDk4cF0niEhQSyt82tPMdVoS/view"
    },
    {
        name: "AEF 3rd 2 Workbook.pdf",
        id: "1J-bxHJonh4eytVIqHzlvEaLv9heC3qWE",
        size: 22817790,
        url: "https://drive.google.com/file/d/1J-bxHJonh4eytVIqHzlvEaLv9heC3qWE/view"
    },
    {
        name: "AEF 3rd 2 Stud. Book.pdf",
        id: "11D5_SeSh-8vxRC5CvR28Vmj83qeTSC7R",
        size: 22817790,
        url: "https://drive.google.com/file/d/11D5_SeSh-8vxRC5CvR28Vmj83qeTSC7R/view"
    },
    {
        name: "EF4th Beginner Student's Book.pdf",
        id: "1Y-6tpmVYKlNA0lL-qoasakSy9wGaTo7z",
        size: 22817790,
        url: "https://drive.google.com/file/d/1Y-6tpmVYKlNA0lL-qoasakSy9wGaTo7z/view"
    },
    {
        name: "SpeakOut B1 3rd Workbook.pdf",
        id: "1yWeYyy1RA16JWpJf2xPpZHNSoEWizV7A",
        size: 22817790,
        url: "https://drive.google.com/file/d/1yWeYyy1RA16JWpJf2xPpZHNSoEWizV7A/view"
    },
    {
        name: "EF4th Elementary Student's Book.pdf",
        id: "1Q74Un6MSmZH39ib-G-nOpFs-Y951w6H9",
        size: 22817790,
        url: "https://drive.google.com/file/d/1Q74Un6MSmZH39ib-G-nOpFs-Y951w6H9/view"
    },
    {
        name: "GG3 Workbook.pdf",
        id: "1sQ8F5czAT4u_Ohntzb4Sv9wSlNv9fXF5",
        size: 22817790,
        url: "https://drive.google.com/file/d/1sQ8F5czAT4u_Ohntzb4Sv9wSlNv9fXF5/view"
    },
    {
        name: "GG3 Student's Book.pdf",
        id: "1e2rE3TiPON1QhaAhiTun8E5Wz8ecoj21",
        size: 22817790,
        url: "https://drive.google.com/file/d/1e2rE3TiPON1QhaAhiTun8E5Wz8ecoj21/view"
    }
];
const openBooksModalBtn = document.getElementById('openBooksModalBtn');
const booksModalOverlay = document.getElementById('books-modal-overlay');
const closeBooksModalBtn = document.getElementById('close-books-modal-btn');
const booksCodeInput = document.getElementById('books-code');
const checkBooksCodeBtn = document.getElementById('check-books-code-btn');
const booksMessage = document.getElementById('books-message');
const booksListContainer = document.getElementById('books-list-container');
const bookListModal = document.getElementById('bookListModal');
function openBooksModal() {
    booksModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    booksCodeInput.value = '';
    booksMessage.textContent = '';
    booksCodeInput.style.display = 'block';
    checkBooksCodeBtn.style.display = 'block';
    booksListContainer.style.display = 'none';
}
function closeBooksModal() {
    booksModalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}
function checkBooksCode() {
    const enteredCode = booksCodeInput.value;
    const currentLang = document.documentElement.lang || 'uk'; // За замовчуванням 'uk' якщо не встановлено
    if (enteredCode === ACCESS_CODE) {
        // Використовуємо переклад з об'єкта translations
        booksMessage.textContent = translations[currentLang].booksMessageF;
        booksMessage.style.color = "green";
        displayBooks();
        booksCodeInput.style.display = 'none';
        checkBooksCodeBtn.style.display = 'none';
    } else {
        // Використовуємо переклад для неправильного коду
        booksMessage.textContent = translations[currentLang].booksMessageIncorrect;
        booksMessage.style.color = "red";
    }
}
function displayBooks() {
    bookListModal.innerHTML = '';
    books.forEach((book)=>{
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = book.url;
        link.textContent = book.name;
        link.target = "_blank";
        listItem.appendChild(link);
        bookListModal.appendChild(listItem);
    });
    booksListContainer.style.display = 'block';
}
openBooksModalBtn.addEventListener('click', openBooksModal);
closeBooksModalBtn.addEventListener('click', closeBooksModal);
checkBooksCodeBtn.addEventListener('click', checkBooksCode);
booksModalOverlay.addEventListener('click', (event)=>{
    if (event.target === booksModalOverlay) closeBooksModal();
});
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape' && booksModalOverlay.style.display === 'flex') closeBooksModal();
});
const opennModalBtn = document.getElementById('openModal');
const modalOverlayBooks = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');
const lessonSignupForm = document.getElementById('lesson-signup-form');
function opennModal() {
    modalOverlayBooks.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    modalOverlayBooks.style.display = 'none';
    document.body.style.overflow = 'auto';
}
opennModalBtn.addEventListener('click', opennModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlayBooks.addEventListener('click', (event)=>{
    if (event.target === modalOverlayBooks) closeModal();
});
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape' && modalOverlayBooks.style.display === 'flex') closeModal();
});
lessonSignupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0443\u0440\u043E\u043A \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u0430!");
    closeModal();
    lessonSignupForm.reset();
});
const openNModalBtn = document.getElementById('button_hero');
const MModalOverlay = document.getElementById('modal-overlay-test');
const closeTestModalBtnn = document.getElementById('close-test-modal-btn');
function handleOpenTestModal() {
    MModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function handleCloseTestModal() {
    MModalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}
openNModalBtn.addEventListener('click', handleOpenTestModal);
closeTestModalBtnn.addEventListener('click', handleCloseTestModal);
MModalOverlay.addEventListener('click', (event)=>{
    if (event.target === MModalOverlay) handleCloseTestModal();
});
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape' && MModalOverlay.style.display === 'flex') handleCloseTestModal();
});

//# sourceMappingURL=glowak.09c24910.js.map
