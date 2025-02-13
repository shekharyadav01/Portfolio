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

// Add a scroll event listener
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get vertical scroll position

    // Calculate fade-out and scale based on scroll position
    const opacityValue = Math.max(1 - scrollY / 500, 0); // Decreases opacity gradually
    const scaleValue = Math.max(1 - scrollY / 2000, 0.8); // Scales down slightly

    // Apply styles dynamically
    scrollEffect.style.opacity = opacityValue; // Control visibility
    scrollEffect.style.transform = `scale(${scaleValue})`; // Control scaling
});






// Smooth scrolling with offset adjustment for fixed navbar
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href').slice(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerOffset = document.querySelector('.navbar').offsetHeight; // Navbar height
            const elementPosition = targetSection.getBoundingClientRect().top; // Section position
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Scroll with smooth behavior
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    });
});




// Skill Section 


document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector("#skills");
    const skillBars = document.querySelectorAll(".skill-bar");

    const options = {
        root: null, // Use the viewport
        threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animate skill bars
                skillBars.forEach((bar) => {
                    const skillWidth = bar.style.getPropertyValue("--skill-width");
                    bar.style.width = skillWidth; // Start animation
                });
            } else {
                // Reset skill bars when section is out of view
                skillBars.forEach((bar) => {
                    bar.style.width = "0%"; // Reset animation
                });
            }
        });
    }, options);

    observer.observe(skillsSection);
});



function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct the mailto URL
    const mailtoLink = `mailto:shekharyad09@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the mailto link
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





