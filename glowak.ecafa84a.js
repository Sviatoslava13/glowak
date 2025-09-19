const openTestModalBtn = document.getElementById('button_hero');
const testModalOverlay = document.getElementById('modal-overlay-test');
const closeTestModalBtn = document.getElementById('close-test-modal-btn');
function openTestModal() {
    testModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeTestModal() {
    testModalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}
openTestModalBtn.addEventListener('click', openTestModal);
closeTestModalBtn.addEventListener('click', closeTestModal);
testModalOverlay.addEventListener('click', (event)=>{
    if (event.target === testModalOverlay) closeTestModal();
});
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape' && testModalOverlay.style.display === 'flex') closeTestModal();
});

//# sourceMappingURL=glowak.ecafa84a.js.map
