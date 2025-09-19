document.addEventListener("DOMContentLoaded", function() {
    const toggleCheckbox = document.querySelector(".checkbox");
    toggleCheckbox.addEventListener("change", function() {
        toggleCheckbox.classList.toggle("active");
        if (!toggleCheckbox.classList.contains("active")) {
            document.body.style.backgroundColor = "#f5f0e1";
            document.body.style.color = "#6E5773";
            document.querySelector(".header").style.backgroundColor = "#e7d8c9";
            document.querySelector(".nav_header").style.backgroundColor = "#e7d8c9";
            document.querySelector(".button_hero.secondary").style.backgroundColor = "#D4B48C";
            document.querySelector(".button_hero.tertiary").style.backgroundColor = "#BFA082";
            document.querySelectorAll(".a_nav").forEach((el)=>{
                el.style.color = "#6e5773";
            });
            document.querySelectorAll(".line_header").forEach((el)=>{
                el.style.background = "#6e5773";
            });
            document.querySelector(".logo_header").style.backgroundColor = "transparent";
            document.querySelector(".logo_header").style.borderRadius = "50%";
            document.querySelector(".logo_header").style.marginRight = "20px";
            document.querySelectorAll("section h2").forEach((el)=>{
                el.style.color = "#a98467";
            });
            document.querySelectorAll(".course-item h3").forEach((el)=>{
                el.style.color = "#a98467";
            });
            document.querySelectorAll(".materials-title").forEach((el)=>{
                el.style.color = "#a98467";
            });
            document.querySelector(".section_about").style.background = "#E1DACA";
            document.querySelector(".certificates").style.backgroundColor = "#eaddca";
            document.querySelector(".certificates").style.color = "#daa06d";
            document.querySelector(".certificates").style.border = "2px dashed #daa06d";
            document.querySelector(".certificates").style.boxShadow = "0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0, 0, 0, 0.5)";
            document.querySelectorAll(".course-item").forEach((el)=>{
                el.style.backgroundColor = "#ffffff";
            });
            document.querySelectorAll(".materials-category").forEach((el)=>{
                el.style.backgroundColor = "#ffffff";
            });
            document.querySelector("h1").style.color = "#6e5773";
            document.querySelector(".subtitle_header").style.color = "#6e5773";
            document.querySelectorAll(".faq-question").forEach((el)=>{
                el.style.color = "#6e5773";
            });
            document.querySelectorAll(".faq-answer").forEach((el)=>{
                el.style.color = "#5c4d42";
            });
            document.querySelectorAll(".swiper-slide").forEach((el)=>{
                el.style.backgroundColor = "#f9f9f9";
            });
            document.querySelector("#review-form").style.backgroundColor = "#ffffff";
            document.querySelector(".footer").style.background = "#E7D8C9";
            document.querySelectorAll(".footer-anchor").forEach((el)=>{
                el.style.color = "#6e5773";
            });
            document.querySelectorAll(".footer-contact-item").forEach((el)=>{
                el.style.color = "#6e5773";
            });
            document.querySelector(".footer-logo-img").style.backgroundColor = "transparent";
            document.querySelector(".footer-logo-img").style.borderRadius = "50%";
            document.querySelector(".footer-logo-img").style.marginRight = "40px";
        } else {
            document.body.style.backgroundColor = "#3E5C76";
            document.body.style.color = "#ffffff";
            document.querySelector(".header").style.backgroundColor = "#0d1321";
            document.querySelector(".nav_header").style.backgroundColor = "#0d1321";
            document.querySelector(".button_hero.secondary").style.backgroundColor = "#1D2D44";
            document.querySelector(".button_hero.tertiary").style.backgroundColor = "#0d1321";
            document.querySelectorAll(".a_nav").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelectorAll(".line_header").forEach((el)=>{
                el.style.background = "#ffffff";
            });
            document.querySelector(".logo_header").style.backgroundColor = "#ffffff";
            document.querySelector(".logo_header").style.borderRadius = "50%";
            document.querySelector(".logo_header").style.marginRight = "20px";
            document.querySelectorAll("section h2").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelectorAll(".course-item h3").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelectorAll(".materials-title").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelector(".section_about").style.backgroundColor = "#1D2D44";
            document.querySelector(".certificates").style.backgroundColor = "#3E5C76";
            document.querySelector(".certificates").style.color = "#ffffff";
            document.querySelector(".certificates").style.border = "none";
            document.querySelector(".certificates").style.boxShadow = "none";
            document.querySelectorAll(".course-item").forEach((el)=>{
                el.style.backgroundColor = "#1D2D44";
            });
            document.querySelectorAll(".materials-category").forEach((el)=>{
                el.style.backgroundColor = "#1D2D44";
            });
            document.querySelector("h1").style.color = "#ffffff";
            document.querySelector(".subtitle_header").style.color = "#ffffff";
            document.querySelectorAll(".faq-question").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelectorAll(".faq-answer").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelectorAll(".swiper-slide").forEach((el)=>{
                el.style.backgroundColor = "#1D2D44";
            });
            document.querySelector("#review-form").style.backgroundColor = "#1D2D44";
            document.querySelector(".footer").style.background = "#0d1321";
            document.querySelectorAll(".footer-anchor").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelectorAll(".footer-contact-item").forEach((el)=>{
                el.style.color = "#ffffff";
            });
            document.querySelector(".footer-logo-img").style.backgroundColor = "#ffffff";
            document.querySelector(".footer-logo-img").style.borderRadius = "50%";
            document.querySelector(".footer-logo-img").style.marginRight = "40px";
        }
    });
});

//# sourceMappingURL=glowak.7fd712b3.js.map
