# Discord Voice AFK

Bot Discord super ringan yang cuma join voice channel dan diem aja. Gak ada musik, gak ada command — pure AFK.

## Fitur

- Join voice channel langsung pas bot dinyalakan
- Auto-reconnect jika disconnect
- Zero feature — benar-benar cuma duduk manis di VC
- Lightweight (RAM minimal)

## Cara Install

### 1. Clone repo

```bash
git clone https://github.com/FidenID/Discord-Voice-AFK.git
cd Discord-Voice-AFK
```

### 2. Install dependencies

**Linux:**
```bash
sudo apt install -y ffmpeg
npm install
```

**macOS:**
```bash
brew install ffmpeg
npm install
```

**Windows:**
```powershell
# Download ffmpeg dari https://ffmpeg.org/download.html
# Lalu tambahkan ke PATH
npm install
```

### 3. Konfigurasi

```bash
cp .env.example .env
nano .env
```

Isi `.env`:

```
DISCORD_TOKEN=token_discord_kamu
VC_ID=id_voice_channel
```

### 4. Jalankan

```bash
npm start
```

Atau pake PM2 biar jalan terus:

```bash
npm install -g pm2
pm2 start index.js --name vc-afk
pm2 save
pm2 startup
```

## Cara Dapat Token

1. Buka Discord di browser
2. Login ke akun kamu
3. Tekan F12 (DevTools)
4. Buka tab **Application** > **Local Storage** > `https://discord.com`
5. Cari key `token` — copy value-nya

## Cara Dapat ID Voice Channel

1. Settings Discord > **Advanced** > **Developer Mode** ON
2. Klik kanan voice channel > **Copy ID**

## Struktur File

```
.env              <- config (token, vc id) — jangan di-share
.env.example      <- contoh config
.gitignore        <- file yang di-skip git
index.js          <- bot utama
package.json      <- dependencies
README.md         <- ini
install.sh        <- auto install Linux
install-macos.sh  <- auto install macOS
install.ps1       <- auto install Windows
```
