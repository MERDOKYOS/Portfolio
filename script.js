/* =========================================
   script.js — Portfolio Main Script
========================================= */

// ===== SKILL TABS =====
function clickTab(event, tabName) {
  // Remove active from all tab buttons
  document.querySelectorAll(".tabs").forEach(function (btn) {
    btn.classList.remove("active");
  });
  // Activate the clicked button
  event.target.classList.add("active");

  // Remove active from all skill panels
  document.querySelectorAll(".skill-con").forEach(function (con) {
    con.classList.remove("active");
  });
  // Activate the matching panel
  var panel = document.getElementById(tabName);
  if (panel) panel.classList.add("active");
}

// ===== HAMBURGER MENU =====
var hamburger = document.getElementById("hamburger");
var navMenu   = document.getElementById("navMenu");

if (hamburger && navMenu) {
  // Toggle on hamburger click
  hamburger.addEventListener("click", function () {
    var isOpen = navMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when any nav link is clicked (mobile UX fix)
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== DYNAMIC FOOTER YEAR =====
var yearEl = document.getElementById("footer-year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== TYPED.JS — Animated typing in hero =====
if (typeof Typed !== "undefined") {
  new Typed(".typed", {
    strings: ["Full Stack Developer", "Web Designer", "Graphic Designer"],
    typeSpeed:  60,
    backSpeed:  38,
    backDelay:  1800,
    startDelay: 400,
    loop:       true,
    showCursor: true,
    cursorChar: "|",
  });
}

// ===== AOS — Animate On Scroll =====
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 700,   // animation duration in ms
    once:     true,  // animate only the first time an element enters viewport
    offset:   60,    // distance from bottom of viewport to trigger animation
  });
}

// ===== ACTIVE NAV LINK ON SCROLL (IntersectionObserver) =====
(function () {
  var sections  = document.querySelectorAll("section[id]");
  var navLinks  = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) { link.classList.remove("active"); });
          var active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
          if (active) active.classList.add("active");
        }
      });
    },
    {
      threshold:  0.35,
      rootMargin: "-80px 0px 0px 0px",
    }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();

// ===== CONTACT FORM — Submit feedback =====
(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var btn    = form.querySelector("button[type='submit']");
  var status = document.getElementById("formStatus");

  form.addEventListener("submit", function () {
    if (btn) {
      btn.textContent = "Sending\u2026";
      btn.disabled    = true;
    }
    if (status) {
      status.textContent = "";
    }

    // Re-enable button after 6 s in case Formspree redirects back or fails
    setTimeout(function () {
      if (btn) {
        btn.textContent = "Send Message";
        btn.disabled    = false;
      }
    }, 6000);
  });
})();
