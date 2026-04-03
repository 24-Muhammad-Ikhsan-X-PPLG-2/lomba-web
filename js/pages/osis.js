import { misiOsis } from "../data/misi.js";
import { callComponent, fetchHtml } from "../lib/component.js";

export async function main() {
  callComponent("navbar", document.getElementById("navbar"));
  callComponent("Osis/hero-section", document.getElementById("hero-section"));
  callComponent("Osis/about", document.getElementById("about-section"));
  callComponent("Osis/visi-section", document.getElementById("visi-section"));
  callComponent(
    "Osis/misi-section",
    document.getElementById("misi-section"),
    async (el) => {
      const misiWrapper = el.querySelector("#misi-wrapper");
      const doc = await fetchHtml("Osis/misi-card");
      if (!doc) return;
      const template = doc.querySelector("template");
      misiOsis.forEach((item, idx) => {
        const card = template.content.cloneNode(true);
        card.querySelector("[data-bind=no]").textContent = idx + 1;
        card.querySelector("[data-bind=icon]").innerHTML = item.icon;
        card.querySelector("[data-bind=desc]").textContent = item.desc;
        misiWrapper.appendChild(card);
      });
    },
  );
  callComponent("Landing/footer", document.getElementById("footer"));
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    main();
  });
});
