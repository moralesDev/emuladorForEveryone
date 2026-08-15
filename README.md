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
| Características | `.../index.html#caracteristicas` |
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

© 2026 moralesDev · Proyecto independiente. Este sitio y la aplicación no están afiliados a Nintendo, The Pokémon Company, Game Freak ni a ningún otro titular de derechos.
