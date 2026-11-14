---
titulo: "MichiApuntes"
orden: 3
resumen: "La hice para una persona de mi familia que está estudiando. Hace una foto a sus apuntes y la app los pasa a limpio, le prepara resúmenes y tests y le reparte el estudio hasta el examen."
entradilla: "Una app de estudio privada: de la foto de unos apuntes a un plan de repaso hasta el examen."
descripcionSeo: "MichiApuntes: app de estudio que pasa a limpio fotos de apuntes y genera resúmenes y tests con Claude Haiku. Creada por David Pricop."
estado: "produccion"
estadoTexto: "En producción · uso familiar"
color: "#FFC2DA"
tinta: "#2A2140"
acento: "#FF9CC2"
captura: "../../assets/capturas/michiapuntes-inicio-movil.jpg"
capturaAlt: "Pantalla de acceso de MichiApuntes, con Mika, la gata negra que acompaña el estudio"
destacado: true
demuestra: "App con IA dentro: de fotos a material de estudio"
flujo:
  - { quien: "persona", texto: "Se suben fotos de los apuntes." }
  - { quien: "ia", texto: "Claude Haiku las pasa a texto limpio." }
  - { quien: "persona", texto: "Se revisa el texto y se corrige si hace falta." }
  - { quien: "ia", texto: "Con ese texto prepara resúmenes, flashcards y tests." }
  - { quien: "sistema", texto: "La app reparte el estudio hasta el examen y registra cada uso de la API." }
stack: ["React", "Vite", "Supabase", "Claude Haiku"]
ficha:
  - { campo: "Mi papel", valor: "Lo hice yo solo" }
  - { campo: "Uso", valor: "Familiar, privada" }
  - { campo: "Plataforma", valor: "Web" }
  - { campo: "Stack", valor: "React · Vite · Supabase" }
  - { campo: "IA en el producto", valor: "Claude Haiku" }
  - { campo: "Código", valor: "Repositorio privado (GitHub)" }
secciones:
  - etiqueta: "Para quién"
    titulo: "La hice para alguien de mi familia"
    texto: "La hice para una persona de mi familia que está estudiando. Es privada: solo entra su cuenta."
  - etiqueta: "Cómo funciona"
    titulo: "De la foto al test"
    texto: "Se suben fotos de los apuntes, o se pega un texto, y la app los pasa a limpio. Con eso prepara un resumen, flashcards, tests y mini simulacros con tiempo. Se apunta la fecha de cada examen y la app reparte el estudio día a día. Lo que se falla hoy vuelve mañana como repaso."
  - etiqueta: "La IA"
    titulo: "Claude Haiku lee las fotos"
    texto: "La lectura de las fotos y la preparación del material las hace Claude Haiku, desde el servidor. La app registra cada uso de la API."
  - etiqueta: "Qué hice"
    titulo: "Lo hice yo solo"
    texto: "El diseño, el desarrollo con agentes de IA, la base de datos, la integración con Claude y la publicación."
  - etiqueta: "Resultado"
    titulo: "En uso"
    texto: "Está publicada y se usa para estudiar. No enseño capturas de dentro porque el contenido es personal."
implementado:
  - "Libros y temas con portada"
  - "Fotos de apuntes pasadas a texto limpio"
  - "Texto pegado o transcripción de un vídeo"
  - "Resúmenes"
  - "Flashcards"
  - "Tests y mini simulacros con tiempo"
  - "Ejercicios en pizarra"
  - "Calendario de exámenes"
  - "Plan de estudio diario"
  - "Rachas y repaso de fallos"
  - "Registro de uso de la API"
galeria:
  - { src: "../../assets/capturas/michiapuntes-inicio-movil.jpg", alt: "Pantalla de acceso de MichiApuntes", pie: "La pantalla de acceso. Lo de dentro es privado." }
pendientes:
  - { texto: "Capturas de dentro con apuntes de prueba", pie: "Un tema, un test y el plan del día." }
---
