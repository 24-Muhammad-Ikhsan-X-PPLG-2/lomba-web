import { callComponent, fetchHtml } from "../lib/component.js";

export async function main() {
  await Promise.all([
    callComponent("navbar", document.getElementById("navbar")),
    callComponent("Landing/footer", document.getElementById("footer")),
  ]);
  const picturesWrapper = document.getElementById("pictures");
  const doc = await fetchHtml("Guru/profile-picture");
  if (!doc) return;
  const template = doc.querySelector("template");
  const gurus = [
    {
      imgSrc: "pak_dicky.jpeg",
      title: "Pak Dicky",
    },
    {
      imgSrc: "pak_bagas.jpeg",
      title: "Pak Bagas",
    },
    {
      imgSrc: "pak_nata.jpeg",
      title: "Pak Nata",
    },
  ];
  Array.from({ length: 20 }).forEach(() => {
    const card = template.content.cloneNode(true);
    picturesWrapper.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(main);
});
