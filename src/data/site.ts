// Datos del sitio en un solo lugar. Nada de esto es secreto: todo es información pública de contacto.
export const site = {
  nombre: 'David Pricop',
  titulo: 'David Pricop · Desarrollador de aplicaciones y automatizaciones con IA',
  descripcion:
    'Desarrollo aplicaciones y automatizaciones con IA en Madrid. Tres productos con IA en uso, uno con dos restaurantes como clientes. Trabajo con Claude y Codex.',
  url: 'https://david.pricop.es',
  email: 'davidpricop@outlook.es',
  ciudad: 'Madrid',
  linkedin: 'https://www.linkedin.com/in/david-emanuel-pricop-a371ba32/',
  github: 'https://github.com/davidpricop',
  // Pon aquí la ruta del PDF (por ejemplo '/cv/david-pricop-cv.pdf') cuando esté la versión pública.
  cvPdf: null as string | null,
} as const;

export const nav = [
  { texto: 'Proyectos', href: '/proyectos/' },
  { texto: 'Método', href: '/#metodo' },
  { texto: 'Sobre mí', href: '/sobre-mi/' },
  { texto: 'Contacto', href: '/#contacto' },
] as const;
