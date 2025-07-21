gsap.to(".imagecontainer",{
        ease: Expo.easeInOut,
        width: "100%",
        duration: 2,
        stagger: 5,
        repeat: Infinity
    })

    gsap.to(".text h1",{
        ease: Expo.easeInOut,
        stagger:5,
        duration: 2,
        top: 0,
        repeat: Infinity
    })

    gsap.to(".text h1",{
        ease: Expo.easeInOut,
        delay: 5,
        stagger:5,
        top: "-100%",
        duration: 2,
        repeat: Infinity
    })
    gsap.to(".content p",{
        ease: Expo.easeInOut,
        stagger:5,
        duration: 2,
        top: 0,
        repeat: Infinity
        
    })
    gsap.to(".content p",{
        ease: Expo.easeInOut,
        delay: 5,
        stagger:5,
        top: "-100%",
        duration: 2,
        repeat: Infinity
    })
    gsap.to("#main",{
        ease: Expo.easeInOut,
        stagger:5,
        duration: 2,
        top: 0,
        repeat: Infinity,
        
    })