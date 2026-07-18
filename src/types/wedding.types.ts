export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Postcard {
  image: string;
  alt: string;
  caption: string;
  rotationClass: string;
}

export interface ItineraryItem {
  time: string;
  event: string;
}

export interface NoticeItem {
  title: string;
  text: string;
}

export interface BankAccount {
  titular: string;
  rut: string;
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  email: string;
}
