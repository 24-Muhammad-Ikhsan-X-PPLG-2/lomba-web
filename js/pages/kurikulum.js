import { callComponent } from "../lib/component.js";

export async function main() {
  await Promise.all([
    callComponent("navbar", document.getElementById("navbar")),
  ]);
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(main);
});
