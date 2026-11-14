---
titulo: "Homelab"
orden: 8
resumen: "Mi servidor en casa: servicios en Docker Compose, un NAS, monitorización y copias de seguridad, detrás de un túnel de Cloudflare."
entradilla: "Un Windows Server con una máquina virtual Linux donde tengo mis servicios y mis datos, y donde practico por mi cuenta lo que hago en el trabajo."
descripcionSeo: "Homelab de David Pricop: Windows Server y VM Linux con Docker Compose, n8n, TrueNAS, Grafana, OpenVPN y Cloudflare Tunnel."
estado: "uso-interno"
estadoTexto: "En uso diario"
color: "#1B1D21"
tinta: "#F2F3F5"
acento: "#8FA3B8"
stack: ["Windows Server", "Linux", "Docker Compose", "n8n", "Cloudflare Tunnel", "TrueNAS"]
ficha:
  - { campo: "Mi papel", valor: "Lo monto y lo mantengo yo" }
  - { campo: "Sistema", valor: "Windows Server 2016 · VM Linux" }
  - { campo: "Contenedores", valor: "Docker Compose · Portainer · Komodo" }
  - { campo: "Almacenamiento", valor: "TrueNAS" }
  - { campo: "Acceso", valor: "Cloudflare Tunnel y Access · OpenVPN" }
  - { campo: "Monitorización", valor: "Grafana" }
secciones:
  - etiqueta: "Para qué"
    titulo: "Mis servicios, en mi casa"
    texto: "Aquí tengo mis fotos (Immich), un WordPress, la facturación (Invoice Ninja), Odoo para mis finanzas personales, n8n para automatizaciones y un NAS interno con TrueNAS. Los servicios van en contenedores con Docker Compose, dentro de una máquina virtual Linux sobre un Windows Server 2016."
  - etiqueta: "Seguridad"
    titulo: "Sin puertos web abiertos"
    texto: "Desde fuera no se llega directamente a ninguna web. Lo que tiene que ser accesible sale por un túnel de Cloudflare, y los paneles privados piden identificarse con Cloudflare Access. Para administrarlo me conecto por VPN con OpenVPN."
  - etiqueta: "Mantenimiento"
    titulo: "Vigilado y con copias"
    texto: "Vigilo los servicios con Grafana y hago copias de seguridad. Gestiono los contenedores con Portainer y los despliegues con Komodo."
  - etiqueta: "Por qué lo enseño"
    titulo: "Es mi oficio"
    texto: "Trabajo en sistemas desde 2019. El homelab es donde lo practico por mi cuenta."
implementado:
  - "Immich para las fotos"
  - "WordPress"
  - "Invoice Ninja para la facturación"
  - "Odoo para las finanzas personales"
  - "NAS interno con TrueNAS"
  - "Monitorización con Grafana"
  - "Acceso remoto con OpenVPN"
  - "n8n para automatizaciones"
  - "Entrada por Cloudflare Tunnel con Cloudflare Access"
  - "Copias de seguridad"
pendientes:
  - { texto: "Capturas anonimizadas de Grafana o Portainer", pie: "Sin IP ni dominios internos." }
enEscaparate: false
---
