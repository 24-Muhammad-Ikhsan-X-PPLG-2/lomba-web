const btnMenu = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

let active = new Proxy(
  {
    value: false,
  },
  {
    set: (target, property, value) => {
      target[property] = value;
      sidebar.dataset.active = value;
    },
  },
);

closeSidebar.addEventListener("click", () => {
  active.value = false;
});

btnMenu.addEventListener("click", () => {
  active.value = !active.value;
});

window.addEventListener("mousedown", (e) => {
  if (!sidebar.contains(e.target)) {
    active.value = false;
  }
});
