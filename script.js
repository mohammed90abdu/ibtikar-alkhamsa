(function () {
  "use strict";

  var ROW_1 = [
    "Exhibition Stand Design",
    "Corporate Event Setup",
    "Conference Production",
    "Branding & Displays"
  ];

  var ROW_2 = [
    "Exhibitions Design & Build",
    "Events Management",
    "Advertising Solutions",
    "Project Management"
  ];

  function buildTrack(container, items) {
    if (!container) return;

    var fragment = document.createDocumentFragment();
    var doubled = items.concat(items);

    doubled.forEach(function (label) {
      var tile = document.createElement("div");
      tile.className = "portfolio-tile liquid-glass";
      tile.textContent = label;
      fragment.appendChild(tile);
    });

    container.appendChild(fragment);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildTrack(document.getElementById("marquee-row-1"), ROW_1);
    buildTrack(document.getElementById("marquee-row-2"), ROW_2);
  });
})();
