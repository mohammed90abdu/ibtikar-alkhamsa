(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  function closeMenu() {
    if (!links) return;
    links.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.querySelector(".icon").className = "icon icon--menu";
    }
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.querySelector(".icon").className = isOpen
        ? "icon icon--close"
        : "icon icon--menu";
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Our Expertise marquee ---------- */
  var ROW_1 = [
    "Exhibitions Design",
    "Conferences & Events",
    "Advertising & Visual Solutions",
    "Project Management",
  ];
  var ROW_2 = [
    "Corporate Events",
    "Conference Production",
    "Branding & Displays",
    "Exhibition Stands",
  ];

  function buildPillTrack(container, items) {
    if (!container) return;
    var fragment = document.createDocumentFragment();
    var doubled = items.concat(items);

    doubled.forEach(function (label) {
      var pill = document.createElement("span");
      pill.className = "pill liquid-glass";
      pill.textContent = label;
      fragment.appendChild(pill);
    });

    container.appendChild(fragment);
  }

  buildPillTrack(document.getElementById("marquee-row-1"), ROW_1);
  buildPillTrack(document.getElementById("marquee-row-2"), ROW_2);

  /* ---------- Scroll-reveal animation ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav__links a");

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navAnchors.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ---------- Nav background on scroll ---------- */
  var nav = document.getElementById("site-nav");
  function updateNavBackground() {
    if (!nav) return;
    if (window.scrollY > 12) {
      nav.style.background = "rgba(10, 10, 10, 0.85)";
    } else {
      nav.style.background = "rgba(10, 10, 10, 0.55)";
    }
  }
  updateNavBackground();
  window.addEventListener("scroll", updateNavBackground, { passive: true });
})();
