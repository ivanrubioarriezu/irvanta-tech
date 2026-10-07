# Irvanta TECH

Sitio corporativo inicial construido con Astro.

## Desarrollo

```sh
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

## Publicación en GitHub Pages

El workflow de GitHub Actions publica el sitio automáticamente al subir cambios a `main`.
En el repositorio, configura **Settings → Pages → Build and deployment → Source** como
**GitHub Actions**. La publicación estará disponible en `https://<usuario>.github.io/irvanta-tech/`.

## Contenido por confirmar

- Revisar `src/data/site.ts`: correo de contacto y perfiles sociales.
- Completar la razón social, NIF/CIF, domicilio y datos registrales en `src/pages/legal/`.
- Revisar los borradores legales y la configuración de servicios de terceros antes de publicar.
- Añadir casos reales y resultados medibles a `src/pages/about.astro` cuando estén disponibles.
