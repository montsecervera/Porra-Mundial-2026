# Mundial 2026 - APP Visual Vacia

Mini aplicacion local para compartir con participantes de la porra.

Incluye:

- Fase de grupos con las 48 selecciones.
- Banderas locales para todos los equipos.
- Reordenacion de cada grupo arrastrando equipos dentro del grupo.
- Cuadro de eliminatorias vacio con referencias oficiales de cruce: M73-M104, 1A/2B/3A y ganadores G73-G102.
- Boton `Simular` para autorrellenar solo la ronda de 32 desde el orden actual de los grupos.
- Lineas de flujo entre partidos para seguir el camino del cuadro.
- Drag and drop desde los grupos hacia cualquier casilla del cuadro.
- Boton para reiniciar el tablero.

No incluye:

- Recomendaciones.
- Rankings o escenarios CSV.
- Datos calculados.
- Lectura de archivos internos del proyecto original.

## Ejecutar en Windows

Doble clic en:

```bat
INICIAR_APP.bat
```

La primera vez instalara dependencias con `npm install`. Despues abrira la app con Electron.

## Ejecutar desde terminal

```bash
npm install
npm start
```
