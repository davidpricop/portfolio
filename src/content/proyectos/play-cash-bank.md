---
titulo: "Play Cash Bank"
orden: 5
resumen: "Para jugar al Monopoly de mesa sin billetes. Uno lleva la banca desde el móvil y los demás se unen con un código. Controla pagos, hipotecas, subastas y bancarrotas."
entradilla: "Una banca digital para jugar al Monopoly de mesa sin billetes. No es un videojuego: el tablero sigue siendo el de siempre."
descripcionSeo: "Play Cash Bank: banca digital para jugar al Monopoly de mesa sin billetes. Aplicación web creada por David Pricop con agentes de IA."
estado: "produccion"
estadoTexto: "En producción · web"
color: "#D4483A"
tinta: "#FFFFFF"
acento: "#FF8A7A"
captura: "../../assets/capturas/playcashbank-inicio-movil.jpg"
capturaAlt: "Pantalla de inicio de Play Cash Bank, con el acceso de por vida y la opción de unirse a una partida"
stack: ["React", "Vite", "Supabase", "Firebase Hosting"]
ficha:
  - { campo: "Mi papel", valor: "Lo hice yo solo" }
  - { campo: "Plataforma", valor: "Web, pensada para móvil" }
  - { campo: "Modelo", valor: "Pago único para la banca" }
  - { campo: "Stack", valor: "React · Vite · Supabase" }
  - { campo: "Con IA", valor: "Claude y Codex, revisado por mí" }
  - { campo: "Código", valor: "Repositorio privado (GitHub)" }
enlaces:
  - { texto: "Abrir Play Cash Bank", url: "https://playcashbank.web.app/" }
secciones:
  - etiqueta: "Problema"
    titulo: "Contar billetes en cada turno"
    texto: "En una partida de Monopoly se va mucho tiempo en contar billetes, dar cambio y discutir quién le debe qué a quién. Play Cash Bank lleva ese dinero en el móvil y deja el tablero y las fichas como están."
  - etiqueta: "Cómo funciona"
    titulo: "Uno hace de banca, el resto entra con un código"
    texto: "Quien crea la partida compra un acceso de por vida y hace de banca. Los demás jugadores entran gratis con un código, sin crear cuenta. Desde ahí se cobran los salarios de la salida, los alquileres, las hipotecas, las subastas y los impuestos que van al bote del Parking."
  - etiqueta: "Qué hice"
    titulo: "Lo hice yo solo"
    texto: "El diseño, el desarrollo con agentes de IA, el sistema de licencias y la publicación."
  - etiqueta: "Resultado"
    titulo: "Abierta al público"
    texto: "Está publicada en playcashbank.web.app. Para crear partidas hace falta el acceso; para unirse a una, solo el código."
implementado:
  - "Salario de salida, también doble al caer en ella"
  - "Pagos y cobros entre jugadores y con la banca"
  - "Confirmación de los pagos grandes"
  - "Hipotecas y su recuperación"
  - "Venta de construcciones a la banca"
  - "Traspaso de títulos de propiedad"
  - "Subastas con pujas"
  - "Bote del Parking con los impuestos"
  - "Bancarrota y vuelta de un jugador a la partida"
  - "Pasar la banca a otra persona"
  - "Códigos regalo"
  - "Acceso con Google para recuperar la licencia"
galeria:
  - { src: "../../assets/capturas/playcashbank-inicio-movil.jpg", alt: "Inicio de Play Cash Bank", pie: "La pantalla de entrada: comprar el acceso o unirse a una partida." }
pendientes:
  - { texto: "Captura de una partida en marcha", pie: "La banca durante una partida." }
---
