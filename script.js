
// Get navigation elements
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Mobile navigation
if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}


// Automatically display current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Reveal sections when scrolling
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    currentObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach((item) => {
        observer.observe(item);
    });

} else {

    // Fallback for older browsers
    revealItems.forEach((item) => {
        item.classList.add("visible");
    });

}
