const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const modol = document.querySelector(".job-btn button")
modol.addEventListener("click", () => {
    document.querySelector(".job-modal").style.display = "block"
})


const modol1 = document.querySelector(".job-modal-block button")
modol1.addEventListener("click", () => {
    document.querySelector(".job-modal").style.display = "none"
})


const hamburgerOp = document.querySelector(".hamburger-open")
hamburgerOp.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").style.display = "block"
})


const hamdurgerCl = document.querySelector(".hamburger-close")
hamdurgerCl.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").style.display = "none"
})