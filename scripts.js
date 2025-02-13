// Initialize AOS
AOS.init();

// Typed.js Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    var typedElement = document.getElementById("typing-text");
    if (typedElement) {
        new Typed("#typing-text", {
            strings: ["Python Developer", "Data Analyst", "Machine Learning Enthusiast"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            showCursor: false
        });
    }
});



// Profile Photo

// Get the scroll-effect container
const scrollEffect = document.querySelector('.scroll-effect');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; 

    const opacityValue = Math.max(1 - scrollY / 500, 0); 
    const scaleValue = Math.max(1 - scrollY / 2000, 0.8); 

    scrollEffect.style.opacity = opacityValue; 
    scrollEffect.style.transform = `scale(${scaleValue})`; 
});


document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        const targetId = link.getAttribute('href').slice(1); 
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerOffset = document.querySelector('.navbar').offsetHeight; 
            const elementPosition = targetSection.getBoundingClientRect().top; 
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector("#skills");
    const skillBars = document.querySelectorAll(".skill-bar");

    const options = {
        root: null, 
        threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                skillBars.forEach((bar) => {
                    const skillWidth = bar.style.getPropertyValue("--skill-width");
                    bar.style.width = skillWidth; 
                });
            } else {
                skillBars.forEach((bar) => {
                    bar.style.width = "0%"; 
                });
            }
        });
    }, options);

    observer.observe(skillsSection);
});



function sendMail(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:shekharyad09@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
}


    document.addEventListener("DOMContentLoaded", function () {
        const entries = document.querySelectorAll(".entry");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        entries.forEach((entry) => observer.observe(entry));
    });
