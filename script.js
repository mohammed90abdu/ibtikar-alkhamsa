(function () {
  "use strict";

  // Icon sets for the two marquee rows (mirrors the original spec order)
  var ROW_1 = ["figma", "framer", "palette", "pentool", "layers", "type", "aperture", "chrome"];
  var ROW_2 = ["camera", "brush", "box", "wand", "figma", "framer", "type", "layers"];

  /**
   * Builds a track of icon tiles. The list is duplicated once so the
   * CSS marquee animation (translateX 0 -> -50%) loops seamlessly.
   */
  function buildTrack(container, icons) {
    if (!container) return;

    var fragment = document.createDocumentFragment();
    var doubled = icons.concat(icons);

    doubled.forEach(function (iconName) {
      var tile = document.createElement("div");
      tile.className = "icon-tile liquid-glass";

      var icon = document.createElement("span");
      icon.className = "icon icon--" + iconName;
      icon.setAttribute("aria-hidden", "true");

      tile.appendChild(icon);
      fragment.appendChild(tile);
    });

    container.appendChild(fragment);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildTrack(document.getElementById("marquee-row-1"), ROW_1);
    buildTrack(document.getElementById("marquee-row-2"), ROW_2);
  });
})();
