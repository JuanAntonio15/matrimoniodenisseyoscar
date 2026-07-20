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
import type { BankAccount, ItineraryItem, NoticeItem, Postcard, WishlistItem } from '../types/wedding.types';
import { zonedTimeToUtc } from '../lib/timezone';

export const EVENT_TIME_ZONE = 'America/Santiago';
export const EVENT_DATE_LOCAL = '2026-11-27T17:30:00';
export const EVENT_DATE = zonedTimeToUtc(EVENT_DATE_LOCAL, EVENT_TIME_ZONE);

export const WEDDING_CONFIG = {
  coupleNames: { first: 'Denisse', second: 'Oscar' },
  eventDate: EVENT_DATE,
  eventDateDisplay: '27 de noviembre de 2026 · 17:30',
  eventPlaceShort: 'Restaurante Algarrobo',
  heroPhoto,
  heroPhotoAlt: 'Denisse y Oscar',
  heroEyebrow: 'Bitácora de Viaje',
  heroSubtitle: '30 años de ruta hasta encontrarnos',
  venue: {
    name: 'Restaurante Algarrobo',
    address: 'Av. Carlos Alessandri 1510, Algarrobo',
    addressLine2: '',
    boardingTime: 'Viernes 27 de noviembre · 17:30 hrs',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Restaurante+Algarrobo+Av+Carlos+Alessandri+1510+Algarrobo+Chile',
  },
  dressCode: {
    title: 'Dress code: Formal',
    text:
      'Ellos con corbata, ellas con vestimenta larga. La elección del color es libre, con excepción del blanco, reservado especialmente para la novia.',
  },
  countdownShout: {
    prefix: "Vamos pa' la playa, ",
    highlight: 'no te quedes fuera',
    suffix: ' de la fiesta más grande de la primavera.',
  },
  nosotros: {
    eyebrow: 'Nuestra historia',
    title: 'Donde hay amor, echamos raíces',
    paragraphs: [      
      'Tal vez nos demoramos 30 años en encontrarnos, pero cuando finalmente lo hicimos, las aventuras, las risas y los buenos momentos no se hicieron esperar. Y como cuando algo está bueno hay que regarlo, cuidarlo y disfrutarlo por todo el tiempo que nos quede en este mundo… decidimos casarnos.',
      'Si recibes esto, es porque te queremos con nosotros para celebrar el amor, la amistad y todos los buenos momentos que hacen que la vida valga la pena. Porque la vida es una fiesta que algún día termina, pero mientras tanto, queremos caminarla juntos.'
    ],
    wallEyebrow: 'Páginas de la bitácora',
    wallTitle: 'Algunas paradas en el camino',
  },
  flightPath: {
    start: 'AQUÍ NOS ENCONTRAMOS',
    end: 'AQUÍ DECIMOS QUE SÍ',
  },
  itineraryTitle: 'Próximo destino: celebrar',
  rsvpFormUrl: import.meta.env.VITE_RSVP_FORM_URL ?? '#',
  wishlistTitleLines: ['Nuestra lista de', 'sueños para este Chile'] as [string, string],
  wishlistRibbonLines: [
    'Algunos románticos, otros absolutamente',
    'necesarios, pero todos muy nosotros.',
  ] as [string, string],
  bankBoxTitle: 'Cuenta compartida no patriarcal',
  giftsClosing: 'Gracias por ser parte de este viaje.',
  recuerdos: {
    text: 'Todo lo que capturen ese día es parte de nuestra bitácora. Súbelas a nuestra carpeta compartida para guardarlas todas juntas.',
    folderUrl: import.meta.env.VITE_PHOTOS_FOLDER_URL ?? '#',
  },
  rsvpShout: 'Confirma y ponte bonito, que esto empieza en un ratito.',
  audioSrc: '/audio/wedding-song.mp3',
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
  { time: '17:30', label: 'Punto de encuentro', event: 'Bienvenida de pasajeros' },
  { time: '18:00', label: 'Comienza el viaje', event: 'Ceremonia' },
  { time: '19:00', label: 'Primera escala', event: 'Cóctel de celebración' },
  { time: '21:00', label: 'Próxima parada: la pista', event: 'Baile y fiesta' },
  { time: '22:30', label: 'Escala sorpresa', event: 'Show de medio tiempo' },
  { time: '01:30', label: 'Último brindis', event: 'Hasta el próximo viaje' },
];

export const NOTICES: NoticeItem[] = [
  {
    title: 'Evento para mayores',
    text:
      'Queremos que nuestros invitados disfruten de una noche de fiesta y relajo, por lo que hemos reservado este evento exclusivamente para adultos.',
  },
  {
    title: 'Escala Sorpresa',
    text:
      'En algún momento de la noche tendremos una parada inesperada. Solo les adelantamos una cosa: traigan su polera de fútbol favorita, sin importar los colores ni el equipo, acá todos jugamos local.',
  },
];

export const WISHLIST: WishlistItem[] = [
  {
    iconId: 'soccer',
    text: 'Entradas para el Clásico Universitario (barras separadas). Para cada uno! + Un Kapo y una Serranita.',
    price: '$41.291',
  },
  {
    iconId: 'gas',
    text: 'Un estanque para la Gladys, así se llama nuestro auto (Gracias Kast-igo).',
    price: '$51.880',
  },
  {
    iconId: 'hourglass',
    text: 'Una máquina del tiempo para evitar el gobierno actual.',
    price: '$60.999',
  },
  {
    iconId: 'graduation',
    text: 'Una cuota del CAE (Gracias Kast-igo 2).',
    price: '$70.001',
  },
  {
    iconId: 'house',
    text: 'Un empujoncito para nuestro emprendimiento de estar "Más Cerquita".',
    price: '$80.666',
  },
  {
    iconId: 'plane',
    text: 'Si esta invitación llegó a Farkas.',
    price: 'Un chilion de dólares',
  },
];

export const BANK_ACCOUNT: BankAccount = {
  titular: 'Oscar Andrés Vera Álamos',
  rut: '18624497-4',
  banco: 'Prepago Tenpo',
  tipoCuenta: 'Cuenta Vista',
  numeroCuenta: '11118624497',
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
