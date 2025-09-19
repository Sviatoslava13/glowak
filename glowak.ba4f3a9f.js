let openModal = document.querySelector("#openModal");
let overlay = document.querySelector("#modal-overlay");
let btnClose = document.querySelector("#close-modal-btn");
let modalOverlay = document.querySelector("#modal-overlay");
let lessonForm = document.querySelector("#lesson-signup-form");
// ОПЕНЕР МОДАЛЬНОГО ВІКНА ПРИ НАТИСКАНІ КНОПКИ
openModal.addEventListener('click', ()=>{
    overlay.style.display = "flex";
});
// ФУНКЦІЯ ЗАКРИВАННЯ ФОРМИ
function closeModal() {
    overlay.style.display = "none";
}
// ЗАКРИВАТИ МОДАЛЬНЕ ВІКНО ПРИ НАТИСКАННІ НА КНОПКУ "ЗАКРИТИ" (хрестик)
btnClose.addEventListener('click', closeModal);
// ЗАКРИВАТИ МОДАЛЬНЕ ВІКНО ПРИ НАТИСКАННІ НА БЛОК ПОЗА ФОРМИ
modalOverlay.addEventListener('click', (event)=>{
    if (event.target === modalOverlay) closeModal();
});
// ЗАКРИВАТИ МОДАЛЬНЕ ВІКНО ПРИ НАТИСКАНІ НА ESCAPE
document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") closeModal();
});
// РЕАЛІЗАЦІЯ ОБРОБКИ ФОРМИ
lessonForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const formData = {
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
        email: event.target.elements.email.value,
        topic: event.target.elements.topic.value,
        agreement: event.target.elements.agreement.checked
    };
    if (!formData.agreement) {
        alert("\u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u043F\u043E\u0433\u043E\u0434\u0438\u0442\u0438\u0441\u044F \u0437 \u0443\u043C\u043E\u0432\u0430\u043C\u0438.");
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
        if (!response.ok) throw new Error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u0456 \u0444\u043E\u0440\u043C\u0438");
        alert("\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u0456!");
        closeModal();
        lessonForm.reset();
    } catch (error) {
        console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430:", error);
        alert("\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u0456 \u0444\u043E\u0440\u043C\u0438. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.");
    }
});

//# sourceMappingURL=glowak.ba4f3a9f.js.map
