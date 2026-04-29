# Para Mi Princesa Esmeralda

Página web personal con cuenta regresiva hasta el cumpleaños de Esmeralda (Pollito) el **10 de mayo de 2026**, con 13 cartas cursis y principescas (una por día) que se desbloquean automáticamente cada mañana.

Hecho con Astro 6 + Tailwind v4. Listo para Netlify.

## Estructura clave

- `src/data/letters.ts` — Aquí están las 13 cartas. Edita el texto de cada una para personalizarlo aún más. La firma global (`FIRMA`) y los nombres (`NOMBRE`, `APODO`) también están ahí.
- `src/pages/index.astro` — Hero con countdown + grid de los 13 sobres.
- `src/pages/cartas/[slug].astro` — Vista completa de cada carta. Si la fecha aún no llegó, muestra una pantalla con candado.
- `src/components/Countdown.astro` — Reloj de cuenta regresiva. Target en `src/data/letters.ts` constante `TARGET_DATE_ISO`.
- `src/components/LetterCard.astro` — Sobre individual con tres estados (bloqueado, hoy, pasado).
- `src/scripts/lockState.ts` — Lógica que decide si una carta está bloqueada o no.
- `src/styles/global.css` — Paleta y animaciones. Cambia colores aquí si quieres ajustar el tono.

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Cómo cambiar el contenido

1. **Cartas**: abre `src/data/letters.ts` y edita el `body` (array de párrafos), `title`, `preview`, `signoff`. Cada carta es un objeto.
2. **Nombre / apodo / firma**: las constantes `NOMBRE`, `APODO`, `FIRMA` al inicio del mismo archivo.
3. **Fecha de cumpleaños**: cambia `TARGET_DATE_ISO` en `src/data/letters.ts` y la `date` de la carta del cumple.

## Deploy en Netlify

### Opción 1 — Netlify Drop (rápido, sin GitHub)

```sh
npm run build
```

Luego entra a [https://app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la carpeta `dist/`. Te dan una URL al instante (renombrable después).

### Opción 2 — Conectado a GitHub (auto-deploy)

```sh
git init && git add . && git commit -m "Para mi princesa Esmeralda"
gh repo create para-mi-princesa --private --source=. --push
```

En [Netlify](https://app.netlify.com) → "Add new site" → "Import from GitHub" → elige `para-mi-princesa`. Build command y publish folder ya están en `netlify.toml`. Cada `git push` redespliega.

## Notas

- El candado usa la **fecha local del navegador**. Si Pollito viaja, igual se respeta la fecha de su zona.
- Los párrafos están escritos como borradores. Personaliza lo que quieras: detalles, anécdotas, nombres de lugares, recuerdos compartidos. Mientras más personal, mejor.
- Si quieres añadir fotos, créa una carpeta `public/img/` y úsalas como `<img src="/img/foto.jpg" />` desde cualquier carta o página.

Hecho con todo el amor del mundo. Feliz cumpleaños, princesa.
