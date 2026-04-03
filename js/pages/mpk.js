import { misiMpk } from "../data/misi.js";
import { callComponent, fetchHtml } from "../lib/component.js";

export async function main() {
  callComponent("navbar", document.getElementById("navbar"));
  callComponent("Mpk/hero-section", document.getElementById("hero-section"));
  callComponent("Mpk/about", document.getElementById("about-section"));
  callComponent(
    "Mpk/misi",
    document.getElementById("misi-section"),
    async (el) => {
      const doc = await fetchHtml("Mpk/misi-card");
      if (!doc) return;
      const misiWrapper = el.querySelector("#misi-wrapper");

      const template = doc.querySelector("template");
      misiMpk.forEach((item, idx) => {
        const card = template.content.cloneNode(true);
        card.querySelector("[data-bind=no]").textContent = `${idx + 1}.`;
        card.querySelector("[data-bind=icon]").innerHTML = item.icon;
        card.querySelector("[data-bind=desc]").textContent = item.desc;
        misiWrapper.appendChild(card);
      });
    },
  );
  callComponent("Mpk/visi", document.getElementById("visi-section"));
  callComponent("Landing/footer", document.getElementById("footer"));
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    main();
  });
});
