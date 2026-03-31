import { jurusan, jurusanDoodle } from "../data/jurusan.js";
import partnership from "../data/partnership.js";
import { reasons1, reasons2, reasons3, renderCard } from "../data/reason.js";
import { callComponent, fetchHtml } from "../lib/component.js";
import { useState } from "../lib/state.js";

export default async function main() {
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
        // console.log(state.bgActive);
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
      const doc = await fetchHtml("Landing/partnership-card");
      if (!doc) return;
      const partnershipCard = doc.querySelector("template");
      const partnershipWrapper1 = el.querySelector("#partnership-wrapper1");
      const partnershipWrapper2 = el.querySelector("#partnership-wrapper2");
      partnership.forEach((item) => {
        const card = partnershipCard.content.cloneNode(true);
        const imgCard = card.querySelector("[data-bind=img]");
        imgCard.src = `/assets/img/company/${item.imgSrc}`;
        imgCard.alt = item.title;
        card.querySelector("[data-bind=text]").textContent = item.title;
        partnershipWrapper1.appendChild(card);
      });
      partnership.forEach((item) => {
        const card = partnershipCard.content.cloneNode(true);
        const imgCard = card.querySelector("[data-bind=img]");
        imgCard.src = `/assets/img/company/${item.imgSrc}`;
        imgCard.alt = item.title;
        card.querySelector("[data-bind=text]").textContent = item.title;
        partnershipWrapper2.appendChild(card);
      });
    },
  );
  callComponent(
    "Landing/menerima-siswa",
    document.getElementById("menerima-siswa-app"),
  );
  callComponent(
    "Landing/jurusan",
    document.getElementById("jurusan-app"),
    async (el) => {
      const sliderContainer = el.querySelector("#slider-container");
      let currentIndex = 0;
      let otomatisSlide = true;

      function renderCards() {
        sliderContainer.innerHTML = "";
        jurusan.forEach((item) => {
          const card = document.createElement("div");
          card.className = `card-transition absolute md:w-[400px] w-[300px] bg-white/40 border border-white/20 backdrop-blur-xl rounded-xl h-[500px] shadow-lg group overflow-hidden`;
          card.innerHTML = `
            <div class="w-full overflow-hidden relative">
                          <div class="bg-black/50 w-full h-full absolute z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                          <img src="/assets/img/jurusan/${item.imgSrc}" class="w-full h-[200px] object-cover object-center group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500" />
                      </div>
                      <div class="p-6">
                          <h1 class="text-black font-bold text-2xl group-hover:text-blue-800 transition-colors">${item.title}</h1>
                          <p class="mt-2 font-normal text-gray-700 leading-relaxed">${item.desc}</p>
                      </div>
          `;
          sliderContainer.appendChild(card);
        });
        updateSlider();
      }
      function updateSlider() {
        requestAnimationFrame(() => {
          const cards = el.querySelectorAll(".card-transition");
          const gambarDoodles = el.querySelectorAll(".jurusan-doodle");
          gambarDoodles.forEach((gambar, idx) => {
            if (currentIndex === 0) {
              gambar.classList.add("scale-0");
              gambar.src = `/assets/img/${jurusanDoodle.tjkt[idx]}`;
              gambar.classList.remove("scale-0");
            } else if (currentIndex === 1) {
              gambar.classList.add("scale-0");

              gambar.src = `/assets/img/${jurusanDoodle.rpl[idx]}`;
              gambar.classList.remove("scale-0");
            } else if (currentIndex === 2) {
              gambar.classList.add("scale-0");

              gambar.src = `/assets/img/${jurusanDoodle.dkv[idx]}`;
              gambar.classList.remove("scale-0");
            } else {
              gambar.src = "";
              gambar.classList.add("scale-0");
            }
          });
          // console.log(cards);
          cards.forEach((card, idx) => {
            card.classList.add(`idx-${idx}`);
            card.classList.remove(
              "z-20",
              "z-10",
              "z-0",
              "opacity-100",
              "opacity-50",
              "opacity-0",
              "blur-none",
              "blur-sm",
            );
            if (idx === currentIndex) {
              // Card Tengah
              card.style.transform = "translateX(0) scale(1)";
              card.classList.add("z-20", "opacity-100", "pointer-events-auto");
              card.classList.remove("pointer-events-none");
            } else if (
              idx ===
              (currentIndex - 1 + jurusan.length) % jurusan.length
            ) {
              // Card Kiri
              card.style.transform = "translateX(-60%) scale(0.85)";
              card.classList.add("z-10", "opacity-50", "pointer-events-none");
            } else if (idx === (currentIndex + 1) % jurusan.length) {
              // Card Kanan
              card.style.transform = "translateX(60%) scale(0.85)";
              card.classList.add("z-10", "opacity-50", "pointer-events-none");
            } else {
              // Card Lainnya yg di belakang, di hide ke belakang.
              card.style.transform = "translateX(0) scale(0.5)";
              card.classList.add("z-0", "opacity-0", "pointer-events-none");
            }
          });
        });
      }
      // const card = template.content.cloneNode(true);
      // const imgCard = card.querySelector("[data-bind=img]");
      // const judulCard = card.querySelector("[data-bind=judul]");
      // const descCard = card.querySelector("[data-bind=desc");
      // imgCard.src = `/assets/img/jurusan/${jurusan[0].imgSrc}`;
      // imgCard.alt = jurusan[0].title;
      // judulCard.textContent = jurusan[0].title;
      // descCard.textContent = jurusan[0].desc;
      // wrapperJurusan.appendChild(card);
      const jurusanPrev = el.querySelector("#jurusan-prev");
      const jurusanNext = el.querySelector("#jurusan-next");
      jurusanPrev.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % jurusan.length;
        otomatisSlide = false;
        updateSlider();
      });
      jurusanNext.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + jurusan.length) % jurusan.length;
        otomatisSlide = false;
        updateSlider();
      });
      jurusanPrev.addEventListener("mouseout", () => {
        otomatisSlide = true;
      });
      jurusanNext.addEventListener("mouseout", () => {
        otomatisSlide = true;
      });
      window.addEventListener("mouseover", (e) => {
        const card = el.querySelector(`.idx-${currentIndex}`);
        if (card.contains(e.target)) {
          console.log(card.querySelector("h1").textContent);
          otomatisSlide = false;
        } else {
          otomatisSlide = true;
        }
      });
      setInterval(() => {
        if (otomatisSlide) {
          currentIndex = (currentIndex + 1) % jurusan.length;
          updateSlider();
        }
      }, 10000);
      requestAnimationFrame(() => {
        renderCards();
      });
    },
  );
  callComponent("Landing/spmb", document.getElementById("spmb"));
  callComponent(
    "Landing/berita",
    document.getElementById("berita"),
    async (el) => {
      const beritaWrapper = el.querySelector("#berita-wrapper");
      const berita = [
        {
          imgSrc: `bahlil-anjg.jpg`,
          judul: "Kompor harus dimatikan ketika masakan sudah matang.",
          desc: "Pernyataan pejabat publik di media massa kerap menjadi sorotan warganet belakangan ini. Salah satu di antaranya tidak lain adalah Menteri Energi dan Sumber Daya Mineral (ESDM), Bahlil Lahadalia. Gaya bicaranya yang ceplas-ceplos saat membahas isu krusial sering kali memicu perdebatan.",
          tanggal: "31 Maret 2026",
        },
        {
          imgSrc: `bahlil-anjg.jpg`,
          judul: "Kompor harus dimatikan ketika masakan sudah matang.",
          desc: "Pernyataan pejabat publik di media massa kerap menjadi sorotan warganet belakangan ini. Salah satu di antaranya tidak lain adalah Menteri Energi dan Sumber Daya Mineral (ESDM), Bahlil Lahadalia. Gaya bicaranya yang ceplas-ceplos saat membahas isu krusial sering kali memicu perdebatan.",
          tanggal: "31 Maret 2026",
        },
        {
          imgSrc: `bahlil-anjg.jpg`,
          judul: "Kompor harus dimatikan ketika masakan sudah matang.",
          desc: "Pernyataan pejabat publik di media massa kerap menjadi sorotan warganet belakangan ini. Salah satu di antaranya tidak lain adalah Menteri Energi dan Sumber Daya Mineral (ESDM), Bahlil Lahadalia. Gaya bicaranya yang ceplas-ceplos saat membahas isu krusial sering kali memicu perdebatan.",
          tanggal: "31 Maret 2026",
        },
      ];
      const doc = await fetchHtml("Landing/berita-card");
      if (!doc) return;
      const beritaCard = doc.querySelector("template");
      berita.forEach((item) => {
        const card = beritaCard.content.cloneNode(true);
        const cardImg = card.querySelector("[data-bind=img]");
        cardImg.src = `/assets/img/${item.imgSrc}`;
        card.querySelector("[data-bind=judul]").textContent = item.judul;
        card.querySelector("[data-bind=desc]").textContent = item.desc;
        card.querySelector("[data-bind=tanggal]").textContent = item.tanggal;
        beritaWrapper.appendChild(card);
      });
    },
  );
  callComponent(
    "Landing/reasons",
    document.getElementById("reasons"),
    async (el) => {
      const reasons1Wrapper = el.querySelector("#reasons1-wrapper");
      const reasons2Wrapper = el.querySelector("#reasons2-wrapper");
      const reasons3Wrapper = el.querySelector("#reasons3-wrapper");
      const doc = await fetchHtml("Landing/reason-card");
      if (!doc) return;
      const reasonCard = doc.querySelector("template");
      reasons1.forEach((item) => renderCard(item, reasons1Wrapper, reasonCard));
      reasons2.forEach((item) => renderCard(item, reasons2Wrapper, reasonCard));
      reasons3.forEach((item) => renderCard(item, reasons3Wrapper, reasonCard));
    },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    main();
  });
});
