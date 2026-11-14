---
titulo: "MadridEnCarta"
orden: 1
resumen: "Carta digital con QR para bares. El primer cliente fue el restaurante donde trabajaba mi mujer; el segundo llegó recomendado por él."
entradilla: "Carta digital con QR para bares de Madrid. El bar sube una foto de su carta de papel y la IA crea todos los platos con sus alérgenos."
descripcionSeo: "MadridEnCarta: carta digital con QR para bares. Una IA crea los platos y sus alérgenos a partir de una foto de la carta. Dos clientes reales."
estado: "produccion"
estadoTexto: "En producción · 2 clientes"
color: "#2F6B55"
tinta: "#FFFFFF"
acento: "#4FB08A"
captura: "../../assets/capturas/madridencarta-carta-movil.jpg"
capturaAlt: "Carta de Restaurante Mavi Kebap en MadridEnCarta vista en un móvil: platos con foto, precio y alérgenos"
destacado: true
demuestra: "Automatización con IA para un cliente"
flujo:
  - { quien: "persona", texto: "El bar sube una foto de su carta de papel." }
  - { quien: "ia", texto: "La IA lee la foto y crea todos los platos." }
  - { quien: "ia", texto: "A cada plato le asigna sus alérgenos." }
  - { quien: "persona", texto: "El dueño repasa precios y alérgenos y los confirma." }
  - { quien: "sistema", texto: "La carta queda publicada, con el mismo QR de siempre." }
stack: ["Supabase", "Firebase Hosting", "SEO con datos estructurados"]
ficha:
  - { campo: "Mi papel", valor: "Lo hice yo solo" }
  - { campo: "Clientes", valor: "Mavi Kebap · Kebab Gran Oporto 2" }
  - { campo: "Plataforma", valor: "Web móvil" }
  - { campo: "Stack", valor: "Supabase · Firebase Hosting" }
  - { campo: "Con IA", valor: "Claude y Codex, revisado por mí" }
  - { campo: "Código", valor: "Repositorio privado (GitHub)" }
enlaces:
  - { texto: "madridencarta.es", url: "https://madridencarta.es/" }
  - { texto: "Carta de Mavi Kebap", url: "https://madridencarta.es/carta/restaurante-mavi-kebap" }
secciones:
  - etiqueta: "Problema"
    titulo: "Cada cambio de precio, a la imprenta"
    texto: "Mi mujer trabajaba de camarera en Mavi Kebap, y por ella conocí el problema. La carta eran siete hojas plastificadas metidas en carpetas. Cada vez que subía un precio tocaba reimprimirlas todas y esperar varios días, así que mientras tanto se corregía a boli."
  - etiqueta: "Objetivo"
    titulo: "Que el dueño la cambie él solo"
    texto: "Quería que el dueño pudiera cambiar un precio o quitar un plato él mismo, en un minuto, sin tener que tocar los QR de las mesas. Y que el cliente abriera la carta con la cámara del móvil, sin instalar nada."
  - etiqueta: "La automatización"
    titulo: "De la foto de la carta a los platos"
    texto: "Pasar una carta de papel a mano son horas de teclear, y esta tiene 122 platos. Lo automaticé con IA: el bar sube una imagen de su carta y se crean todos los platos. Los alérgenos se asignan a cada plato según lo que lleva. Después el dueño repasa los precios y los alérgenos y los confirma, porque de eso responde él."
  - etiqueta: "Qué hice"
    titulo: "Lo hice yo solo"
    texto: "La idea, los precios del servicio, el desarrollo con agentes de IA, la publicación y el trato con el primer cliente."
  - etiqueta: "Cómo se construyó"
    titulo: "Igual que el resto"
    texto: "Escribí una especificación para cada funcionalidad antes de programar, les puse reglas a los agentes sobre lo que podían tocar, y revisé y probé cada cambio antes de publicarlo."
  - etiqueta: "Resultado"
    titulo: "Dos clientes: uno funcionando y otro en marcha"
    texto: "La carta de Mavi Kebap está publicada con sus 122 platos, en español y en inglés, y los QR están puestos en el local. Mavi me recomendó a Kebab Gran Oporto 2, en la zona de Oporto, que ya es mi segundo cliente. Ahora estoy montando su carta."
implementado:
  - "Platos creados por IA a partir de una foto de la carta"
  - "Alérgenos asignados por IA según cada plato"
  - "Carta por QR, sin instalar nada"
  - "122 platos en 13 apartados"
  - "Español e inglés"
  - "Alérgenos y foto en cada plato"
  - "Buscador, categorías y botones «Llegar» y «Llamar»"
  - "Panel para que el bar cambie precios y platos"
  - "Marcar un plato como agotado"
  - "Visitas y platos más vistos"
  - "Página indexable por Google, con datos estructurados"
  - "Stack Pack dentro de la carta, con el récord del local"
enDesarrollo:
  - "Chat con IA que recomienda platos al cliente"
galeria:
  - { src: "../../assets/capturas/madridencarta-carta-movil.jpg", alt: "Carta de Mavi Kebap en el móvil", pie: "La carta que ve el cliente al escanear el QR." }
pendientes:
  - { texto: "Captura del panel del bar", pie: "Panel de edición." }
  - { texto: "Foto del QR en una mesa", pie: "El QR instalado en el local." }
---
