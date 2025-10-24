// ---------------- Project Videos ---------------- //
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const videoList = [video1, video2, video3];
const hoverSign = document.querySelector('.hover-sign');

videoList.forEach(function(video) {
  if (!video) return; // prevent errors if video not found
  video.addEventListener("mouseover", function() {
    video.play();
    if (hoverSign) hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function() {
    video.pause();
    if (hoverSign) hoverSign.classList.remove("active");
  });
});

// ---------------- Sidebar ---------------- //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

if (menu && sideBar) {
  menu.addEventListener("click", function() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
  });
}

if (closeIcon && sideBar) {
  closeIcon.addEventListener("click", function() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
}

// ---------------- Contact Form (EmailJS) ---------------- //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_6bh3bi3", "template_qyxa2o7", form)
      .then(() => {
        alert("Message sent successfully! 🚀");
        form.reset();
      }, (error) => {
        alert("Failed to send message ❌: " + JSON.stringify(error));
      });
  });
});
