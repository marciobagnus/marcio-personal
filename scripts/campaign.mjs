// npm run campaign -- https://your-domain.com linkedin social perfil
const [base, source, medium, campaign, content] = process.argv.slice(2);
if (!base || !source || !medium || !campaign) {
  console.error(
    "Uso: npm run campaign -- https://tu-dominio.com linkedin social perfil [contenido]",
  );
  process.exit(1);
}
const url = new URL(base);
if (!["http:", "https:"].includes(url.protocol))
  throw new Error("URL http/https requerida");
for (const [key, value] of Object.entries({
  utm_source: source,
  utm_medium: medium,
  utm_campaign: campaign,
  utm_content: content,
})) {
  if (!value) continue;
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(value))
    throw new Error(
      "Usá etiquetas sin espacios y sin datos personales: letras, números, guion o guion bajo (máx. 80).",
    );
  url.searchParams.set(key, value.toLowerCase());
}
console.log(url.toString());
