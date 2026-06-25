#!/bin/bash
echo "[Discord-Voice-AFK] Installing dependencies..."
sudo apt update && sudo apt install -y ffmpeg curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22
npm install
echo ""
echo "Done! Edit .env lalu jalankan: npm start"
