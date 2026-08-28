/** Número de WhatsApp del destinatario (10 dígitos México). Se agrega prefijo 52 automáticamente. */
const raw = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '9611663710';
export const WHATSAPP_NUMBER = raw.startsWith('52') ? raw : `52${raw}`;
