import roma from '../assets/images/postcards/roma.jpg';
import valdivia from '../assets/images/postcards/valdivia.jpg';
import brasil from '../assets/images/postcards/brasil.jpg';
import litoralCentral from '../assets/images/postcards/litoral-central.jpg';
import buenosAires from '../assets/images/postcards/buenos-aires.jpg';
import teotihuacan from '../assets/images/postcards/teotihuacan.jpg';
import santiago from '../assets/images/postcards/santiago.jpg';
import puntaArenas from '../assets/images/postcards/punta-arenas.jpg';
import puertoVaras from '../assets/images/postcards/puerto-varas.jpg';
import berlin from '../assets/images/postcards/berlin.jpg';
import valparaiso from '../assets/images/postcards/valparaiso.jpg';
import madrid from '../assets/images/postcards/madrid.jpg';
import heroPhoto from '../assets/images/hero-photo.jpg';
import type { BankAccount, ItineraryItem, NoticeItem, Postcard } from '../types/wedding.types';

/**
 * ISO date with explicit -03:00 offset (Chile Continental) so the countdown
 * is correct regardless of the visitor's local timezone.
 */
export const EVENT_DATE_ISO = '2026-11-27T18:00:00-03:00';

export const WEDDING_CONFIG = {
  coupleNames: { first: 'Denisse', second: 'Oscar' },
  eventDateIso: EVENT_DATE_ISO,
  eventDateDisplay: '27 de noviembre de 2026 · 18:00',
  eventPlaceShort: 'Restaurante Algarrobo — Valparaíso, Chile',
  heroPhoto,
  heroPhotoAlt: 'Denisse y Oscar',
  heroEyebrow: 'Bitácora de Viaje',
  heroSubtitle: '30 años de ruta hasta encontrarnos',
  venue: {
    name: 'Restaurante Algarrobo',
    address: 'Av. Carlos Alessandri 1510',
    addressLine2: 'Algarrobo, San Antonio, Valparaíso',
    boardingTime: 'Viernes 27 de noviembre · 18:00 hrs',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Restaurante+Algarrobo+Av+Carlos+Alessandri+1510+Algarrobo+Chile',
  },
  dressCode: {
    title: 'Dress code — Beach Formal',
    text:
      'Ellos con corbata, ellas con vestimenta larga. En colores, el que quieran — menos blanco: reservado para la novia.',
  },
  countdownShout: {
    prefix: "Vamos pa' la playa, ",
    highlight: 'no te quedes afuera',
    suffix: ' de la fiesta más grande de la primavera.',
  },
  nosotros: {
    eyebrow: 'Nuestra historia',
    title: 'Lo que se riega, crece',
    paragraphs: [
      'Tal vez nos demoramos 30 años en encontrarnos, pero cuando lo hicimos, las aventuras y los buenos momentos no se han hecho esperar. Así que si algo está bueno, lo riegas y lo cuidas por lo que te quede en este mundo. Así que nos casamos.',
      'Así que si recibes esto, es porque te queremos con nosotros para celebrar el amor y los buenos momentos. Porque la vida es una fiesta que un día termina, pero por mientras, vamos a caminarla juntos.',
    ],
    wallEyebrow: 'Páginas de la bitácora',
    wallTitle: 'Algunas paradas en el camino',
  },
  flightPath: {
    start: 'AQUÍ NOS ENCONTRAMOS',
    end: 'AQUÍ DECIMOS QUE SÍ',
  },
  itineraryTitle: 'La ruta de la noche',
  rsvpFormUrl: import.meta.env.VITE_RSVP_FORM_URL ?? '#',
  giftsCopy:
    "Nuestra fortaleza está completa, pero como tú quieres darnos un momento legendario, pues un pedacito de la luna de miel o una cuota del CAE bien nos vendría como anillo al dedo. (Anillo, dedo, matrimonio, que buena nos salió).",
  recuerdos: {
    text: 'Todo lo que capturen ese día es parte de nuestra bitácora. Súbelas a nuestra carpeta compartida para guardarlas todas juntas.',
    folderUrl: import.meta.env.VITE_PHOTOS_FOLDER_URL ?? '#',
  },
  rsvpShout: 'Confirma y ponte bonito, que esto empieza en un ratito.',
  audioSrc: '/audio/wedding-song.mp3', // TODO: reemplazar por el MP3 definitivo cuando esté disponible.
  audioLabel: 'A Dónde Vamos — Morat',
  footer: {
    seal: 'D&O',
    dateLine: '27 · 11 · 2026 — ALGARROBO, CHILE',
  },
} as const;

export const POSTCARDS: Postcard[] = [
  { image: roma, alt: 'Roma', caption: 'Roma, Italia', rotationClass: 'postcard-r1' },
  { image: valdivia, alt: 'Valdivia', caption: 'Valdivia, Chile', rotationClass: 'postcard-r2' },
  { image: brasil, alt: 'Brasil', caption: 'Brasil', rotationClass: 'postcard-r3' },
  { image: litoralCentral, alt: 'Litoral central', caption: 'Litoral central', rotationClass: 'postcard-r4' },
  { image: buenosAires, alt: 'Buenos Aires', caption: 'Buenos Aires, Argentina', rotationClass: 'postcard-r5' },
  { image: teotihuacan, alt: 'Teotihuacán', caption: 'Teotihuacán, México', rotationClass: 'postcard-r6' },
  { image: santiago, alt: 'Santiago', caption: 'Santiago, Chile', rotationClass: 'postcard-r7' },
  { image: puntaArenas, alt: 'Punta Arenas', caption: 'Punta Arenas, Chile', rotationClass: 'postcard-r8' },
  { image: puertoVaras, alt: 'Puerto Varas', caption: 'Puerto Varas, Chile', rotationClass: 'postcard-r9' },
  { image: berlin, alt: 'Berlín', caption: 'Berlín, Alemania', rotationClass: 'postcard-r10' },
  { image: valparaiso, alt: 'Valparaíso', caption: 'Valparaíso, Chile', rotationClass: 'postcard-r11' },
  { image: madrid, alt: 'Madrid', caption: 'Madrid, España', rotationClass: 'postcard-r12' },
];

export const ITINERARY: ItineraryItem[] = [
  { time: '17:30', event: 'Bienvenida de invitados' },
  { time: '18:00', event: 'Ceremonia' },
  { time: '19:00', event: 'Cóctel de celebración' },
  { time: '21:00', event: 'Baile y fiesta' },
  { time: '22:30', event: 'Show de medio tiempo' },
  { time: '01:30', event: 'Último brindis' },
];

export const NOTICES: NoticeItem[] = [
  {
    title: 'Evento para mayores',
    text:
      'Queremos que nuestros invitados disfruten de una noche de fiesta y relajo, por lo que hemos reservado este evento exclusivamente para adultos.',
  },
  {
    title: 'Half time show',
    text:
      'Durante el evento habrá un acto secreto de medio tiempo, así que necesitamos que todos lleguen con una polera de fútbol puesta — sin importar el equipo.',
  },
];

export const BANK_ACCOUNT: BankAccount = {
  titular: 'Oscar Andrés Vera Álamos',
  rut: '18.624.497-4',
  banco: 'Santander',
  tipoCuenta: 'Cuenta Corriente',
  numeroCuenta: '0 000 72 80158 0',
  email: 'overaalamos@gmail.com',
};

export function formatBankAccountForClipboard(account: BankAccount): string {
  return [
    `Titular: ${account.titular}`,
    `RUT: ${account.rut}`,
    `Banco: ${account.banco}`,
    `${account.tipoCuenta}: ${account.numeroCuenta}`,
    `Email: ${account.email}`,
  ].join('\n');
}
