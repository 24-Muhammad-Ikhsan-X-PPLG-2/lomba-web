import { fasilitas } from "../data/fasilitas.js";
import { callComponent, fetchHtml } from "../lib/component.js";

export async function main() {
  await Promise.all([
    callComponent("navbar", document.getElementById("navbar")),
    callComponent("Fasilitas/header", document.getElementById("header")),
    callComponent(
      "Fasilitas/fasilitas",
      document.getElementById("fasilitas"),
      async (el) => {
        const daftarFasilitas = el.querySelector("#daftar-fasilitas");
        const doc = await fetchHtml("Fasilitas/fasilitas-card");
        if (!doc) return;
        const template = doc.querySelector("template");
        fasilitas.forEach((item) => {
          const card = template.content.cloneNode(true);
          card.querySelector("[data-bind=img]").src =
            `/assets/img/PHOTO_FASILITAS/${item.imgSrc}`;
          card.querySelector("[data-bind=img]").alt = item.title;
          card.querySelector("[data-bind=title]").textContent = item.title;
          daftarFasilitas.appendChild(card);
        });
      },
    ),
    callComponent("Landing/footer", document.getElementById("footer")),
  ]);
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    main();
  });
});
