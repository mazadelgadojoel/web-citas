# App de Invitación — Wizard WhatsApp

## Contexto

App estática tipo **wizard** para enviar una invitación de cita por WhatsApp.
Stack: **Astro + CSS puro**, sin backend. Estado temporal en `sessionStorage`.
Al final del flujo se arma una URL `https://wa.me/...` y se dispara.

---

## Flujo de Pantallas

| Paso | Pantalla | Descripción |
|------|----------|-------------|
| 1 | `index.astro` | Bienvenida — input de texto para el nombre |
| 2 | Selección de Plan | Tarjetas por categoría + botón comodín "Tengo otra idea" |
| 2.1 | `pelicula.astro` | **Condicional** — sólo si eligió Cine. Lista hardcodeada + links a carteleras oficiales |
| 3 | Horario | Selector de hora |
| 4 | Logística | Botones: "¿Paso por ti?" → Sí / Nos vemos allá |
| 5 | Confirmación | Genera y abre URL de WhatsApp con el mensaje |

---

## Mensaje WhatsApp (URL-encodeado, hardcodeado)

```
https://wa.me/[TU_NUMERO]?text=Me%20encataria%20salir%20contigo%2C%20nos%20vemos%20cuchurrumin.%0A%0APlan%3A%20[Lugar/Película]%20a%20las%20[Hora].%20[Logística]
```

Variables a inyectar:
- `[Lugar/Película]`
- `[Hora]`
- `[Logística]` (paso por ti / nos vemos allá)

---

## Datos de Destinos

### 🍽️ Comida
- **Casa Vainilla:** https://www.google.com/maps/search/?api=1&query=Casa+Vainilla+Tuxtla+Gutiérrez
- **Yaxchilán:** https://www.google.com/maps/search/?api=1&query=Yaxchilan+Tuxtla+Gutiérrez
- **Toks:** https://www.google.com/maps/search/?api=1&query=Toks+Tuxtla+Gutiérrez
- **Las Pichanchas:** https://www.google.com/maps/search/?api=1&query=Las+Pichanchas+Tuxtla+Gutiérrez
- **Sibarita Restaurante:** https://www.google.com/maps/search/?api=1&query=Sibarita+Restaurante+Tuxtla+Gutiérrez
- **Café Bar 500 Noches:** https://www.google.com/maps/search/?api=1&query=Café+Bar+500+Noches+Tuxtla+Gutiérrez

### ☕ Cafeterías
- **Café de Valentina:** https://www.google.com/maps/search/?api=1&query=Café+de+Valentina+Tuxtla+Gutiérrez
- **Ki-Múul:** https://www.google.com/maps/search/?api=1&query=Ki-Muul+Tuxtla+Gutiérrez
- **Gallo Café de Especialidad:** https://www.google.com/maps/search/?api=1&query=Gallo+Café+de+Especialidad+Tuxtla+Gutiérrez
- **Café Urbano:** https://www.google.com/maps/search/?api=1&query=Café+Urbano+Tuxtla+Gutiérrez
- **Café Avenida:** https://www.google.com/maps/search/?api=1&query=Café+Avenida+Tuxtla+Gutiérrez

### 🎬 Cines & Carteleras
- **Cinépolis Plaza Las Américas:** https://www.google.com/maps/search/?api=1&query=Cinépolis+Plaza+Las+Américas+Tuxtla+Gutiérrez
- **Cinépolis Plaza Polifórum:** https://www.google.com/maps/search/?api=1&query=Cinépolis+Plaza+Polifórum+Tuxtla+Gutiérrez
- **Cinemex Galerías Tuxtla:** https://www.google.com/maps/search/?api=1&query=Cinemex+Galerías+Tuxtla
- **Cinemex Platino Ámbar:** https://www.google.com/maps/search/?api=1&query=Cinemex+Platino+Ámbar+Tuxtla+Gutiérrez
- **Links a Carteleras (botones informativos):**
  - Cinépolis Tuxtla: https://cinepolis.com/cartelera/tuxtla-gutierrez/
  - Cinemex Tuxtla: https://cinemex.com/cines/tuxtla-gutierrez/

### 🛍️ Plazas
- **Plaza Ámbar Fashion Mall:** https://www.google.com/maps/search/?api=1&query=Plaza+Ámbar+Fashion+Mall+Tuxtla+Gutiérrez
- **Galerías Boulevard:** https://www.google.com/maps/search/?api=1&query=Galerías+Boulevard+Tuxtla+Gutiérrez
- **Plaza Polifórum:** https://www.google.com/maps/search/?api=1&query=Plaza+Polifórum+Tuxtla+Gutiérrez
- **Plaza Crystal:** https://www.google.com/maps/search/?api=1&query=Plaza+Crystal+Tuxtla+Gutiérrez

### 🌳 Parques
- **Parque de la Marimba:** https://www.google.com/maps/search/?api=1&query=Parque+de+la+Marimba+Tuxtla+Gutiérrez
- **Joyyo Mayu:** https://www.google.com/maps/search/?api=1&query=Joyyo+Mayu+Tuxtla+Gutiérrez
- **Caña Hueca:** https://www.google.com/maps/search/?api=1&query=Caña+Hueca+Tuxtla+Gutiérrez
- **Parque Morelos Bicentenario:** https://www.google.com/maps/search/?api=1&query=Parque+Morelos+Bicentenario+Tuxtla+Gutiérrez
- **Parque del Oriente:** https://www.google.com/maps/search/?api=1&query=Parque+del+Oriente+Tuxtla+Gutiérrez
- **Parque 5 de Mayo:** https://www.google.com/maps/search/?api=1&query=Parque+5+de+Mayo+Tuxtla+Gutiérrez

---

## Arquitectura técnica

- **Framework:** Astro (páginas estáticas)
- **Estilos:** Tailwind CSS (paleta romántica premium Material 3, glassmorphic)
- **Tipografías:** Playfair Display (títulos) + Inter (texto)
- **Estado:** `sessionStorage` (`src/lib/wizard.ts`, claves en `KEYS`)
- **Datos destinos / horarios / logística:** `src/data/destinos.ts`
- **Número WhatsApp:** `src/data/config.ts` desde `PUBLIC_WHATSAPP_NUMBER`
- **Sin backend, sin DB**
- **Deploy-friendly:** output estático (`astro build`)

---

## Pendientes / decisiones a tomar

- [ ] **Número de WhatsApp del destinatario**: editar `.env` → `PUBLIC_WHATSAPP_NUMBER=521XXXXXXXXXX` (placeholder `521234567890`)
- [ ] Revisar texto final del mensaje en `src/lib/wizard.ts` (`buildWhatsAppUrl`)
- [ ] Validaciones (hora: sólo se permite continuar con hora + logística seleccionadas)
