import { callComponent, fetchHtml } from "../lib/component.js";

export async function main() {
  await Promise.all([
    callComponent("navbar", document.getElementById("navbar")),
    callComponent("Landing/footer", document.getElementById("footer")),
  ]);
  const tahunMobile = document.getElementById("tahun-mobile");
  const tahunDesktop = document.querySelectorAll(".tahun");
  // const tahun = ["2010", "2014", "2016", "2018", "2022", "2024", "2026"];
  const tahun = [
    {
      tahun: "2010",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
    {
      tahun: "2014",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum doloras, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
    {
      tahun: "2016",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
    {
      tahun: "2018",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
    {
      tahun: "2022",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
    {
      tahun: "2024",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum dol1or, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
    {
      tahun: "2026",
      img1: "sejarah2010-1.webp",
      img2: "sejarah2010-2.webp",
      desc: "Lorem ipsum dolor12, sit amet consectetur adipisicing elit. Doloremque placeat molestias numquam libero minima assumenda officiis cupiditate consequatur eaque cum accusamus, dicta magni minus earum dolor sunt doloribus eligendi dolore!",
    },
  ];
  const contentWrapper = document.getElementById("content");
  const docRes = await fetchHtml("Sejarah/content-template");
  if (!docRes) return;
  const template = docRes.querySelector("template");
  const content = template.content.cloneNode(true);
  contentWrapper.appendChild(content);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  tahunDesktop[0].dataset.active = true;
  let currentIndex = new Proxy(
    {
      value: 0,
    },
    {
      set: (target, property, value) => {
        target[property] = value;
        contentWrapper.innerHTML = "";
        const content = template.content.cloneNode(true);
        content.querySelector("[data-bind=tahun]").textContent =
          tahun[value].tahun;
        content.querySelector("[data-bind=img1]").src =
          `/assets/img/sejarah/${tahun[value].img1}`;
        content.querySelector("[data-bind=img2]").src =
          `/assets/img/sejarah/${tahun[value].img2}`;
        content.querySelector("[data-bind=desc]").textContent =
          tahun[value].desc;
        contentWrapper.appendChild(content);
        tahunMobile.textContent = tahun[value].tahun;
        return true;
      },
    },
  );
  function prevTahun() {
    if (currentIndex.value === 0) {
      tahunDesktop[0].dataset.active = false;
      tahunDesktop[6].dataset.active = true;
      currentIndex.value = 6;
    } else {
      tahunDesktop[currentIndex.value].dataset.active = false;
      currentIndex.value -= 1;
      tahunDesktop[currentIndex.value].dataset.active = true;
    }
  }
  function nextTahun() {
    if (currentIndex.value === 6) {
      tahunDesktop[6].dataset.active = false;
      tahunDesktop[0].dataset.active = true;
      currentIndex.value = 0;
    } else {
      tahunDesktop[currentIndex.value].dataset.active = false;
      currentIndex.value += 1;
      tahunDesktop[currentIndex.value].dataset.active = true;
    }
  }
  prev.addEventListener("click", prevTahun);
  next.addEventListener("click", nextTahun);
  tahunDesktop.forEach((el, idx) => {
    el.addEventListener("click", () => {
      tahunDesktop[currentIndex.value].dataset.active = false;
      currentIndex.value = idx;
      tahunDesktop[idx].dataset.active = true;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
