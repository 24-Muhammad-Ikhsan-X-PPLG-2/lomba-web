let target = 0;
let current = 0;
const ease = 0.075;

const slider = document.querySelector("#scroll-container");

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function update() {
  // Update posisi current secara halus
  current = lerp(current, target, ease);
  //   pake transform biar kena akselerasi GPU
  slider.style.transform = `translate3d(0, ${-current}px, 0)`;
  requestAnimationFrame(update);
}

window.addEventListener(
  "wheel",
  (e) => {
    // update target berdasarkan seberapa jauh user scroll
    target += e.deltaY;
    // Batasi target biar ga scroll keluar batas dokumen
    target = Math.max(
      0,
      Math.min(target, slider.scrollHeight - window.innerHeight),
    );
  },
  { passive: true },
);

update();
