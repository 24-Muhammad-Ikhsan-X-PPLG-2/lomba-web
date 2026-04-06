/**
 *
 * @param {any} item
 * @param {Element} reasonWrapper
 * @param {HTMLTemplateElement} reasonCard
 */
export function renderCard(item, reasonWrapper, reasonCard) {
  const card = reasonCard.content.cloneNode(true);
  card.querySelector("[data-bind=icon]").innerHTML = item.icon;
  card.querySelector("[data-bind=judul]").textContent = item.judul;
  card.querySelector("[data-bind=desc]").textContent = item.desc;
  reasonWrapper.appendChild(card);
}
export const reasons1 = [
  {
    // Icon: Building2
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
    `,
    judul: "Gedung Milik Sendiri",
    desc: "Belajar lebih nyaman dengan fasilitas gedung megah milik sendiri yang modern, bersih, dan representatif untuk mendukung kegiatan KBM.",
  },
  {
    // Icon: MapPin
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
    `,
    judul: "Lokasi Strategis",
    desc: "Kampus yang mudah dijangkau dari berbagai arah, memudahkan akses transportasi bagi siswa yang tinggal di dalam maupun luar kota.",
  },
  {
    // Icon: Award
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
    `,
    judul: "Prestasi Gemilang",
    desc: "Telah mencetak banyak juara di bidang akademik dan non-akademik, baik di tingkat wilayah hingga nasional secara konsisten.",
  },
  {
    // Icon: Briefcase
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    `,
    judul: "Bursa Kerja Khusus",
    desc: "Kami bekerjasama dengan puluhan perusahaan besar untuk membantu penyaluran kerja bagi lulusan agar langsung terserap di industri.",
  },
  {
    // Icon: Cpu
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
    `,
    judul: "Lab Standar Industri",
    desc: "Fasilitas laboratorium komputer dan praktik yang lengkap dengan spesifikasi terkini sesuai dengan kebutuhan dunia kerja saat ini.",
  },
  {
    // Icon: Users
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    `,
    judul: "Eskul Variatif",
    desc: "Wadahi minat dan bakatmu mulai dari olahraga, seni, hingga teknologi seperti robotik dan E-sport yang dibina secara profesional.",
  },
  {
    // Icon: GraduationCap
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    `,
    judul: "Tenaga Pendidik Ahli",
    desc: "Dibimbing oleh guru-guru yang kompeten, bersertifikasi, dan praktisi industri yang siap membimbing siswa hingga mahir.",
  },
  {
    // Icon: ShieldCheck
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
    `,
    judul: "Lingkungan Aman",
    desc: "Sistem keamanan CCTV 24 jam dan lingkungan sekolah yang religius serta disiplin memberikan rasa aman bagi siswa dan orang tua.",
  },
  {
    // Icon: Rocket
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#091336]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-2.91a2.18 2.18 0 0 0-3.09-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3Z"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5Z"/></svg>
    `,
    judul: "Siap Kerja & Kuliah",
    desc: "Kurikulum kami dirancang seimbang agar lulusan punya pilihan: langsung bekerja, berwirausaha, atau melanjutkan ke perguruan tinggi.",
  },
];
