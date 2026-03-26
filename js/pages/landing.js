import { callComponent } from "../lib/component.js";
import { useState } from "../lib/state.js";

export default function main() {
  callComponent("Landing/hero", document.getElementById("hero"), (el) => {
    const bg1 = el.querySelector("#bg1");
    const bg2 = el.querySelector("#bg2");

    const state = useState(
      {
        bgActive: 0,
      },
      () => {
        bg1.dataset.active = state.bgActive == 1;
        bg2.dataset.active = state.bgActive == 2;
        console.log(state.bgActive);
      },
    );

    setInterval(() => {
      if (state.bgActive < 2) {
        state.bgActive = ++state.bgActive;
      } else {
        state.bgActive = 1;
      }
    }, 7000);

    state.bgActive = 1;
    callComponent(
      "Landing/teks-animasi",
      el.querySelector("#teks-animasi"),
      (el) => {
        const animasiText1 = el.querySelector("#animasi-text1");
        const animasiText2 = el.querySelector("#animasi-text2");
        const animasiText3 = el.querySelector("#animasi-text3");

        function render() {
          animasiText1.dataset.active = state.text1;
          animasiText2.dataset.active = state.text2;
          animasiText3.dataset.active = state.text3;
        }

        const state = useState(
          {
            text1: false,
            text2: false,
            text3: false,
          },
          render,
        );

        setTimeout(() => {
          state.text1 = true;
          state.text2 = true;
          state.text3 = true;
        }, 500);
      },
    );
  });
  callComponent("navbar", document.getElementById("navbar"));

  callComponent("Landing/about", document.getElementById("about"));
  callComponent(
    "Landing/partnership",
    document.getElementById("partnership-app"),
    async (el) => {
      const partnership = [
        {
          imgSrc: "microsoft.png",
          title: "Microsoft",
        },
        {
          imgSrc: "adobe.png",
          title: "Adobe",
        },
        {
          imgSrc: "linux.webp",
          title: "Linux",
        },
        {
          imgSrc: "google.png",
          title: "Google",
        },
        {
          imgSrc: "mojang.png",
          title: "Mojang",
        },
        {
          imgSrc: "apple.png",
          title: "Apple",
        },
        {
          imgSrc: "ibm.png",
          title: "IBM",
        },
        {
          imgSrc: "visual_studio_code.png",
          title: "VSCode",
        },
      ];
      const res = await fetch("/components/Landing/partnership-card.html");
      const htmlRes = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlRes, "text/html");
      const partnershipCard = doc.querySelector("template");
      const partnershipWrapper = el.querySelector("#partnership-wrapper");
      partnership.forEach((item) => {
        const card = partnershipCard.content.cloneNode(true);
        const imgCard = card.querySelector("[data-bind=img]");
        imgCard.src = `/assets/img/company/${item.imgSrc}`;
        imgCard.alt = item.title;
        card.querySelector("[data-bind=text]").textContent = item.title;
        partnershipWrapper.appendChild(card);
      });

      const partnershipPrev = el.querySelector("#partnership-prev");
      const partnershipNext = el.querySelector("#partnership-next");

      partnershipPrev.addEventListener("click", () => {
        partnershipWrapper.scroll({
          left: partnershipWrapper.scrollLeft - 200,
          behavior: "smooth",
        });
      });

      partnershipNext.addEventListener("click", () => {
        partnershipWrapper.scroll({
          left: partnershipWrapper.scrollLeft + 200,
          behavior: "smooth",
        });
      });
    },
  );
  callComponent(
    "Landing/menerima-siswa",
    document.getElementById("menerima-siswa-app"),
  );
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
