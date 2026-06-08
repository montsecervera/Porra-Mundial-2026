const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

async function main() {
  await app.whenReady();

  const win = new BrowserWindow({
    width: 2800,
    height: 1800,
    show: false,
    backgroundColor: '#07111f',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  await win.loadFile(path.join(__dirname, '..', 'src', 'index.html'));
  win.webContents.setZoomFactor(0.78);
  await win.webContents.executeJavaScript(`
    document.querySelector('#simulateFullBracket')?.click();
    document.querySelector('.simulation-results')?.setAttribute('hidden', '');
    const style = document.createElement('style');
    style.textContent = 'html, body { overflow: hidden !important; } .poster-shell { min-height: auto !important; }';
    document.head.appendChild(style);
    window.scrollTo(0, 0);
  `);
  await new Promise((resolve) => setTimeout(resolve, 600));

  const image = await win.webContents.capturePage();
  const docsDir = path.join(__dirname, '..', 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'preview.png'), image.toPNG());

  app.quit();
}

main().catch((error) => {
  console.error(error);
  app.exit(1);
});
