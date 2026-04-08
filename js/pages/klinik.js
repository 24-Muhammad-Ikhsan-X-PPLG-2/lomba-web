import { fetchHtml } from "../lib/component.js";

export async function main() {
  const personelWrapper = document.getElementById("personel");
  const doc = await fetchHtml("Klinik/personel");
  if (!doc) return;
  const template = doc.querySelector("template");
  const personels = [
    {
      imgSrc: "darius.webp",
      nama: "Darius",
      role: "Gitaris",
    },
    {
      imgSrc: "paiz.webp",
      nama: "Faiz",
      role: "Gitaris",
    },
    {
      imgSrc: "ali.webp",
      nama: "Ali",
      role: "Bassist",
    },
    {
      imgSrc: "erwin.webp",
      nama: "Erwin",
      role: "Vokalis",
    },
    {
      imgSrc: "ganes.webp",
      nama: "Ganes",
      role: "Drummer",
    },
    {
      imgSrc: "enggar.webp",
      nama: "Enggar",
      role: "Vokalis",
    },
  ];
  personels.forEach((item) => {
    const card = template.content.cloneNode(true);
    card.querySelector("[data-bind=img]").src =
      `/assets/img/klinik/${item.imgSrc}`;
    card.querySelector("[data-bind=nama]").textContent = item.nama;
    card.querySelector("[data-bind=role]").textContent = item.role;
    personelWrapper.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(main);
});
