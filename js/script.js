// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Geomatics Engineer', 'GIS Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });


    // Leaflet map
const myMap = L.map('map').setView([27.619010911424446, 85.53847006843908], 11); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(myMap);

const homeMarker = L.marker([27.67250532378781, 85.35113924226462]).addTo(myMap);
homeMarker.bindPopup("📍 My Residence").openPopup();

const hometownMarker = L.marker([27.617211867687455, 85.57106599558934]).addTo(myMap);
hometownMarker.bindPopup("📍 My Hometown").openPopup();

const schoolMarker = L.marker([27.66840597285729, 85.35021214355604]).addTo(myMap);
schoolMarker.bindPopup("📍 I passed SEE from here.").openPopup();

const collegeMarker = L.marker([27.69334841330892, 85.3211183668174]).addTo(myMap);
collegeMarker.bindPopup("📍 I passed +2 from here.").openPopup();

const universityMarker = L.marker([27.619010911424446, 85.53847006843908]).addTo(myMap);
universityMarker.bindPopup("📍 I graduated in Geomatics Engineering from here.").openPopup();




