import { callComponent } from "../lib/component.js";

export async function main() {
  callComponent("navbar", document.getElementById("navbar"));
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    main();
  });
});
