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
      tahun: "2013",
      img1: "sejarah2013-1.webp",
      img2: "sejarah2013-2.webp",
      desc: "Pada 3 Juni 2013, SMK Letris Indonesia 2 resmi didirikan di Pamulang. Pendirian ini bertujuan untuk memperluas jangkauan pendidikan dari unit pertama (SMK Letris Indonesia 1). Pada awal berdiri, sekolah fokus pada pengembangan infrastruktur dan penyusunan kurikulum yang berbasis teknologi dan manajemen.",
    },
    {
      tahun: "2014",
      img1: "sejarah2014-1.webp",
      img2: "sejarah2014-2.webp",
      desc: "Melihat tingginya permintaan tenaga medis, pada 15 Desember 2014, didirikan unit SMK Kesehatan Letris Indonesia 2. Unit ini memiliki manajemen yang terintegrasi namun fokus pada kompetensi keahlian seperti Farmasi Klinis dan Komunitas serta Keperawatan.",
    },
    {
      tahun: "2015",
      img1: "sejarah2015-1.webp",
      img2: "sejarah2015-2.webp",
      desc: "Tahun ini menjadi tonggak awal sekolah dalam memperkuat infrastruktur teknologi informasi. Sekolah mulai secara masif membangun laboratorium komputer berspesifikasi tinggi untuk mendukung jurusan teknologi, yang menjadi cikal bakal kuatnya kompetensi di bidang pengembangan perangkat lunak di tahun-tahun berikutnya.",
    },
    {
      tahun: "2022",
      img1: "sejarah2022-1.webp",
      img2: "sejarah2022-2.webp",
      desc: "Pada tahun 2022, SMK Letris Indonesia 2 mulai melakukan transisi besar dalam metode pembelajaran dengan mengadopsi elemen-elemen Kurikulum Merdeka. Sekolah memfokuskan kembali pada pengembangan soft skills siswa dan kolaborasi proyek (Project Based Learning), serta memperbarui sarana praktik untuk memastikan relevansi dengan dunia industri terkini.",
    },
    {
      tahun: "2023",
      img1: "sejarah2023-1.webp",
      img2: "sejarah2023-2.webp",
      desc: "Tahun 2023 menjadi tahun yang signifikan bagi sekolah dikarenakan berdasarkan SK nomor 105/BAN-PDM/SK/2023, sekolah resmi menyandang status Terakreditasi A (Unggul), yang menunjukkan kualitas pengajaran dan fasilitas telah memenuhi standar nasional yang tinggi, dan pada 27 Juni 2023, sekolah memperbarui Izin Operasional melalui PTSP dengan nomor 570/20/PIOSmk/DPMPTSP/VI/2023.",
    },
  ];
  const contentWrapper = document.getElementById("content");
  const docRes = await fetchHtml("Sejarah/content-template");
  if (!docRes) return;
  const template = docRes.querySelector("template");
  const content = template.content.cloneNode(true);
  content.querySelector("[data-bind=tahun]").textContent = tahun[0].tahun;
  document
    .querySelector("[data-bind=img-bg]")
    .classList.add(`bg-[url('/assets/img/sejarah/${tahun[0].img1}')]`);
  content.querySelector("[data-bind=img2]").src =
    `/assets/img/sejarah/${tahun[0].img2}`;
  content.querySelector("[data-bind=desc]").textContent = tahun[0].desc;
  contentWrapper.appendChild(content);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const nextMobile = document.getElementById("next-mobile");
  const prevMobile = document.getElementById("prev-mobile");
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
      document
        .querySelector("[data-bind=img-bg]")
        .classList.remove(`bg-[url('/assets/img/sejarah/${tahun[0].img1}')]`);
      tahunDesktop[4].dataset.active = true;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.add(`bg-[url('/assets/img/sejarah/${tahun[4].img1}')]`);
      currentIndex.value = 4;
    } else {
      tahunDesktop[currentIndex.value].dataset.active = false;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.remove(
          `bg-[url('/assets/img/sejarah/${tahun[currentIndex.value].img1}')]`,
        );
      currentIndex.value -= 1;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.add(
          `bg-[url('/assets/img/sejarah/${tahun[currentIndex.value].img1}')]`,
        );
      tahunDesktop[currentIndex.value].dataset.active = true;
    }
  }
  function nextTahun() {
    if (currentIndex.value === 4) {
      tahunDesktop[4].dataset.active = false;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.remove(`bg-[url('/assets/img/sejarah/${tahun[4].img1}')]`);
      document
        .querySelector("[data-bind=img-bg]")
        .classList.add(`bg-[url('/assets/img/sejarah/${tahun[0].img1}')]`);
      tahunDesktop[0].dataset.active = true;
      currentIndex.value = 0;
    } else {
      tahunDesktop[currentIndex.value].dataset.active = false;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.remove(
          `bg-[url('/assets/img/sejarah/${tahun[currentIndex.value].img1}')]`,
        );
      currentIndex.value += 1;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.add(
          `bg-[url('/assets/img/sejarah/${tahun[currentIndex.value].img1}')]`,
        );
      tahunDesktop[currentIndex.value].dataset.active = true;
    }
  }
  prev.addEventListener("click", prevTahun);
  next.addEventListener("click", nextTahun);
  nextMobile.addEventListener("click", nextTahun);
  prevMobile.addEventListener("click", prevTahun);
  tahunDesktop.forEach((el, idx) => {
    el.addEventListener("click", () => {
      tahunDesktop[currentIndex.value].dataset.active = false;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.remove(
          `bg-[url('/assets/img/sejarah/${tahun[currentIndex.value].img1}')]`,
        );
      currentIndex.value = idx;
      document
        .querySelector("[data-bind=img-bg]")
        .classList.add(
          `bg-[url('/assets/img/sejarah/${tahun[currentIndex.value].img1}')]`,
        );
      tahunDesktop[idx].dataset.active = true;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
