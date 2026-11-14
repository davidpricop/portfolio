import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada proyecto es un archivo Markdown con datos. Si falta un campo obligatorio, la web no compila.
const proyectos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      orden: z.number(),
      resumen: z.string(), // texto de la tarjeta en la portada
      entradilla: z.string(), // texto bajo el título en su página
      descripcionSeo: z.string().max(170),
      estado: z.enum(['produccion', 'publicado', 'desarrollo', 'uso-interno']),
      estadoTexto: z.string(),
      color: z.string(), // fondo del proyecto
      tinta: z.string().default('#FFFFFF'), // color del texto sobre ese fondo
      acento: z.string(), // variante clara, para fondos oscuros
      captura: image().optional(),
      capturaAlt: z.string().optional(),
      // Los casos con IA dentro: van destacados en la portada, con lo que demuestran y su flujo paso a paso.
      destacado: z.boolean().default(false),
      demuestra: z.string().optional(),
      flujo: z.array(z.object({ quien: z.enum(['persona', 'ia', 'sistema']), texto: z.string() })).default([]),
      stack: z.array(z.string()).min(1), // solo tecnologías comprobadas
      ficha: z.array(z.object({ campo: z.string(), valor: z.string() })).min(3),
      enlaces: z.array(z.object({ texto: z.string(), url: z.url() })).default([]),
      secciones: z.array(z.object({ etiqueta: z.string(), titulo: z.string(), texto: z.string() })).min(2),
      implementado: z.array(z.string()).min(1),
      enDesarrollo: z.array(z.string()).default([]),
      galeria: z.array(z.object({ src: image(), alt: z.string(), pie: z.string() })).default([]),
      // Huecos que solo se ven en desarrollo (npm run dev). Nunca salen en la web publicada.
      pendientes: z.array(z.object({ texto: z.string(), pie: z.string() })).default([]),
      enEscaparate: z.boolean().default(true),
    }),
});

export const collections = { proyectos };
