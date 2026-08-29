# Blueprint Portofolio — Dhio Andreas Gemilang
### Astro + Neubrutalism × Grid

> Dokumen ini adalah cetak biru untuk membangun situs portofolio dengan **Astro**, memakai arah desain **neubrutalism di atas grid tegas**. Isinya: konsep desain, alur/struktur halaman, konten siap pakai (hasil rapikan dari CV), dan struktur proyek Astro yang disarankan.

---

## 1. Konsep Desain — "Signal Grid"

Tema menggabungkan dua sisi profil Dhio: **teknis/jaringan** (Cisco CCNAv7, full-stack dev, data labeling) dan **keselamatan/lapangan** (JSA, Fire Safety Officer, First Aid). Neubrutalism cocok untuk ini — rambu K3 kuning-hitam dan diagram jaringan sama-sama "berbicara" lewat garis tebal, kontras tinggi, dan blok warna tanpa basa-basi.

### Palet Warna

| Nama | Hex | Peran |
|---|---|---|
| Paper | `#EDEDF0` | Latar dasar — abu-lavender pucat, bukan krem generik |
| Ink | `#101010` | Teks utama, border, bayangan |
| Signal Yellow | `#FFD400` | Aksen utama, nuansa rambu K3 — dipakai di CTA & highlight |
| Circuit Blue | `#1E40FF` | Aksen kedua, nuansa jaringan/teknologi — tautan & tag skill |
| Alert Red | `#FF3D2E` | Aksen ketiga, dipakai tipis — tombol kontak/urgensi |
| Terminal Green | `#00C853` | Aksen mono/kode — elemen ala terminal (status bar) |

### Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Display (H1/H2) | **Archivo Black** | Berat & blok — karakter utama neubrutalism |
| Subhead / label | **Space Grotesk** (Medium/Bold) | Grotesk tegas tapi lebih lentur dari display |
| Body | **Inter** | Netral, nyaman dibaca untuk paragraf profil |
| Data / mono | **JetBrains Mono** | Tanggal, tag skill, koordinat grid, status bar — nuansa "terminal jaringan" dari latar Cisco |

### Konsep Layout

Grid 12 kolom yang **terlihat**, bukan disembunyikan. Tiap section adalah "tile": border solid 3–4px hitam, tanpa border-radius, bayangan keras offset (`6px 6px 0 #101010`) yang mengecil saat elemen di-hover/klik — kesan taktil ala saklar fisik.

```
┌─────────────────────────────────────────────┐
│ [NAMA/LOGO]     [NAV: ABOUT SKILLS WORK ...] │
├─────────────────────────────────────────────┤
│  DHIO ANDREAS                 ┌────────────┐ │
│  GEMILANG                     │ STATUS BAR │ │
│  Full-Stack Dev ·             │ ping OK    │ │
│  IT Graduate                  │ 12ms       │ │
│  [Lihat Proyek] [Hubungi]     └────────────┘ │
├───────────────┬───────────────┬─────────────┤
│  ABOUT        │  SKILLS — node/grid map     │
├───────────────┴───────────────┴─────────────┤
│  EXPERIENCE — kartu tebal bertumpuk          │
├───────────────────────────────────────────────┤
│  PROJECTS — grid 2–3 kolom, tinggi kartu sama │
├───────────────────────────────────────────────┤
│  LEADERSHIP & VOLUNTEER — grid 2 kolom        │
├──────────────────┬────────────────────────────┤
│  EDUCATION       │  CERTIFICATIONS — "stiker"  │
├──────────────────┴────────────────────────────┤
│  CONTACT / FOOTER                             │
└───────────────────────────────────────────────┘
```

### Elemen Signature — Status Bar ala Terminal Jaringan

Widget kecil di hero yang tampil seperti output `ping`, merujuk langsung ke sertifikasi Cisco-nya:

```
$ ping dhio-portfolio --status
> HOST: dhio-andreas-gemilang
> STATUS: available for work
> UPTIME: open to opportunities
> LATENCY: replies within 24h
```

Versi mininya dipakai ulang di bagian Skills: tiap kelompok skill jadi "node" persegi yang terhubung garis putus-putus — sekaligus diagram topologi jaringan dan tabel grid biasa. Ini satu-satunya tempat "boros" secara visual; bagian lain dibuat tenang dan disiplin.

### Interaksi & Aksesibilitas
- Hover/klik pada kartu & tombol: geser `translate(2px, 2px)` + bayangan mengecil dari `6px 6px 0` ke `2px 2px 0` (efek "ditekan").
- Fokus keyboard: outline dashed tebal 3px warna Signal Yellow (tetap dalam gaya, tidak dihilangkan demi estetika).
- Hormati `prefers-reduced-motion`: matikan animasi status bar/garis penghubung untuk yang memilih motion berkurang.
- Breakpoint: grid 12-kolom → tumpuk 1 kolom di bawah 768px, kartu skill/sertifikasi jadi 2 kolom di tablet.

---

## 2. Alur / Struktur Halaman (Site Flow)

1. **Hero** — nama, peran, status bar, CTA (Lihat Proyek / Hubungi Saya)
2. **About** — ringkasan profil profesional
3. **Skills** — dikelompokkan, ditampilkan sebagai node grid
4. **Experience** — pengalaman kerja, urut terbaru
5. **Projects** *(perlu diisi — lihat catatan di bawah)*
6. **Leadership & Volunteer** — kepemimpinan & kegiatan sosial
7. **Education** — riwayat pendidikan
8. **Certifications** — ditampilkan sebagai grid "stiker"
9. **Contact / Footer** — kontak & tautan

> ⚠️ **Catatan penting:** CV belum mencantumkan proyek teknis konkret (repo, demo, tumpukan teknologi per proyek) — hanya deskripsi tugas magang secara umum. Untuk portofolio developer, section **Projects** biasanya paling menentukan. Sebaiknya tambahkan 2–4 studi kasus proyek nyata (boleh dari magang, tugas kuliah, atau proyek pribadi) lengkap dengan tautan GitHub/demo dan tangkapan layar sebelum situs di-deploy.

---

## 3. Konten Siap Pakai (dari CV)

### Hero
```
Nama       : Dhio Andreas Gemilang
Peran      : Full-Stack Developer · IT Graduate
Lokasi     : Klender, Jakarta Timur
Kontak     : dhioandreas50@gmail.com · +62 821-1510-7236
```

### About
```
Lulusan Teknologi Informasi (Universitas Darma Persada, 2025, IPK 3.34/4.00)
dengan pengalaman langsung membangun aplikasi web dan mobile full-stack
menggunakan Python, PHP, JavaScript, React.js, dan Laravel, dilengkapi
sertifikasi jaringan Cisco CCNAv7 dan IT Essentials. Memadukan kemampuan
teknis dengan pengalaman kepemimpinan nyata — memimpin komunitas besar,
mengoordinasikan operasi pelabelan data, dan menjabat sekretaris RT.
Bersertifikat di berbagai disiplin Kesehatan & Keselamatan Kerja (K3),
termasuk Job Safety Analysis, Fire Safety, dan First Aid.
```

### Skills (kelompok node)
| Kelompok | Item |
|---|---|
| Programming & Web | Python, Java, PHP, JavaScript, HTML5, CSS3, React.js, Laravel |
| Mobile | Flutter, Dart, Android Studio |
| Data & ML | MySQL, TensorFlow, Keras, Jupyter Notebook, Data Analysis |
| Tools & Platforms | VS Code, Postman, XAMPP, Google Cloud (basic), cPanel |
| Networking | Cisco CCNAv7, IT Essentials |
| Professional | Team Leadership, Cross-functional Communication, Time Management, Problem-Solving, Adaptability |

### Experience
```
### Data Annotator — KUPU ID
Feb 2026 – Sekarang
- Melabeli & mengannotasi dataset skala besar (teks/gambar/audio) sesuai
  panduan proyek untuk mendukung pelatihan model machine learning.
- Meninjau & memvalidasi akurasi anotasi terhadap tolok ukur kualitas.
- Berkolaborasi dengan QA reviewer & project lead untuk menyempurnakan
  panduan anotasi dan menyelesaikan perbedaan pelabelan.
- Memenuhi target throughput & akurasi harian sesuai tenggat proyek.

### Full-Stack Developer (Magang) — Agung Properti Syariah
2024
- Membangun antarmuka responsif untuk web & mobile.
- Mengimplementasikan business logic, konektivitas database, keamanan,
  dan autentikasi.
- Memelihara & mengoptimalkan aplikasi live agar tetap stabil dan mudah
  digunakan.
```

### Leadership & Volunteer
```
### Sekretaris — Pengurus RT 005/RW 002, Kel. Klender
2017 – Sekarang
- Mengelola korespondensi masuk/keluar (surat pengantar, surat domisili,
  undangan rapat).
- Menyiapkan agenda, undangan, dan tempat untuk rapat rutin/insidental.
- Menjadi penghubung komunikasi antara ketua RT, pengurus, dan warga.

### Divisi Humas — Scooterist East Jakarta United (SJTB)
2017 – Sekarang
- Memproduksi & menyunting publikasi organisasi, mengelola konten
  web & media sosial.
- Merancang & mengawasi komunikasi visual dan produksi konten digital.
- Memantau liputan media dan mengidentifikasi tren yang relevan.

### Ketua — Scooter Gokil Independent (SGI)
2015 – Sekarang
- Memimpin & mengawasi seluruh operasional dan kegiatan organisasi.
- Mewakili organisasi di acara & fungsi publik eksternal.
- Menjaga integritas dan kekompakan seluruh pengurus organisasi.

### Anggota KPPS — Komisi Pemilihan Umum (KPU), Pilpres 2024
2024
- Mengarahkan pemilih dalam proses pencoblosan di TPS.
- Membantu pemilih tunanetra yang datang tanpa pendamping keluarga.
- Menghitung & memverifikasi suara di hadapan saksi resmi, serta
  menyerahkan hasil ke kantor kelurahan.
```

### Education
```
Sarjana Teknologi Informasi (S-1) — Universitas Darma Persada, Jakarta
2021 – 2025 · IPK 3.34/4.00

Teknik Elektronika (Audio Video) — SMKN 5 Jakarta
2015 – 2018
```

### Certifications (tampil sebagai "stiker")
```
- Cisco CCNAv7: Introduction to Networks — Cisco Networking Academy
- Cisco IT Essentials — Cisco Networking Academy
- Job Safety Analysis (JSA) — 3S Learning Center
- Fire Safety Officer (FSO) — 3S Learning Center
- First Aid — 3S Learning Center
- Occupational Health & Safety Management System — 3S Learning Center
```

### Contact / Footer
```
Email    : dhioandreas50@gmail.com
Telepon  : +62 821-1510-7236
Lokasi   : Klender, Jakarta Timur 13470
SIM      : C
(Tambahkan tautan GitHub/LinkedIn jika ada — belum tercantum di CV)
```

---

## 4. Struktur Proyek Astro yang Disarankan

```
src/
├─ content.config.ts          # definisi collection (lihat contoh di bawah)
├─ content/
│  ├─ experience/
│  │  ├─ kupu-id.md
│  │  └─ agung-properti-syariah.md
│  ├─ leadership/
│  │  ├─ rt-secretary.md
│  │  ├─ sjtb-humas.md
│  │  ├─ sgi-chief.md
│  │  └─ kpps-2024.md
│  ├─ certifications/
│  │  ├─ ccna-v7.md
│  │  ├─ it-essentials.md
│  │  ├─ jsa.md
│  │  ├─ fso.md
│  │  ├─ first-aid.md
│  │  └─ ohs-management.md
│  └─ projects/                # isi setelah studi kasus proyek siap
├─ components/
│  ├─ Nav.astro
│  ├─ Hero.astro
│  ├─ StatusBar.astro          # elemen signature (ping widget)
│  ├─ SectionTile.astro        # wrapper kartu bordered+shadow, dipakai berulang
│  ├─ SkillNode.astro
│  ├─ ExperienceCard.astro
│  ├─ ProjectCard.astro
│  ├─ CertSticker.astro
│  └─ Footer.astro
├─ layouts/
│  └─ BaseLayout.astro
└─ pages/
   └─ index.astro
```

### Contoh skema `content.config.ts`

```ts
import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "content",
  schema: z.object({
    role: z.string(),
    org: z.string(),
    period: z.string(),
    bullets: z.array(z.string()),
  }),
});

const certifications = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
  }),
});

export const collections = { experience, certifications };
```

### Contoh isi `src/content/experience/kupu-id.md`

```md
---
role: "Data Annotator"
org: "KUPU ID"
period: "Feb 2026 – Sekarang"
bullets:
  - "Melabeli & mengannotasi dataset skala besar sesuai panduan proyek."
  - "Meninjau & memvalidasi akurasi anotasi terhadap tolok ukur kualitas."
  - "Berkolaborasi dengan QA reviewer & project lead."
  - "Memenuhi target throughput & akurasi harian."
---
```

Pola ini membuat penambahan pengalaman/sertifikasi baru di masa depan cukup dengan menambah satu file `.md`, tanpa menyentuh komponen atau layout.

---

## 5. Langkah Selanjutnya
- [ ] Isi 2–4 studi kasus proyek nyata (repo/demo/screenshot) — prioritas tertinggi
- [ ] Tambahkan tautan GitHub/LinkedIn jika ada
- [ ] Bangun `StatusBar.astro` sebagai elemen signature terlebih dahulu — ini yang paling menentukan "rasa" desainnya
- [ ] Uji kontras warna (Signal Yellow di atas Paper) untuk aksesibilitas AA
- [ ] Screenshot & review sendiri di breakpoint mobile sebelum deploy
