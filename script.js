$(document).ready( function(){
    gsap.registerPlugin(ScrollTrigger);

    // Banner Big Image
    gsap.to("#bannerBigimg", {
      duration: 2,
      // y: 1200,
      yPercent: 150,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });
    
    // Banner Big Text
    gsap.to("#headingBig", {
      duration: 1.5,
      scale: 2,
      delay: 0.8,
      transformOrigin: "top left",
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });
    
    // Banner Design Text
    gsap.to("#headingSmall", {
      delay: 1.2,
      opacity: 0
    });
    gsap.to("#headingSmall", {
      delay: 2,
      left: "-100vw"
    });
    gsap.to("#headingSmall", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });
    

    

    

    
    // Projects section - Title
    gsap.set(".projects-section .title", {
      y: -200,
      opacity: 0
    });
    gsap.to(".projects-section .title", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });
    
    // Projects section - Left
    gsap.set(".pbox-left", {
      opacity: 0,
      x: -800
    });
    gsap.to(".pbox-left", {
      duration: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });
    
    // Projecr section - Right
    gsap.set(".pbox-right", {
      x: 500
    });
    gsap.to(".pbox-right", {
      duration: 1,
      x: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        marker: false
      }
    });
    
    // Project section - content section
    gsap.set(".project-content", {
      x: -200,
      y: -200,
      opacity: 0
    });
    gsap.to(".project-content", {
      duration: 1,
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });
    

    // Contact section - Box & Border
    gsap.set(".contact-box, .contact-border", {
      opacity: 0,
      scale: 0
    });
    gsap.to(".contact-box, .contact-border", {
      duration: 1.6,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".contact-us",
        start: "top center",
        end: "bottom",
        markers: false
      }
    });
    
});