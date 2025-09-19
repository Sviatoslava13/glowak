const reviewsSwiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    }
});
const leaveReviewBtn = document.getElementById('leave-review-btn');
const reviewModal = document.getElementById('review-modal');
const closeButton = document.querySelector('.modal .close-button');
const submitReviewForm = document.getElementById('submit-review-form');
const reviewerNameInput = document.getElementById('reviewer-name');
const reviewTextInput = document.getElementById('review-text');
const reviewsContainer = document.querySelector('#reviews-container');
if (leaveReviewBtn) leaveReviewBtn.addEventListener('click', function() {
    reviewModal.style.display = 'flex';
});
if (closeButton) closeButton.addEventListener('click', function() {
    reviewModal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === reviewModal) reviewModal.style.display = 'none';
});
function createReviewSlide(author, text, id) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.setAttribute('data-review-id', id);
    const authorParagraph = document.createElement('p');
    authorParagraph.classList.add('review-author');
    authorParagraph.textContent = author;
    const textParagraph = document.createElement('p');
    textParagraph.classList.add('p_swiper');
    textParagraph.textContent = text;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-review-btn');
    deleteButton.textContent = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043A";
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        deleteReview(id);
    });
    swiperSlide.appendChild(authorParagraph);
    swiperSlide.appendChild(textParagraph);
    swiperSlide.appendChild(deleteButton);
    return swiperSlide;
}
function renderReviews() {
    const existingDynamicReviews = reviewsContainer.querySelectorAll('.swiper-slide[data-review-id]');
    existingDynamicReviews.forEach((review)=>review.remove());
    const storedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];
    storedReviews.forEach((reviewData)=>{
        const newSlide = createReviewSlide(reviewData.author, reviewData.text, reviewData.id);
        reviewsSwiper.addSlide(reviewsSwiper.slides.length, newSlide);
    });
    reviewsSwiper.update();
}
submitReviewForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const author = reviewerNameInput.value.trim();
    const text = reviewTextInput.value.trim();
    if (author && text) {
        const reviewId = Date.now().toString(); // Simple unique ID
        const newReview = {
            id: reviewId,
            author: author,
            text: text
        };
        const storedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];
        storedReviews.push(newReview);
        localStorage.setItem('userReviews', JSON.stringify(storedReviews));
        const newSlide = createReviewSlide(author, text, reviewId);
        reviewsSwiper.addSlide(reviewsSwiper.slides.length, newSlide);
        reviewsSwiper.update();
        reviewsSwiper.slideTo(reviewsSwiper.slides.length - 1);
        reviewerNameInput.value = '';
        reviewTextInput.value = '';
        reviewModal.style.display = 'none';
    } else alert("\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0443\u0441\u0456 \u043F\u043E\u043B\u044F \u0432\u0456\u0434\u0433\u0443\u043A\u0443.");
});
function deleteReview(idToDelete) {
    let storedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];
    const updatedReviews = storedReviews.filter((review)=>review.id !== idToDelete);
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
    const slideToRemove = reviewsContainer.querySelector(`.swiper-slide[data-review-id="${idToDelete}"]`);
    if (slideToRemove) {
        const slideIndex = Array.from(reviewsSwiper.slides).indexOf(slideToRemove);
        if (slideIndex > -1) {
            reviewsSwiper.removeSlide(slideIndex);
            reviewsSwiper.update();
        }
    }
}
document.addEventListener('DOMContentLoaded', renderReviews);

//# sourceMappingURL=glowak.8fdff0cd.js.map
