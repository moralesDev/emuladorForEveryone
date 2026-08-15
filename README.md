# EmuladorForEveryone — sitio web oficial

Sitio estático (HTML + CSS, sin JavaScript, sin backend) para la aplicación Android **EmuladorForEveryone**, de **moralesDev**. Preparado para publicarse tal cual en GitHub Pages.

---

## 1. Archivos creados

```
site/
├── index.html          Landing: hero, características, propiedad intelectual, Google Play
├── privacy.html        Política de privacidad (12 apartados)
├── terms.html          Términos de uso (12 apartados)
├── contact.html        Contacto y guía para reportar problemas
├── css/
│   └── site.css        Única hoja de estilos (tokens del tema oscuro de la app)
├── assets/
│   ├── icons/
│   │   └── app-icon.svg    Icono de la app (512×512, gráfico propio)
│   └── images/
│       └── .gitkeep        Aquí va og-image.png (1200×630) y capturas propias
├── favicon.svg         Favicon (SVG, gráfico propio)
└── robots.txt
```

Todos los gráficos son originales: el mockup del teléfono está dibujado con HTML y CSS, y el icono con SVG. No se usa ningún elemento gráfico de terceros.

## 2. Cómo ejecutar el sitio localmente

Opción A — abrir el archivo directamente:

```
Abre site/index.html con doble clic en el navegador.
```

Opción B — servidor local (recomendado, las rutas se comportan como en producción):

```bash
cd site
python3 -m http.server 8000
# luego abre http://localhost:8000
```

Con Node instalado: `npx serve site`

## 3. Cómo publicarlo en GitHub Pages

1. Crea un repositorio público en GitHub, por ejemplo `emuladorforeveryone-web`.
2. Copia el **contenido** de la carpeta `site/` en la raíz del repositorio (que `index.html` quede en la raíz, no dentro de `site/`).
3. Sube los archivos:

   ```bash
   git init
   git add .
   git commit -m "Sitio web oficial de EmuladorForEveryone"
   git branch -M main
   git remote add origin https://github.com/USUARIO/emuladorforeveryone-web.git
   git push -u origin main
   ```

4. En GitHub: **Settings → Pages**.
5. En *Build and deployment* → *Source*, elige **Deploy from a branch**.
6. Branch: **main**, carpeta: **/ (root)**. Guarda.
7. Espera 1–2 minutos. La URL será `https://USUARIO.github.io/emuladorforeveryone-web/`.

Si prefieres mantener la carpeta `site/` dentro del repositorio, en el paso 6 elige la carpeta **/docs** y renombra `site/` a `docs/`.

Dominio propio (opcional): en *Settings → Pages → Custom domain*, y añade un archivo `CNAME` con el dominio.

## 4. Qué datos debo reemplazar

El correo de soporte y el nombre de la app ya están aplicados. Busca estos marcadores en todos los archivos y sustitúyelos:

| Marcador | Dónde aparece | Con qué reemplazarlo |
| --- | --- | --- |
| `[DATOS DEL DESARROLLADOR]` | privacy (apartado 1) | Los datos del desarrollador que muestres en Google Play |
| `[GOOGLE_PLAY_URL]` | index (sección Google Play) | URL real de la ficha; quita también `aria-disabled="true"` del botón |

Además:

- **og-image.png** — crea una imagen 1200×630 propia, guárdala en `assets/images/` y, cuando conozcas la URL definitiva, añade en cada `<head>`:
  `<meta property="og:image" content="https://TU-URL/assets/images/og-image.png">` (Open Graph exige URL absoluta). Igualmente, si quieres `sitemap.xml` y la línea `Sitemap:` de `robots.txt`, necesitan la URL absoluta.
- **favicon.ico** — se incluye `favicon.svg`, que cubre los navegadores actuales. Si quieres el `.ico` clásico, convierte `favicon.svg` a `favicon.ico` (16/32/48 px) y añade `<link rel="icon" href="favicon.ico" sizes="any">`.
- **Etiquetas «En desarrollo»** — en `index.html`, dentro de cada tarjeta de característica hay un comentario HTML con la etiqueta lista:
  `<span class="tag tag-outline">En desarrollo</span>`. Descoméntala en las funciones que aún no estén terminadas y bórrala cuando lo estén.
- Si el proyecto incorpora Firebase, Crashlytics, analítica, publicidad o cualquier SDK externo, **actualiza `privacy.html` (apartados 4 y 7)** antes de publicar esa versión.

## 5. Qué URL tendrá cada página

Con `https://USUARIO.github.io/emuladorforeveryone-web/` como base:

| Página | URL |
| --- | --- |
| Inicio | `.../` o `.../index.html` |
| Offline | `.../index.html#offline` |
| Características | `.../index.html#caracteristicas` |
| Experiencia | `.../index.html#experiencia` |
| Privacidad (sección) | `.../index.html#privacidad` |
| Modelo de compra | `.../index.html#precio` |
| Google Play | `.../index.html#google-play` |
| Propiedad intelectual y ROMs | `.../index.html#propiedad-intelectual` |
| Privacidad | `.../privacy.html` |
| Términos | `.../terms.html` |
| Contacto | `.../contact.html` |
| Robots | `.../robots.txt` |

## 6. Qué necesitarás después para Google Play Console

Datos y archivos que la ficha exige y que este sitio no puede inventar:

**Cuenta y datos legales**
- Cuenta de desarrollador de Google Play (pago único de registro) verificada con documento de identidad.
- Nombre de desarrollador público, dirección física y teléfono de contacto (Google los verifica; la dirección se muestra en la ficha de una cuenta personal).
- Correo electrónico de contacto público.
- URL de la política de privacidad → la de este sitio: `.../privacy.html`.

**Ficha de la tienda**
- Nombre de la app (máx. 30 caracteres) y nombre definitivo si «EmuladorForEveryone» resulta demasiado genérico o conflictivo.
- Descripción breve (máx. 80 caracteres) y descripción completa (máx. 4000).
- Icono 512×512 PNG, gráfico destacado 1024×500 PNG/JPG.
- Al menos 2 capturas de teléfono (mín. 320 px de lado); si declaras tablets, capturas de 7" y 10".
- Categoría, etiquetas y clasificación de contenido (cuestionario IARC).

**Cumplimiento**
- Formulario de **seguridad de los datos**: con el diseño actual, «no se recopilan ni comparten datos».
- Declaraciones de anuncios (no), compras en la aplicación (no), app de gobierno (no).
- Política de contenido: la app no debe facilitar el acceso a ROMs comerciales ni mencionar franquicias de terceros en el texto de la ficha ni en las capturas.
- Precio y países de distribución (pago único), y datos fiscales y de pago del perfil de pagos.

**Técnico**
- Android App Bundle (`.aab`) firmado, `targetSdk` al nivel exigido por Google Play en el momento de publicar.
- Clave de firma gestionada por Play App Signing.
- Versión de prueba interna antes de producción y, para cuentas personales nuevas, el proceso de prueba cerrada que Google requiera.

---

© 2026 moralesDev · Proyecto independiente. Este sitio y la aplicación no están afiliados a Nintendo ni a ningún otro titular de derechos de propiedad intelectual.

---

## 7. Fase offline — qué cambió (agosto 2026)

La página principal se reorganizó alrededor de la propuesta de valor **jugar sin conexión**. Orden actual de `index.html`:

1. **Hero** — «Tu GBA. En cualquier lugar.» + insignia «Juega sin Internet» + tres beneficios + CTAs.
2. **Sin Internet. Sin problemas.** (`#offline`) — beneficio principal, con la aclaración de que instalar y actualizar sí requiere conexión, y cuatro escenarios: avión, metro, sin cobertura, sin datos móviles.
3. **Características** (`#caracteristicas`) — «Juego offline» aparece primero, luego emulación, guardado local, save states, controles y experiencia Android.
4. **Tu juego va contigo.** (`#experiencia`) — sección narrativa con cuatro situaciones (gráficos propios, ninguna marca de terceros).
5. **Offline también significa privado.** (`#privacidad`) — cuatro afirmaciones + los bloques «Tu biblioteca. Tus partidas. Tu dispositivo.» y «Sin cuentas innecesarias.»
6. **Compra una vez.** (`#precio`) — pago único, sin suscripciones, sin anuncios, sin compras internas.
7. **Propiedad intelectual y ROMs** (`#propiedad-intelectual`) — cuatro tarjetas: sin afiliación, sin ROMs incluidas, sin enlaces de descarga, responsabilidad del usuario.
8. **Google Play** (`#google-play`) — «Próximamente en Google Play», botón desactivado.
9. **Footer** — Privacidad, Términos, Contacto y GitHub.

También se actualizaron `title`, `meta description` y Open Graph hacia «emulador GBA Android», «Game Boy Advance Android» y «jugar sin Internet»; nunca hacia descargas de ROMs. Sin JavaScript, sin trackers y con una sola animación CSS (respeta `prefers-reduced-motion`).

## 8. Textos que debes revisar cuando la app final esté terminada

| Dónde | Texto | Por qué |
| --- | --- | --- |
| `index.html` → `#precio` | `$14.900 COP*` y su nota al pie | Es un precio de referencia. Cuando lo fijes en Google Play, sustitúyelo por el definitivo o por `[PRECIO POR DEFINIR]` y borra el asterisco. |
| `index.html` → `#google-play` | `[GOOGLE_PLAY_URL]` y `aria-disabled="true"` | Poner la URL real y quitar el atributo cuando la ficha esté publicada. |
| `index.html` → `#caracteristicas` | Comentario con `<span class="tag tag-outline">En desarrollo</span>` en cada tarjeta | Descoméntalo en las funciones aún no terminadas; bórralo cuando lo estén. |
| `index.html` → hero | «La aplicación está en desarrollo y todavía no se ha publicado en Google Play.» | Cámbialo cuando se publique. |
| `privacy.html` → apartado 1 | `[DATOS DEL DESARROLLADOR]` | Datos que Google Play muestre de tu cuenta personal. |
| `privacy.html` → apartados 4 y 7 | «no recopila datos» / «no comparte datos con terceros» | Debe reflejar la versión publicada y auditada. |
| Todas las páginas | Fecha «15 de agosto de 2026» / `2026-08-15` | Actualízala en cada cambio de contenido legal. |

## 9. Afirmaciones que dependen de la implementación final

Estas frases del sitio son ciertas para el diseño previsto, y hay que verificarlas contra el build que se publique. Si algo cambia, se corrige el sitio **y** la política de privacidad antes de publicar:

- **«Juega sin conexión a Internet»** — vale solo para la experiencia de emulación con archivos ya presentes en el dispositivo. Instalar, comprar y actualizar mediante Google Play sí requiere conexión, y así se dice en la sección `#offline`. Si alguna función futura (verificación de licencia, sincronización, contenido remoto) necesitara red, hay que matizar esa sección.
- **«Las ROMs no se suben a nuestros servidores»** — depende de que no exista backend. Válido mientras no se añada ninguno.
- **«Las partidas se almacenan localmente»** — depende de que no se active copia de seguridad en la nube (incluido el backup automático de Android, que conviene revisar en el manifiesto).
- **«Sin cuentas innecesarias»** — depende de que no se introduzca inicio de sesión.
- **«Sin anuncios, sin suscripciones, sin compras dentro de la aplicación»** — depende del modelo definitivo en Google Play Console.
- **«Sin SDK de analítica»** (política, apartado 7) — si se añade Firebase, Crashlytics, analítica o publicidad, hay que declararlo en la política y en el formulario de seguridad de los datos de Google Play.
- **Etiquetas de características** — no describir como terminada ninguna función que no lo esté; para eso está la etiqueta «En desarrollo».

## 10. Revisión de textos (agosto 2026)

Se eliminaron todas las menciones públicas a franquicias concretas. Ahora la única marca de tercero citada es **Nintendo**, como titular de derechos de la plataforma original, y **Game Boy Advance** como nombre descriptivo de la consola. Verificado con búsqueda en todos los archivos del sitio: no quedan referencias a The Pokémon Company, Game Freak, Bandai Namco ni Toei Animation en textos visibles, `alt`, metadatos, Open Graph ni comentarios HTML.

Textos modificados:

- **Aviso del pie (4 páginas)** — la lista de titulares se reduce a «Nintendo ni ningún otro titular de derechos de propiedad intelectual»; el lema pasa a «Proyecto independiente de emulación para Android».
- **Hero** — «Un emulador independiente de Game Boy Advance para Android, diseñado para llevar tus juegos y tus partidas contigo y jugar sin conexión a Internet.»
- **`#offline`** — «Una vez instalada la aplicación y con tus juegos disponibles en el dispositivo, puedes disfrutar de tu experiencia de juego sin depender de una conexión permanente a Internet.»
- **`#caracteristicas`** — «Guardado local» → «Partidas locales»; la emulación se describe como «tus propios juegos de Game Boy Advance desde los archivos que ya tienes».
- **`#privacidad`** — titular «Tu juego permanece contigo.»; las ROMs y partidas «están diseñadas para permanecer en tu dispositivo, no en nuestros servidores».
- **`#precio`** — «Sin compras adicionales.» y «Actualizaciones incluidas con tu compra.»
- **`#propiedad-intelectual`** — las cuatro tarjetas se reescribieron en forma general, sin enumerar franquicias, y la responsabilidad se enuncia en singular sobre «cualquier archivo que cargue en la aplicación».
- **`terms.html` apartado 6** — misma reducción a Nintendo.

Nomenclatura única del producto: una sola versión, sin «Premium», «Pro», «Ultimate», «Free» ni «Trial» en ninguna página (verificado por búsqueda).
