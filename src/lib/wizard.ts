export const KEYS = {
  name: 'cita_name',
  category: 'cita_category',
  place: 'cita_place',
  maps: 'cita_maps',
  genre: 'cita_genre',
  time: 'cita_time',
  timeLabel: 'cita_time_label',
  logistics: 'cita_logistics',
  notes: 'cita_notes',
} as const;

export type WizardState = {
  name: string;
  category: string;
  place: string;
  maps: string;
  genre: string;
  time: string;
  timeLabel: string;
  logistics: string;
  notes: string;
};

export function readWizard(): WizardState {
  const get = (key: string) => sessionStorage.getItem(key) ?? '';
  return {
    name: get(KEYS.name),
    category: get(KEYS.category),
    place: get(KEYS.place),
    maps: get(KEYS.maps),
    genre: get(KEYS.genre),
    time: get(KEYS.time),
    timeLabel: get(KEYS.timeLabel),
    logistics: get(KEYS.logistics),
    notes: get(KEYS.notes),
  };
}

export function setField(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function requireFields(fields: (keyof WizardState)[], fallback = '/') {
  const state = readWizard();
  const missing = fields.some((field) => !state[field]);
  if (missing) window.location.replace(fallback);
  return state;
}

export function buildWhatsAppUrl(number: string, state: WizardState) {
  const plan = state.genre
    ? `${state.place} (${state.genre})`
    : state.place;
  const hora = state.timeLabel || state.time;
  const logistica = state.logistics;
  const extra = state.notes.trim() ? `\nDetalles: ${state.notes.trim()}` : '';
  const text =
    `¡Acepté salir contigo! 💖\n\n` +
    `Nos vemos en: ${plan}\n` +
    `A las: ${hora}\n` +
    `Cómo nos vemos: ${logistica}${extra}\n\n` +
    `¡Ahí nos vemos, con muchas ganas! ✨`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
