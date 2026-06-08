<div align="center">

# FIFA World Cup 2026 - Porra Visual

### Simula el cuadro, elige por bombos y juega la porra con un panel visual

[![Windows](https://img.shields.io/badge/Windows-App-42d8ff?style=for-the-badge)](#descargar)
[![Portable](https://img.shields.io/badge/Portable-Sin_instalar-ffe45f?style=for-the-badge)](#descargar)
[![Mundial 2026](https://img.shields.io/badge/Mundial-2026-caffd8?style=for-the-badge)](#que-hace)

**Tambien puedes descargar el `.exe` y tener la aplicacion directamente en tu ordenador.**  
No necesitas instalar Node.js ni abrir el codigo para usarla.

<img src="./docs/preview.png" alt="Vista previa de la app" width="100%">

</div>

---

## Descargar

Para usar la app no hace falta tocar codigo: descarga uno de los `.exe` y abre la aplicacion en tu ordenador.

| Opcion | Archivo | Cuando usarla |
| --- | --- | --- |
| Portable | [`Mundial2026-App-Visual-Vacio-Portable.exe`](./Mundial2026-App-Visual-Vacio-Portable.exe) | Abrir y usar directamente, sin instalar nada. |
| Instalador | [`Mundial 2026 App Visual Vacio Setup 0.1.0.exe`](./Mundial%202026%20App%20Visual%20Vacio%20Setup%200.1.0.exe) | Instalar la app en Windows como una aplicacion normal. Despues podras buscarla y abrirla desde el menu/directorio de aplicaciones de tu PC. |

> Windows puede mostrar un aviso de editor desconocido porque la app no esta firmada con certificado comercial.

## Que Hace

Esta app permite jugar con el Mundial 2026 de forma visual:

- Reordena los grupos arrastrando equipos.
- Rellena la primera ronda automaticamente desde el orden de grupos.
- Completa el cuadro a mano con drag and drop.
- Valida que cada equipo solo pueda entrar en cruces donde realmente aplica.
- Genera el cuadro completo desde una seleccion por bombo.
- Muestra lineas de flujo para seguir el camino hasta la final.
- Destaca los equipos elegidos por bombo dentro del cuadrante.

## Dos Modos

### Generar por cuadro

Pensado para construir el Mundial paso a paso.

1. Ordena cada grupo segun tu prediccion.
2. Pulsa **Simular primera ronda**.
3. Completa el resto de cruces arrastrando ganadores.
4. Pulsa **Simular bombos** para ver que equipo conviene elegir en cada bombo segun el cuadro que hayas armado.

### Generar por bombo

Pensado para decidir tus selecciones de porra rapido.

1. Elige un equipo de cada bombo.
2. Pulsa **Generar cuadrante**.
3. La app rellena el cuadro completo y destaca tus elegidos.

## Que Incluye

- 48 selecciones organizadas por grupos.
- Banderas locales de todos los equipos.
- Cuadro completo del Mundial 2026, de M73 a M104.
- Pestañas para trabajar por cuadro o por bombo.
- Ejecutable portable e instalador para Windows.

## Ejecutar Desde Codigo

Solo hace falta si quieres modificar la app.

```bash
npm install
npm start
```

Tambien puedes usar:

```bat
INICIAR_APP.bat
```

## Crear Ejecutables

```bash
npm run build:portable
```

El resultado se genera en la carpeta `dist/`.

---

<div align="center">

**Porra Mundial 2026**  
Una forma mas clara, rapida y divertida de discutir el cuadro antes de jugar.

</div>
