# Portfolio de David Pricop

Web estática hecha con [Astro](https://astro.build) y TypeScript. Sin backend. Pensada para Cloudflare Pages en `david.pricop.es`.

## Comandos

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run preview
```

- `npm run dev` abre la web en local, con los huecos «pendiente» visibles.
- `npm run build` comprueba los tipos y genera la web en `dist/`. Si a un proyecto le falta un dato obligatorio, falla.
- `npm run og` regenera la imagen para compartir (`public/og.png`).

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Correo, LinkedIn, GitHub, ruta del CV | `src/data/site.ts` |
| Un proyecto (textos, estado, enlaces, capturas) | `src/content/proyectos/<nombre>.md` |
| Los campos que admite un proyecto | `src/content.config.ts` |
| Capturas de pantalla | `src/assets/capturas/` |
| Datos de la franja de la portada | `src/components/Proof.astro` |
| Pasos del método | `src/components/Method.astro` |
| Esquema del homelab | `src/components/Rack.astro` |
| Lista de tecnologías | `src/components/Stack.astro` |
| Trayectoria y formación | `src/pages/sobre-mi.astro` |
| Colores y tipografía | `src/styles/global.css` |

### Añadir un proyecto

Crea un archivo `.md` nuevo en `src/content/proyectos/` copiando uno existente. El nombre del archivo es su dirección: `mi-app.md` → `/proyectos/mi-app/`.

### Publicar el CV en PDF

1. Guarda el PDF en `public/cv/david-pricop-cv.pdf`. Usa una versión sin fecha de nacimiento ni teléfono.
2. En `src/data/site.ts`, cambia `cvPdf: null` por `cvPdf: '/cv/david-pricop-cv.pdf'`.

Los botones «CV» pasan solos de enlazar a la trayectoria a descargar el PDF.

## Reglas del contenido

- Solo se afirma lo que está comprobado. Lo que no está terminado va en `enDesarrollo`.
- Nada de cifras, clientes ni reseñas inventadas.
- Los `pendientes` de cada proyecto solo se ven con `npm run dev`. Nunca salen en la web publicada.
- Del homelab no se publican IP, dominios internos ni credenciales. El rack es un dibujo.
- Sin secretos en el repositorio: esta web no usa claves ni variables de entorno.

## Despliegue en Cloudflare Pages

1. Sube este proyecto a un repositorio de GitHub.
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elige el repositorio.
3. Configuración de build:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Versión de Node: la toma del archivo `.node-version` (24). Si no, añade la variable `NODE_VERSION` = `24`.
4. En **Custom domains**, añade `david.pricop.es`. La zona `pricop.es` ya está en Cloudflare, así que el registro DNS y el HTTPS se crean solos.

Cada `push` a `main` publica la web. Cada rama o pull request genera una URL de previsualización.
