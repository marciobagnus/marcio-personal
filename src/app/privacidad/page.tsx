import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { PrivacyPreferences } from "@/components/analytics";
import { siteUrl, absoluteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Privacidad y métricas",
  ...(siteUrl ? { alternates: { canonical: absoluteUrl("/privacidad") } } : {}),
};
export default function Privacy() {
  return (
    <main id="contenido" className="privacy-page container">
      <div id="inicio" />
      <Link className="back-link" href="/">
        ← Volver al inicio
      </Link>
      <p className="eyebrow">UN ESPACIO TRANSPARENTE</p>
      <h1>
        Privacidad
        <br />
        <span>y métricas.</span>
      </h1>
      <p className="privacy-intro">
        Este sitio es el espacio personal de {profile.name}. Así funciona la
        medición cuando está habilitada.
      </p>
      <section>
        <h2>Qué se puede medir</h2>
        <p>
          Con tu consentimiento, los proveedores configurados pueden medir
          páginas vistas, dominio de procedencia, campañas UTM, dispositivo,
          navegador y ubicación aproximada. Los eventos incluyen apertura de
          proyectos, clics de contacto, secciones vistas, profundidad de
          desplazamiento y tiempo visible de lectura.
        </p>
        <p>
          No se envían nombres, correos, mensajes, ni la dirección completa de
          la página de la que venís en los eventos propios. Solo se conservan
          parámetros UTM con formato de etiqueta pública. La medición no
          identifica por nombre a quienes visitan el sitio.
        </p>
      </section>
      <section>
        <h2>Proveedores y almacenamiento</h2>
        <p>
          Las integraciones disponibles son Vercel Web Analytics, Vercel Speed
          Insights y Google Analytics 4. Solo cargan si están configuradas y
          aceptás las métricas. GA4 puede utilizar cookies propias e
          identificadores seudónimos. La atribución de campaña se guarda en
          sessionStorage por la duración de la pestaña después del
          consentimiento.
        </p>
        <p>
          Tu elección se conserva en localStorage hasta que la cambies o borres
          los datos del navegador. Podés rechazar sin perder acceso al
          contenido. Los plazos de retención de informes dependen del proveedor
          y de la configuración elegida por el responsable del sitio.
        </p>
      </section>
      <section>
        <h2>Tu elección</h2>
        <p>
          Podés revisar o retirar tu permiso desde el botón siguiente o desde el
          pie de página. Al retirarlo, se detiene la medición, se borra la
          atribución local y se eliminan las cookies de GA accesibles desde este
          dominio. Los registros agregados que ya se hayan enviado pueden
          permanecer en los informes.
        </p>
        <PrivacyPreferences />
      </section>
      <section>
        <h2>Contacto y enlaces externos</h2>
        <p>
          El email abre tu aplicación de correo; no hay un formulario que
          almacene tus datos en este sitio. GitHub, LinkedIn y los proyectos
          enlazados tienen sus propias políticas. El hosting puede procesar
          registros técnicos para entregar y proteger las páginas.
        </p>
        <p>
          Para consultas sobre privacidad, escribime a{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </section>
    </main>
  );
}
