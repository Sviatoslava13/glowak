let openModal = document.querySelector("#openModal");
let overlay = document.querySelector("#modal-overlay"); 
let btnClose = document.querySelector("#close-modal-btn"); 
let modalOverlay = document.querySelector("#modal-overlay");
let lessonForm = document.querySelector("#lesson-signup-form"); 

// ОПЕНЕР МОДАЛЬНОГО ВІКНА ПРИ НАТИСКАНІ КНОПКИ
openModal.addEventListener('click', () => {
    overlay.style.display = "flex"; 
});
// ФУНКЦІЯ ЗАКРИВАННЯ ФОРМИ
function closeModal() {
    overlay.style.display = "none";
}
// ЗАКРИВАТИ МОДАЛЬНЕ ВІКНО ПРИ НАТИСКАННІ НА КНОПКУ "ЗАКРИТИ" (хрестик)
btnClose.addEventListener('click', closeModal);
// ЗАКРИВАТИ МОДАЛЬНЕ ВІКНО ПРИ НАТИСКАННІ НА БЛОК ПОЗА ФОРМИ
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});
// ЗАКРИВАТИ МОДАЛЬНЕ ВІКНО ПРИ НАТИСКАНІ НА ESCAPE
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});
// РЕАЛІЗАЦІЯ ОБРОБКИ ФОРМИ
lessonForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = {
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
        email: event.target.elements.email.value,
        topic: event.target.elements.topic.value, 
        agreement: event.target.elements.agreement.checked,
    };
    if (!formData.agreement) {
        alert("Ви повинні погодитися з умовами.");
        return;
    }
    try {
        const response = await fetch("https://telegram-bot-305n.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.topic 
            })
        });
        if (!response.ok) {
            throw new Error("Помилка при надсиланні форми");
        }
        alert("Дані успішно надіслані!");
        closeModal();
        lessonForm.reset();
    } catch (error) {
        console.error("Помилка:", error); 
        alert("Сталася помилка при надсиланні форми. Спробуйте ще раз.");
    }
});