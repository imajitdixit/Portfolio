// ===================== SIDEBAR =====================
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

if (menu && sideBar) {
  menu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
    document.body.style.overflow = "hidden"; // prevent background scroll
  });
}

function closeSidebar() {
  if (sideBar) {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    document.body.style.overflow = "";
  }
}

if (closeIcon) {
  closeIcon.addEventListener("click", closeSidebar);
}

// Close sidebar when any link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
  link.addEventListener("click", closeSidebar);
});

// Close sidebar on outside click
document.addEventListener("click", function (e) {
  if (
    sideBar &&
    sideBar.classList.contains("open-sidebar") &&
    !sideBar.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    closeSidebar();
  }
});

// ===================== ACTIVE NAV HIGHLIGHT =====================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observerOptions = {
  rootMargin: "-40% 0px -55% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("active-nav");
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("active-nav");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// ===================== CONTACT FORM (EmailJS) =====================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    btn.textContent = "Sending...";
    btn.disabled = true;

    emailjs.sendForm("service_6bh3bi3", "template_qyxa2o7", form)
      .then(() => {
        btn.textContent = "Sent! ✅";
        form.reset();
        setTimeout(() => {
          btn.innerHTML = "Send Message <i class='bx bx-mail-send'></i>";
          btn.disabled = false;
        }, 3000);
      }, (error) => {
        btn.innerHTML = "Send Message <i class='bx bx-mail-send'></i>";
        btn.disabled = false;
        alert("Failed to send message ❌: " + JSON.stringify(error));
      });
  });
});
