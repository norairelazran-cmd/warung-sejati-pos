# Warung Sejati House POS

Point of Sale system untuk Warung Sejati House.

## Setup & Deploy

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally (untuk test)
```bash
npm run dev
```

### 3. Build untuk production
```bash
npm run build
```

### 4. Deploy ke Vercel
- Push repo ni ke GitHub
- Pergi vercel.com → Import Project → pilih repo ni
- Vercel auto detect Vite, terus deploy
- Dapat URL macam `warung-sejati-pos.vercel.app`

### 5. Install sebagai PWA (Add to Home Screen)
- Buka URL di Safari (iPhone/iPad) atau Chrome (Android)
- iPhone/iPad: Tekan Share → "Add to Home Screen"
- Android: Tekan menu → "Install App" atau "Add to Home Screen"

## Features
- POS dengan full menu Warung Sejati House
- Jana Invoice PDF boleh download
- Kira baki customer
- Works offline (PWA)
