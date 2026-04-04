import { callComponent } from "../lib/component.js";

export async function main() {
  await Promise.all([
    callComponent("navbar", document.getElementById("navbar")),
    callComponent("Eskul/hero", document.getElementById("hero")),
    callComponent("Eskul/futsal", document.getElementById("futsal")),
  ]);
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(main);
});
