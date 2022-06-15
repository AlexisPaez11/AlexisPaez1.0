// MENU
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_disabled");
});

// BUTTON UP
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 2));
        buttonUp.style.transform = "scale(0)";
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 400) {
        buttonUp.style.transform = "scale(1)";
    }
    else if (scroll < 400) {
        buttonUp.style.transform = "scale(0)";
    }
}

// SWIPER
var swiper = new Swiper(".mySwiperProjects", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next-projects",
        prevEl: ".swiper-button-prev-projects",
    },
});

var swiper = new Swiper(".mySwiperBlog", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next-blog",
        prevEl: ".swiper-button-prev-blog",
    },
});
