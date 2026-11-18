# Our Little Universe ♡

Template website romantis dengan HTML, CSS, dan JavaScript vanilla. Tidak membutuhkan framework atau proses build.

## Menjalankan project
1. Extract folder project.
2. Buka folder `our-little-universe` di VS Code.
3. Jalankan `index.html` dengan ekstensi Live Server, atau buka langsung di browser.
4. Pastikan koneksi internet tersedia untuk Google Fonts dan foto demo dari Unsplash.

## Personalisasi
### 1. Ganti nama dan surat
Edit teks pada `index.html`, terutama judul hero, isi surat di `<dialog id="letterDialog">`, dan pesan surprise.

### 2. Ganti foto kenangan
Edit array `memories` di `js/script.js`. Ganti `image` dengan path foto lokal atau URL gambar yang kamu miliki.
Contoh:
```js
{ title: "Our date", date: "12 AUGUST 2026", image: "assets/momen-kita.jpg", alt: "Foto kita berdua" }
```
Simpan foto lokal di folder `assets/`.

### 3. Edit timeline
Ubah array `milestones` di `js/script.js` sesuai tanggal dan cerita kalian.

### 4. Edit alasan
Ubah isi array `reasons` di `js/script.js`.

### 5. Tambahkan lagu
Taruh file MP3 yang boleh kamu gunakan di `assets/our-song.mp3`. Player audio sudah tersedia di halaman.

## Struktur
```text
our-little-universe/
├── index.html
├── README.md
├── assets/
│   └── (foto dan lagu personal)
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Deploy gratis
- **GitHub Pages:** upload isi folder ke repository, lalu aktifkan Pages dari Settings → Pages.
- **Netlify:** drag-and-drop folder project ke halaman deploy Netlify.
- **Vercel:** import repository GitHub sebagai static site.

## Catatan
Foto demo menggunakan URL Unsplash. Ganti dengan foto kalian sendiri untuk hasil yang lebih personal. Lagu tidak disertakan; tambahkan file MP3 sendiri. Template ini tidak mengirim atau menyimpan data pribadi.
