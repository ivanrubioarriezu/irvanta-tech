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

## Analítica y consentimiento

La medición está preparada para Google Analytics 4 y solo se carga si la persona visitante
acepta las cookies analíticas. Registra páginas vistas y el envío del formulario con el motivo
predefinido; no envía nombre, correo ni texto libre del formulario.

La publicación de GitHub Pages usa el ID configurado en `.github/workflows/deploy.yml`.
Para desarrollo local, añade este mismo ID a `.env`:

```dotenv
PUBLIC_GA_MEASUREMENT_ID=G-9NLP1VTQZQ
```

Si cambia la propiedad, actualiza el ID tanto en el workflow como en `.env`.

Si la variable no existe o no tiene un ID válido, Analytics no se carga. El identificador es
público y queda incluido en los archivos del sitio; no es un secreto. Comprueba en GA4 la
configuración de retención y las opciones de medición antes de publicar.

## Mantenimiento de contenidos

- Mantén las políticas de privacidad y cookies sincronizadas si cambian los proveedores,
  eventos o finalidades de analítica.
- Añade casos reales y resultados medibles a `src/pages/about.astro` cuando estén disponibles.
