/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RSVP_FORM_URL: string;
  readonly VITE_PHOTOS_FOLDER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
