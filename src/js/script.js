// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//kirim ke WA
function sendMessage() {
  // Ambil nilai input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Format pesan untuk WhatsApp
  const whatsappMessage = `Halo, Saya ${name}%0AEmail: ${email}%0APesan: ${message}`;
  const whatsappNumber = "6287708284384";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typing-text", {
    strings: ["Ihwan Adli", "Developer", "Security Analyst"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});
