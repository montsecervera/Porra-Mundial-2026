@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias de la app visual vacia...
  npm install
)
npm start
