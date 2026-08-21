interface ImportMetaEnv {
  readonly VITE_SHOW_GEO_LOGS: string;
  readonly VITE_HOST: string;
  // Добавьте другие переменные, если они есть
  readonly VITE_API_URL?: string;
  readonly VITE_APP_TITLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}