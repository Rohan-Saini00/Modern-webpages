document.body.style.overflowY = "hidden";

gsap.from("#text-div h1",{
    x:-10,
    duration:1,
    opacity: 0,
    delay: 1,
    yoyo: true,
    stagger: 1,
    repeat: Infinity
})
gsap.to("#nav img",{
    x:0,
    duration:6,
    delay: 1,
    rotate: 360,
    repeat: Infinity

})
gsap.from("#nav h5",{
    x:-30,
    duration: 2,
    delay: 1,
    yoyo: true,
    opacity: 0
})
gsap.from("#verticaltext h1",{
    x:900,
    duration: 4,
    delay: 1,
    opacity: 0,
    yoyo: true
})