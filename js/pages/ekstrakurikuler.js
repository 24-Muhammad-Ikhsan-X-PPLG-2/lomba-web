import { ekskuls } from "../data/eskul.js";
import { callComponent, fetchHtml } from "../lib/component.js";

export async function main() {
  await Promise.all([
    callComponent("navbar", document.getElementById("navbar")),
    callComponent("Eskul/hero", document.getElementById("hero")),
  ]);
  const scrollContainer = document.getElementById("scroll-container");

  const doc = await fetchHtml("Eskul/ekskul");
  if (!doc) return;
  const template = doc.querySelector("template");
  ekskuls.forEach((item) => {
    const card = template.content.cloneNode(true);
    card
      .querySelector("[data-bind=bg]")
      .classList.add(`bg-[url('/assets/img/eskul/${item.bgImg}')]`);
    card.querySelector("[data-bind=judul]").textContent = item.judul;
    // card
    //   .querySelector("[data-bind=heightText]")
    //   .classList.add(`md:h-[${item.heightText}]`);
    card.querySelector("[data-bind=img]").src = `/assets/img/eskul/${item.img}`;
    card.querySelector("[data-bind=subjudul]").textContent = item.subJudul;
    card.querySelector("[data-bind=desc]").textContent = item.desc;
    scrollContainer.appendChild(card);
  });
  const footerRes = await fetchHtml("Landing/footer");
  if (!footerRes) return;
  const templateFooter = footerRes.querySelector("template");
  scrollContainer.appendChild(templateFooter.content.cloneNode(true));
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(main);
});
