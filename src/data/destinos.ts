export type Categoria = {
  slug: string;
  nombre: string;
  emoji: string;
  titulo: string;
};

export type Destino = {
  nombre: string;
  maps: string;
};

export const categorias: Categoria[] = [
  { slug: 'comida', nombre: 'Comida', emoji: '🍽️', titulo: '¿Qué vamos a comer? 🍕' },
  { slug: 'cafeterias', nombre: 'Cafeterías', emoji: '☕', titulo: '¿A qué café vamos? ☕' },
  { slug: 'cines', nombre: 'Cines', emoji: '🎬', titulo: '¿Qué película vemos? 🎬' },
  { slug: 'plazas', nombre: 'Plazas', emoji: '🛍️', titulo: '¿A qué plaza vamos? 🛍️' },
  { slug: 'parques', nombre: 'Parques', emoji: '🌳', titulo: '¿A qué parque vamos? 🌳' },
];

export const destinos: Record<string, Destino[]> = {
  comida: [
    { nombre: 'Casa Vainilla', maps: 'https://www.google.com/maps/search/?api=1&query=Casa+Vainilla+Tuxtla+Gutiérrez' },
    { nombre: 'Yaxchilán', maps: 'https://www.google.com/maps/search/?api=1&query=Yaxchilan+Tuxtla+Gutiérrez' },
    { nombre: 'Toks', maps: 'https://www.google.com/maps/search/?api=1&query=Toks+Tuxtla+Gutiérrez' },
    { nombre: 'Las Pichanchas', maps: 'https://www.google.com/maps/search/?api=1&query=Las+Pichanchas+Tuxtla+Gutiérrez' },
    { nombre: 'Sibarita Restaurante', maps: 'https://www.google.com/maps/search/?api=1&query=Sibarita+Restaurante+Tuxtla+Gutiérrez' },
    { nombre: 'Café Bar 500 Noches', maps: 'https://www.google.com/maps/search/?api=1&query=Café+Bar+500+Noches+Tuxtla+Gutiérrez' },
  ],
  cafeterias: [
    { nombre: 'Café de Valentina', maps: 'https://www.google.com/maps/search/?api=1&query=Café+de+Valentina+Tuxtla+Gutiérrez' },
    { nombre: 'Ki-Múul', maps: 'https://www.google.com/maps/search/?api=1&query=Ki-Muul+Tuxtla+Gutiérrez' },
    { nombre: 'Gallo Café de Especialidad', maps: 'https://www.google.com/maps/search/?api=1&query=Gallo+Café+de+Especialidad+Tuxtla+Gutiérrez' },
    { nombre: 'Café Urbano', maps: 'https://www.google.com/maps/search/?api=1&query=Café+Urbano+Tuxtla+Gutiérrez' },
    { nombre: 'Café Avenida', maps: 'https://www.google.com/maps/search/?api=1&query=Café+Avenida+Tuxtla+Gutiérrez' },
  ],
  plazas: [
    { nombre: 'Plaza Ámbar Fashion Mall', maps: 'https://www.google.com/maps/search/?api=1&query=Plaza+Ámbar+Fashion+Mall+Tuxtla+Gutiérrez' },
    { nombre: 'Galerías Boulevard', maps: 'https://www.google.com/maps/search/?api=1&query=Galerías+Boulevard+Tuxtla+Gutiérrez' },
    { nombre: 'Plaza Polifórum', maps: 'https://www.google.com/maps/search/?api=1&query=Plaza+Polifórum+Tuxtla+Gutiérrez' },
    { nombre: 'Plaza Crystal', maps: 'https://www.google.com/maps/search/?api=1&query=Plaza+Crystal+Tuxtla+Gutiérrez' },
  ],
  parques: [
    { nombre: 'Parque de la Marimba', maps: 'https://www.google.com/maps/search/?api=1&query=Parque+de+la+Marimba+Tuxtla+Gutiérrez' },
    { nombre: 'Joyyo Mayu', maps: 'https://www.google.com/maps/search/?api=1&query=Joyyo+Mayu+Tuxtla+Gutiérrez' },
    { nombre: 'Caña Hueca', maps: 'https://www.google.com/maps/search/?api=1&query=Caña+Hueca+Tuxtla+Gutiérrez' },
    { nombre: 'Parque Morelos Bicentenario', maps: 'https://www.google.com/maps/search/?api=1&query=Parque+Morelos+Bicentenario+Tuxtla+Gutiérrez' },
    { nombre: 'Parque del Oriente', maps: 'https://www.google.com/maps/search/?api=1&query=Parque+del+Oriente+Tuxtla+Gutiérrez' },
    { nombre: 'Parque 5 de Mayo', maps: 'https://www.google.com/maps/search/?api=1&query=Parque+5+de+Mayo+Tuxtla+Gutiérrez' },
  ],
};

export const cines: Destino[] = [
  { nombre: 'Cinépolis Plaza Las Américas', maps: 'https://www.google.com/maps/search/?api=1&query=Cinépolis+Plaza+Las+Américas+Tuxtla+Gutiérrez' },
  { nombre: 'Cinépolis Plaza Polifórum', maps: 'https://www.google.com/maps/search/?api=1&query=Cinépolis+Plaza+Polifórum+Tuxtla+Gutiérrez' },
  { nombre: 'Cinemex Galerías Tuxtla', maps: 'https://www.google.com/maps/search/?api=1&query=Cinemex+Galerías+Tuxtla' },
  { nombre: 'Cinemex Platino Ámbar', maps: 'https://www.google.com/maps/search/?api=1&query=Cinemex+Platino+Ámbar+Tuxtla+Gutiérrez' },
];

export const carteleras = [
  { nombre: 'Cinépolis Tuxtla', url: 'https://cinepolis.com/cartelera/tuxtla-gutierrez/' },
  { nombre: 'Cinemex Tuxtla', url: 'https://cinemex.com/cines/tuxtla-gutierrez/' },
];

export const generosCine = [
  { id: 'romance', nombre: 'Romance', emoji: '❤️' },
  { id: 'comedia', nombre: 'Comedia', emoji: '😂' },
  { id: 'accion', nombre: 'Acción', emoji: '🍿' },
  { id: 'terror', nombre: 'Terror', emoji: '😱' },
  { id: 'scifi', nombre: 'Sci-Fi', emoji: '🚀' },
];

export const horarios = [
  { id: '18:00', etiqueta: 'Tarde - 18:00', emoji: '🌅' },
  { id: '20:00', etiqueta: 'Noche - 20:00', emoji: '🌙' },
  { id: '21:00', etiqueta: 'Cena - 21:00', emoji: '🍽️' },
  { id: 'sorpresa', etiqueta: 'Sorpresa', emoji: '✨' },
];

export const logisticas = [
  { id: 'paso-por-ti', etiqueta: 'Paso por ti', detalle: 'Paso por ti' },
  { id: 'nos-vemos-alla', etiqueta: 'Nos vemos allá', detalle: 'Nos vemos allá' },
];

export function getCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
