import { callComponent } from "../lib/component.js";

export async function main() {
  callComponent("navbar", document.getElementById("navbar"));
  callComponent("Landing/footer", document.getElementById("footer"));
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
