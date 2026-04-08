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
  Array.from({ length: 20 }).forEach(() => {
    const card = template.content.cloneNode(true);
    picturesWrapper.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(main);
});
