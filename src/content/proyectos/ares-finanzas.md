---
titulo: "Ares Finanzas"
orden: 2
resumen: "La hice para llevar las cuentas de casa. Le mandas a Ares, el asistente, la foto de un ticket y él apunta el gasto. Por dentro usa la API de Claude."
entradilla: "Una app privada para llevar las cuentas de casa, con un asistente que entiende la foto de un ticket."
descripcionSeo: "Ares Finanzas: app privada de finanzas familiares con un asistente que usa la API de Claude para leer tickets. Creada por David Pricop."
estado: "produccion"
estadoTexto: "En producción · uso familiar"
color: "#F2C230"
tinta: "#14142B"
acento: "#F5C842"
captura: "../../assets/capturas/aresfinanzas-inicio-movil.jpg"
capturaAlt: "Pantalla de acceso de Ares Finanzas, con Ares, un gato negro, asomando de un bolsillo amarillo"
destacado: true
demuestra: "App con IA dentro: un asistente que lee tickets"
flujo:
  - { quien: "persona", texto: "Haces una foto al ticket desde el chat." }
  - { quien: "sistema", texto: "La app la envía a una función en el servidor. La clave de la API no sale de ahí." }
  - { quien: "ia", texto: "Claude lee el ticket y saca el gasto." }
  - { quien: "sistema", texto: "El gasto queda apuntado. Hay un límite de consultas seguidas." }
stack: ["React", "Vite", "PWA", "Supabase", "API de Claude"]
ficha:
  - { campo: "Mi papel", valor: "Lo hice yo solo" }
  - { campo: "Uso", valor: "Familiar, privada" }
  - { campo: "Plataforma", valor: "PWA instalable" }
  - { campo: "Stack", valor: "React · Vite · Supabase" }
  - { campo: "IA en el producto", valor: "API de Claude" }
  - { campo: "Código", valor: "Repositorio privado (GitHub)" }
secciones:
  - etiqueta: "Para quién"
    titulo: "La hice para mi casa"
    texto: "Es una app de uso familiar: solo entran las dos cuentas autorizadas. La hice para tener en un mismo sitio las cuentas comunes, los gastos fijos, las deudas y las metas de ahorro."
  - etiqueta: "La IA"
    titulo: "Ares apunta los gastos por ti"
    texto: "Ares es el asistente de la app, y también un gato negro. Le puedes preguntar cuánto queda en una cuenta o mandarle la foto de un ticket, y él apunta el gasto. Por dentro llama a la API de Claude desde una función en el servidor, así que la clave nunca está en el móvil. También le puse un límite de consultas seguidas."
  - etiqueta: "Qué hice"
    titulo: "Lo hice yo solo"
    texto: "El diseño, el desarrollo con agentes de IA, la base de datos, la integración con la API de Claude y la publicación."
  - etiqueta: "Resultado"
    titulo: "En uso en casa"
    texto: "Está publicada como PWA: se instala en el móvil desde el navegador y se abre como una app. No enseño capturas de dentro porque los datos son reales."
implementado:
  - "Cuentas con total común y movimientos"
  - "Mover dinero entre cuentas y ajustar saldos"
  - "Bolsillos de gasto"
  - "Cobros y pagos fijos: marcar como pagado, cambiar el importe o saltar un mes"
  - "Deudas con cuotas, pagos extra y aviso si la cuota no cubre los intereses"
  - "Metas de ahorro con aportaciones"
  - "Resumen del mes"
  - "Chat con Ares, que lee fotos de tickets"
  - "Se instala en el móvil como PWA"
  - "Acceso con Google limitado a dos cuentas"
galeria:
  - { src: "../../assets/capturas/aresfinanzas-inicio-movil.jpg", alt: "Pantalla de acceso de Ares Finanzas", pie: "La pantalla de acceso. Lo de dentro es privado." }
pendientes:
  - { texto: "Capturas de dentro con datos de prueba", pie: "Cuentas, bolsillos y chat con Ares." }
---
