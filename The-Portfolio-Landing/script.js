gsap.from("#nav",{
    y:-10,
    duration: 3,
    delay: 1,
    opacity: 0
})
gsap.from("#content ",{
    y:20,
    duration: 3,
    delay: 1,
    opacity: 0,
})
gsap.from("#btn",{
    y:20,
    duration: 3,
    delay: 1,
    opacity: 0
})
var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
});