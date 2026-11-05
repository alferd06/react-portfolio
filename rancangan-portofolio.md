# Rancangan Portofolio — M Alwi Perdiansyah

## Positioning

**Target audiens:** Founder startup & tech recruiter (via Glints, LinkedIn)
**Fokus:** Data science, data engineering, ML engineering — sengaja dibuat luas, belum commit ke satu spesialisasi
**Gaya:** Clean, modern, professional, tidak ramai
**Tagline hero:** "I turn raw data into decisions that matter."

Narasi berubah dari automation/hardware (Arduino) ke data science murni — lebih align dengan project history dan target karier (Data Engineer/Data Scientist).

---

## Struktur Halaman

1. **Hero** — headline + subheadline + CTA (See My Work / Get in Touch)
2. **Projects** — 4 project cards, urutan dari paling kuat
3. **About** — narasi personal, kenapa tertarik data
4. **Skills** — grouped by kategori (Data & ML, Deployment, Currently Exploring, Tools)
5. **Contact** — email, LinkedIn, GitHub

---

## Visual Direction

| Elemen | Detail |
|---|---|
| Mode | Dark mode default |
| Background | `#0C0C0C` |
| Surface/card | `#141414`, border `#262626` |
| Aksen primary | Hijau (menonjolkan project unggulan) |
| Font | Hanken Grotesk / Geist |
| Layout | Max width 900px, card grid 2 kolom |
| Tone | Minim dekorasi, whitespace sebagai elemen desain |

---

## Apa yang Sudah Dibuat

### 1. Mockup awal via Stitch AI
- Hasil pertama salah (form mobile app "Add Student") — kesalahan upload file
- Hasil kedua sesuai brief: struktur HTML/Tailwind CDN dengan dark mode, 5 section

### 2. Revisi copy & struktur (iterasi 1 — automation narrative)
- Hero, About, Projects (irigasi otomatis, pemberi pakan ikan), Skills, Contact
- Ditemukan bug: scroll reveal animation tidak jalan (class `active` sudah ada dari awal)

### 3. Pivot ke data science (iterasi 2 — final)
Project final yang digunakan di portofolio, sudah diurutkan dari paling kuat:

| # | Project | Status |
|---|---|---|
| 1 | **GDP per Kapita vs Indikator Kesehatan Publik** (kNN + clustering) | ⭐ Top project di cohort kampus |
| 2 | **Sistem Rekomendasi Tanaman Berbasis Karakteristik Tanah** (RF & SVM → deployed via Streamlit) | Deployed, iteratif |
| 3 | **Prediksi Hasil Panen Multi-Tanaman & Multi-Negara** (XGBoost + GA-tuned hyperparameter) | Riset selesai, paper lengkap, belum dipresentasikan ke dosen; app masih rencana |
| 4 | **Sistem Pengenal Tanaman** (Teachable Machine → pickle → HTML) | Deployed |

### 4. Update kode HTML final
- Hero, Projects (4 card baru + badge status), About, Skills, Contact — semua sudah diganti ke narasi data
- Bug reveal animation sudah diperbaiki
- File: `portofolio.html`

### 5. Prompt migrasi ke React (untuk DeepSeek)
- Sudah dibuat prompt lengkap: struktur komponen, Tailwind config migration, custom hook untuk scroll reveal (IntersectionObserver), data arrays untuk projects/skills
- Belum dieksekusi — menunggu kamu jalankan di DeepSeek

---

## Yang Harus Dilakukan Selanjutnya

### Prioritas tinggi — sebelum portofolio siap publish
- [ ] Isi link GitHub & demo di 4 project card (masih placeholder `href="#"`)
- [ ] Isi email, LinkedIn, GitHub di section Contact & footer
- [ ] (Opsional) Tambahkan link paper/PDF di card Multi-Crop Yield Prediction

### Migrasi teknis
- [ ] Jalankan prompt migrasi di DeepSeek → dapatkan struktur React + Vite + Tailwind
- [ ] Review & debug hasil migrasi (bawa kembali ke sini kalau ada yang error)
- [ ] Deploy (Vercel/Netlify direkomendasikan untuk React + Vite)

### Konten & substansi
- [ ] Presentasikan paper Multi-Crop Yield Prediction ke dosen pembimbing
- [ ] Mulai bangun app/web interface untuk project XGBoost yield prediction
- [ ] (Rekomendasi tambahan) Bangun mini project ETL pipeline (REST API → Pandas → SQL → scheduling → GitHub) untuk menutup gap skill REST API — relevan untuk role Data Engineer

### Pencarian internship
- [ ] Lanjutkan apply ke role data science/data engineering/ML engineering
- [ ] Sinkronkan CV dengan narasi portofolio (kedua dokumen harus konsisten)

---

*Dokumen ini adalah snapshot rancangan per hari ini. Update manual kalau ada perubahan besar pada struktur atau project.*
