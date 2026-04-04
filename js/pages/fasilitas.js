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
        Array.from({ length: 10 }).forEach(() => {
          const card = template.content.cloneNode(true);
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
