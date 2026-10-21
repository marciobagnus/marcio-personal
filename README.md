# Marcio Bagnus · Ingeniería con mirada humana

Sitio personal en español, construido con **Next.js 16.4.2, React 19.3.1 y TypeScript**. Preparado para desplegar en Vercel. La marca conecta ingeniería, personas e industria sin atribuir experiencia gerencial que no esté acreditada.

## Ejecutar

Node.js **22.13 o superior**. Dependencias y fuentes están fijadas en `package-lock.json`.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Abrir `http://localhost:4173`. Para otro puerto: `npm run dev -- --port 3000`.

```bash
npm run typecheck
npm test
npm run build
npm start
```

`npm start` sirve el build en el puerto 4173. En Vercel no hace falta modificar el comando de inicio: usá el preset Next.js. El servidor de desarrollo acepta los argumentos estándar de la infraestructura de preview sin cambiar el framework de producción.

## Qué incluye

- Home responsive: presentación, sobre mí, recorrido, proyectos, Lado B y contacto.
- Filtros de proyectos y cinco casos con URL propia, generados estáticamente.
- GitHub y LinkedIn reales; contacto por email y botón para copiarlo.
- Proyectos públicos: Bagnus Platform, LOOMARQ, Quasar, ESP32 · Servidor web IoT y Cinemática de Robots.
- Quasar: challenge técnico en Go para la postulación a Mercado Libre, con reconstrucción de mensajes y ubicación por trilateración.
- Arte vectorial/CSS propio. Las ilustraciones de proyectos son conceptuales; no se presentan como capturas reales.
- Tipografía local por Fontsource; no hay llamadas a Google Fonts desde los visitantes.
- Navegación por teclado, enlace para saltar al contenido, focos visibles y movimiento reducido.
- SEO, capa de analítica tipada, consentimiento, política de privacidad y generador CLI de campañas.

## Arquitectura

```text
src/
  app/                  # Rutas, metadata, sitemap, robots y tarjetas sociales
    proyectos/[slug]/   # Casos estáticos con generateStaticParams
    privacidad/
  components/           # UI e interacciones pequeñas
  content/              # Perfil, experiencia, curiosidades y curaduría de proyectos
  lib/
    site.ts             # Dominio canónico y política de indexación
    analytics/
      core.ts           # Contratos de eventos y saneamiento puro
      client.ts         # Adaptadores para GA4/Vercel y atribución de sesión
scripts/
  campaign.mjs          # Generación de URLs etiquetadas
  dev.mjs               # Entrada de desarrollo compatible con preview
  verify-build.mjs      # Smoke test del HTML generado (sin navegador)
tests/
  analytics.test.ts     # Guardas sobre atribución y parámetros sensibles
```

El contenido de páginas vive en Server Components y se genera durante el build. Solo la navegación móvil, los filtros, el clipboard y las métricas necesitan componentes cliente. No hay base de datos ni dependencia de GitHub en runtime: un cambio en la visibilidad de un repo no rompe el sitio. Para sumar proyectos, editá `src/content/projects.ts`; para modificar tu perfil o contacto, `src/content/profile.ts`.

Para crecer: agregar artículos en rutas estáticas y metadata propia; un CMS puede reemplazar la capa de contenido sin reescribir la UI. Si más adelante agregás formularios, implementá validación, protección de abuso y almacenamiento en el servidor, y medí la confirmación real de envío con un evento propio. Un clic en email **no** equivale a un contacto recibido.

## Desplegar en Vercel

1. Subí este directorio a un repositorio tuyo y elegí **Add New Project → Import Git Repository** en Vercel.
2. Preset **Next.js**, Node 22 o superior, instalación `npm ci`, build `npm run build`. Root directory: el directorio con este `package.json`.
3. Configurá `NEXT_PUBLIC_SITE_URL` con el origen final, por ejemplo `https://tu-dominio.com`. Usá el dominio elegido, sin un path. No se inventa un dominio personal en el código.
4. Configurá las métricas que decidas usar (sección siguiente). Las variables `NEXT_PUBLIC_*` quedan incorporadas al build: **redeploy obligatorio** cuando cambien.
5. Publicá y revisá `/robots.txt`, `/sitemap.xml`, `/opengraph-image` y las URLs de proyectos.
6. Agregá el dominio a Google Search Console, verificá la propiedad y enviá `https://tu-dominio.com/sitemap.xml`.

Sin dominio canónico válido el sitio genera `noindex`, bloquea robots y devuelve sitemap vacío. Con `VERCEL_ENV=preview` también se mantiene `noindex`, aunque exista un dominio configurado. En producción se habilita la indexación. Para un deployment local con `npm start`, `NODE_ENV=production` más un dominio válido habilita la indexación.

## SEO implementado

Título y descripción por ruta, canonical, Open Graph, Twitter card, imagen social generada con `next/og`, iconos, `Person` en JSON-LD, `lang=es-AR`, HTML semántico, sitemap y robots. Las páginas de caso tienen contenido y metadatos propios. Esto prepara el sitio para ser rastreado; no garantiza posiciones en búsquedas.

Variable de verificación opcional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Si verificás la propiedad de dominio por DNS, no la necesitás.

## Métricas: dónde ver los datos

No hay un dashboard público ni un contador local que simule visitas. Los informes viven en tus cuentas de Vercel, Google Analytics y Search Console. **Las integraciones están implementadas, pero no hay cuentas conectadas ni IDs inventados**.

| Pregunta                                              | Herramienta                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| ¿Cuántas visitas y qué páginas?                       | Vercel Web Analytics o GA4                                         |
| ¿Cómo llegan: LinkedIn, CV, evento, búsqueda?         | GA4 + campañas UTM; referrer para visitas sin campaña              |
| ¿Qué proyectos y contactos generan interés?           | Eventos personalizados de GA4; opcionalmente Vercel Pro/Enterprise |
| ¿Qué búsquedas en Google me muestran y generan clics? | Google Search Console                                              |
| ¿Cómo carga el sitio en dispositivos reales?          | Vercel Speed Insights                                              |

### Configuración sugerida

**Vercel Web Analytics + Speed Insights**, opcionales:

```dotenv
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_VERCEL_ANALYTICS=true
NEXT_PUBLIC_SPEED_INSIGHTS=true
NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS=false
```

Activá además Analytics y Speed Insights en el proyecto de Vercel y redeployá. Los planes tienen cuotas y ventanas de retención: revisá las condiciones vigentes. Los eventos personalizados de Vercel requieren **Pro/Enterprise**; no se presupone que tengas ese plan por ser un usuario avanzado en código. Para habilitarlos, activá `NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS=true`; el adaptador manda como máximo dos propiedades de cada evento. Los reportes UTM nativos de Vercel tienen requisitos de plan adicionales; para campañas completas, esta implementación contempla GA4.

**GA4**, opcional e independiente de Vercel:

1. Creá una propiedad y un flujo web en Google Analytics.
2. Copiá tu Measurement ID real a `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`.
3. En el flujo, desactivá la **medición mejorada automática**: esta implementación envía sus propias pageviews, clics, scroll y engagement. No instales otro tag de GA4 por GTM: evitarías duplicación de medición.
4. Redeployá. Aceptá métricas y revisá Realtime o DebugView.
5. En GA4, marcá `contact_click` como evento clave si ese es tu objetivo. Recordá que es intención de contacto, no lead confirmado.
6. Creá dimensiones personalizadas para `project`, `placement`, `channel`, `section` y, si las necesitás para eventos, `utm_source`, `utm_medium`, `utm_campaign`. Los parámetros de campaña en las pageviews permiten también los informes de adquisición estándar.
7. Definí retención, acceso y exportación de informes en tu propiedad. Para histórico propio y análisis SQL, podés configurar la exportación a BigQuery desde GA4.

La inicialización usa `send_page_view: false`; el componente mide una pageview por navegación de ruta. Los cambios de hash dentro de la misma página no crean pageviews nuevas. Google Signals y personalización publicitaria quedan desactivados. En development no se mide salvo que actives explícitamente `NEXT_PUBLIC_ANALYTICS_DEBUG=true`.

### Contrato de eventos

| Evento             | Propiedades              | Interpretación                                               |
| ------------------ | ------------------------ | ------------------------------------------------------------ |
| `page_view`        | URL saneada + atribución | Carga/navegación de ruta; GA4 manual, Vercel SDK             |
| `navigation_click` | `target`                 | Navegación desde la interfaz                                 |
| `project_open`     | `project`, `placement`   | Interés por un caso                                          |
| `outbound_click`   | `target`, `placement`    | Salida a GitHub o al proyecto                                |
| `contact_click`    | `channel`, `placement`   | Apertura de email/LinkedIn o acceso a sección de contacto    |
| `email_copy`       | `placement`              | Clipboard exitoso                                            |
| `section_view`     | `section`                | Al menos 25% de la sección visible, una vez por ruta/montaje |
| `scroll_depth`     | `percent`                | Umbrales 25, 50, 75 y 90, una vez por ruta/montaje           |
| `engaged_30s`      | `page`                   | 30 segundos de tiempo visible, una vez por ruta/montaje      |

GA4 recibe la atribución permitida además de las propiedades del evento. Vercel recibe las propiedades curadas del evento (máximo dos); su SDK gestiona las pageviews y el referrer. El CTA que solo lleva a la sección de contacto se distingue por `channel=section`; para medir intención de comunicación filtrá `channel=email` o `linkedin`.

### Campañas para LinkedIn, CV y networking

```bash
npm run campaign -- https://tu-dominio.com linkedin social perfil
npm run campaign -- https://tu-dominio.com cv pdf postulaciones
npm run campaign -- https://tu-dominio.com tci qr networking
npm run campaign -- https://tu-dominio.com linkedin social feria-aveit post-01
```

Enlazá estas URLs en cada canal. `utm_content` permite distinguir ubicaciones o publicaciones. Usá etiquetas públicas: letras, números, guiones y guiones bajos, máximo 80 caracteres. **Nunca nombres de personas, emails o información privada**.

La implementación conserva primera y última atribución en `sessionStorage` después del consentimiento; los eventos usan la última campaña de esa pestaña. GA4 conserva además su propia atribución de adquisición. No es un modelo completo de atribución multicanal entre dispositivos. Referencias pueden faltar por bloqueo de scripts, rechazo de consentimiento, apps que no mandan referrer o políticas del navegador: ese tráfico puede aparecer como directo.

### Privacidad y depuración

Los SDKs cargan únicamente con configuración activa, entorno habilitado y consentimiento. La elección se guarda en localStorage; la atribución dura la sesión de la pestaña. Retirar el consentimiento detiene la medición mediante recarga, elimina la atribución y las cookies de GA accesibles. Un cambio de preferencia en otra pestaña se sincroniza mediante recarga.

Se eliminan parámetros arbitrarios y fragmentos de las URLs enviadas por nuestros adaptadores. El referrer propio se reduce al dominio. No se solicita nombre, email ni identificación del visitante; saber **quién es una persona concreta** requiere que se presente voluntariamente. No se usa fingerprinting propio ni una lista de visitantes identificados.

Para probar sin un proveedor, activá solo `NEXT_PUBLIC_ANALYTICS_DEBUG=true`, reiniciá `npm run dev`, aceptá y mirá los mensajes `[analytics]` de la consola. Para probar GA4 sin contaminar tu propiedad real, usá una propiedad de prueba. La prueba local de consola no demuestra entrega al proveedor.

Comprobaciones en navegador antes de tu lanzamiento:

- Sin consentimiento / al rechazar: no cargar scripts ni requests a proveedores de analítica.
- Tras aceptar: pageview por ruta y eventos al interactuar. Navegar a un proyecto no duplica pageviews.
- Probar una campaña UTM y corroborar origen en informes; un hash no crea pageview.
- Revocar desde el footer, verificar que se detenga la medición y se elimine la atribución.
- Revisar menú móvil, filtros, clipboard y teclado a 375 px y escritorio.

## Validación de esta entrega

Build de producción, typecheck, tests de saneamiento y smoke tests del HTML estático. La revisión visual interactiva no pudo completarse porque la política del navegador del entorno bloqueó el acceso a la preview. Tampoco se validó recepción en GA4/Vercel: requiere tus IDs y un deployment real con las funciones activadas. No se presentan métricas ficticias.

## Fuentes del contenido

Datos profesionales y personales aportados en nuestras conversaciones. Selección y visibilidad de repos verificadas con GitHub el 20/10/2026. Detalles de ESP32 y robótica basados en sus README públicos. El contacto usa `marciobagnus@gmail.com` y los perfiles `marciobagnus` compartidos previamente; están centralizados para actualizarlos fácilmente.

Documentación técnica consultada:

- https://nextjs.org/docs/app/getting-started/installation
- https://vercel.com/docs/analytics/custom-events
- https://vercel.com/docs/analytics/limits-and-pricing
- https://vercel.com/docs/analytics/using-web-analytics
- https://developers.google.com/analytics/devguides/collection/ga4/views
- https://github.com/marciobagnus/esp32-iot-web-server
- https://github.com/marciobagnus/proyecto_robotica
- https://github.com/marciobagnus/loomarq-web
- https://github.com/marciobagnus/bagnus-platform
- https://github.com/marciobagnus/quasar
