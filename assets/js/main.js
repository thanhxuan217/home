const hamburger = document.getElementById("hamburger");
const navLinksMenu = document.getElementById("nav-links");

if (hamburger && navLinksMenu) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinksMenu.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navLinksMenu.contains(e.target)) {
            navLinksMenu.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinksMenu.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

if (themeToggleBtn && themeIcon) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light-theme");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }

    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-theme");

        if (body.classList.contains("light-theme")) {
            themeIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        } else {
            themeIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        }
    });
}

async function fetchVisitorCount() {
    const visitorCount = document.getElementById("visitor-count");
    if (!visitorCount) {
        return;
    }

    try {
        const apiUrl = "https://api.counterapi.dev/v1/thanhxuan217/portfolio/up";
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && typeof data.count === "number") {
            visitorCount.textContent = String(data.count);
            return;
        }

        throw new Error("Invalid format from API");
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        const wrapper = visitorCount.parentElement;
        if (wrapper) {
            wrapper.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", fetchVisitorCount);
