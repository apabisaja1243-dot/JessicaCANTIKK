// EDIT DATA DI SINI agar website terasa personal.
const memories = [
  { title: "YATUHANNN", date: "FOTO PERTAMA YANG DIKASIH", image: "assets/jessica.jpg"},
  { title: "Lesung pipinyaa gumushh", date: "CANTIK KANNN", image: "assets/jessica1.jpg" },
  { title: "my pacarrr", date: "MY FAVORITE PERSONN", image: "assets/jessica3.jpg" }
];

const milestones = [
  { date: "THE BEGINNING", title: "When our story started", description: "Hari ketika semesta mempertemukan kita. Nggak tahu akan sejauh apa, tapi ternyata jadi awal dari sesuatu yang indah." },
  { date: "A LITTLE LATER", title: "Our first favorite memory", description: "Momen sederhana yang sampai sekarang masih suka bikin senyum sendiri kalau diingat." },
  { date: "TODAY & ALWAYS", title: "Still choosing you", description: "Masih banyak cerita yang belum ditulis. Semoga kita terus punya alasan untuk saling memilih." }
];

const reasons = [
  "The way you make ordinary days feel special.",
  "Your laugh is still my favorite sound.",
  "You make me feel safe to be myself.",
  "Even silence feels comfortable with you.",
  "You inspire me to become a better person.",
  "Because being with you feels like home."
];

const memoryGrid = document.querySelector("#memoryGrid");
memories.forEach((memory) => {
  const card = document.createElement("article");
  card.className = "memory-card";
  card.innerHTML = `<div class="memory-image"><img src="${memory.image}" alt="${memory.alt}" loading="lazy"></div><div class="memory-caption"><strong>${memory.title}</strong><span>${memory.date}</span></div>`;
  card.addEventListener("click", () => {
    document.querySelector("#lightboxImage").src = memory.image;
    document.querySelector("#lightboxCaption").textContent = memory.title;
    document.querySelector("#photoDialog").showModal();
  });
  memoryGrid.appendChild(card);
});

const timeline = document.querySelector("#timeline");
milestones.forEach((item) => {
  const node = document.createElement("article");
  node.className = "timeline-item";
  node.innerHTML = `<time>${item.date}</time><h3>${item.title}</h3><p>${item.description}</p>`;
  timeline.appendChild(node);
});

let reasonIndex = 0;
const reasonText = document.querySelector("#reasonText");
const reasonNumber = document.querySelector("#reasonNumber");
document.querySelector("#nextReason").addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  reasonText.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 350 });
  reasonText.textContent = reasons[reasonIndex];
  reasonNumber.textContent = `${String(reasonIndex + 1).padStart(2, "0")} / ${String(reasons.length).padStart(2, "0")}`;
});

const letterDialog = document.querySelector("#letterDialog");
const envelope = document.querySelector("#openLetter");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  window.setTimeout(() => letterDialog.showModal(), 420);
});

document.querySelector("#giftButton").addEventListener("click", () => document.querySelector("#giftDialog").showModal());
document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("show"));
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("show")));

// Opsional: hitung durasi hubungan dari tanggal jadian.
// Isi format YYYY-MM-DD, lalu hapus komentar dan panggil fungsi ini jika ingin ditampilkan.
