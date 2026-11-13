# 🎮 Block Blast Arcade Pro (React + Vite + Tailwind CSS)

Professional darajada tayyorlangan **Block Blast** va **Sudoku 9x9 (Woodoku)** blokli boshqotirma o'yinlari portali. 100% bittada deploy bo'ladigan arxitektura, responsive dizayn, Web Audio API saund effektlari va Canvas zarrachalari bilan yaratilgan.

---

## 🌟 O'yin Xususiyatlari

### 1. 🟦 Block Blast Master (8x8)
- **Klassik rejim (Classic)**: 8x8 maydonda cheksiz boshqotirma. Gorizontal va vertikal to'liq qatorlar portlaydi.
- **Vaqtli rejim (Time Rush)**: 60 soniya vaqt. Har bir qator portlatilganda +3 soniya qo'shimcha vaqt beriladi!
- **Bomba rejimi (Bomb Defuse)**: Har 4 qadamda doskada taymerli bomba paydo bo'ladi. U portlamasdan oldin qatorini tozalang!
- **Hardcore rejim**: Doskada qimirlamaydigan tosh to'siqlar bo'ladi, bu esa o'yinni yanada qiziqarli qiladi.
- **Combo & Multi-Blast**: Bir vaqtning o'zida bir nechta qator tozalanganda yoki ketma-ket harakatlarda portlash bo'lganda ballar 2x, 3x, 5x ko'payadi!

### 2. 🟫 Woodoku / Sudoku 9x9 Blast (Qo'shimcha O'yin)
- 9x9 Sudoku doskasi.
- Nafaqat qator va ustunlar, balki **3x3 katakli kvadratlar** ham to'lganda portlaydi!
- Klassik yog'och (Wood) mavzusi bilan meditativ o'yin tajribasi.

### 3. 🎨 4 Xil Rang-barang Mavzular (Themes)
- **Neon Cyber**: Zamonaviy retro kiber neon uslubi
- **Klassik Javohir (Gems)**: Yoqut, zumrad va safir toshlari
- **Shirin Candy**: Shirin pastel ranglar
- **Klassik Yog'och (Wood)**: Tinchlantiruvchi yog'och teksturasi

### 4. 🔊 Web Audio API Synthesizer (Nol Bog'liqlik)
- Hech qanday tashqi audio fayl yuklab o'tirmaydi — 100% oflayn ishlaydi.
- Blok qo'yish, multi-blast, combo, yangi rekord va game over ovozlari.
- Ovozni bitta tugma bilan yoqish/o'chirish imkoniyati.

### 5. 📱 100% Mobil va Kompyuterga Mos (Responsive)
- Sensorli ekranda bitta bosish (Click-to-place) va sudrab qo'yish (Drag & Drop) imkoni.
- Avtomatik LocalStorage orqali rekordlar (High Score) va statistika saqlanadi.

---

## 🚀 O'rnatish va Ishga Tushirish

### 1. Paketlarni o'rnatish:
```bash
npm install
```

### 2. Dasturni ishga tushirish (Local Dev Server):
```bash
npm run dev
```
Brauzerda `http://localhost:3000` manzilida ochiladi.

### 3. Production uchun Build qilish:
```bash
npm run build
```
Natijada `dist` papkasi hosil bo'ladi.

---

## 🌐 Git & GitHub ga Yuklash

Loyiha papkasida terminalni oching va quyidagi buyruqlarni ketma-ket bajaring:

```bash
# 1. Git holatini tekshirish
git status

# 2. GitHub da yangi repozitoriy yarating (masalan: block-blast-arcade)
# 3. GitHub manzilingizni bog'lang:
git remote add origin https://github.com/USERNAME/block-blast-arcade.git

# 4. Asosiy tarmoqni main qilib belgilang:
git branch -M main

# 5. GitHub ga yuklang (Push):
git push -u origin main
```

---

## ⚡ Bittada Deploy Qilish (Vercel yoki Netlify)

### Vercel orqali (Tavsiya etiladi - 30 soniyada):
1. [vercel.com](https://vercel.com) ga kiring va GitHub profilingiz bilan tizimga kiring.
2. **"Add New Project"** tugmasini bosing va `block-blast-arcade` repozitoriyasini tanlang.
3. **Framework Preset**: `Vite` (avtomatik aniqlanadi).
4. **Deploy** tugmasini bosing! 
5. Saytingiz butun dunyo bo'ylab bepul ishga tushadi (masalan: `block-blast-arcade.vercel.app`).

### Netlify orqali:
1. [netlify.com](https://netlify.com) ga kiring.
2. **"Add new site" -> "Import an existing project"** ni bosing.
3. GitHub repozitoriyangizni tanlang.
4. Build command: `npm run build`, Publish directory: `dist`.
5. **Deploy Site** ni bosing!

---

## 📂 Loyiha Tuzilishi

```text
├── src/
│   ├── constants/
│   │   ├── shapes.js          # Blok shakllari matrisasi (1x1, L, T, Z, 2x2, 3x3 va h.k.)
│   │   └── themes.js          # Neon, Gems, Candy, Wood temalari
│   ├── sound/
│   │   └── soundEngine.js     # Web Audio API sintezator ovozlari
│   ├── utils/
│   │   ├── particleEngine.js  # Canvas zarracha / confetti portlash animatsiyasi
│   │   └── storage.js         # LocalStorage rekordlar va statistikalar
│   ├── components/
│   │   ├── Navbar.jsx         # O'yin menyusi, mavzu tanlash, ovoz, yordam
│   │   ├── ScoreBoard.jsx     # Ballar, Streak va Taymer paneli
│   │   ├── GameOverModal.jsx  # Yutqazish va yangi rekord modali
│   │   ├── HowToPlayModal.jsx # O'yin qoidalari va qo'llanma
│   │   └── ParticleCanvas.jsx # Ekran ustidagi 60 FPS salyut zarrachalari
│   ├── games/
│   │   ├── BlockBlast/
│   │   │   ├── BlockBlastGame.jsx # 8x8 Asosiy o'yin mantig'i
│   │   │   ├── Board.jsx          # 8x8 Doska komponenti
│   │   │   └── ShapeDock.jsx      # Pastdagi 3 ta blok docki
│   │   └── Woodoku/
│   │       ├── WoodokuGame.jsx    # 9x9 Sudoku Block Puzzle o'yini
│   │       └── WoodokuBoard.jsx   # 9x9 Sudoku doskasi (3x3 chegaralari bilan)
│   ├── App.jsx                # Asosiy App konteyneri
│   ├── main.jsx               # React kirish nuqtasi
│   └── index.css              # Tailwind CSS va maxsus animatsiyalar
├── index.html                 # HTML shabloni va Google Shriftlar
├── package.json               # Paketlar va buyruqlar
├── tailwind.config.js         # Tailwind konfiguratsiyasi
├── vite.config.js             # Vite konfiguratsiyasi
└── README.md                  # Loyiha hujjatlari
```
