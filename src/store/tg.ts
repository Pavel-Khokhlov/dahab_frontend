import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface tgState {
  tgUserName: string;
  error: string | null;
  openTelegramChat: (value: string) => void;
}

export const useTGStore = create<tgState>()(
  persist(
    (set, get) => ({
      tgUserName: "Garaihachka",
      error: null,

      // Установить имя пользователя
      setTgUserName: (username: string) => {
        set({ tgUserName: username });
      },

      // Открыть чат в Telegram
      openTelegramChat: (message?: string) => {
        const { tgUserName } = get();

        if (!tgUserName) {
          set({ error: "Имя пользователя Telegram не указано" });
          return;
        }

        let url = `tg://resolve?domain=${tgUserName}`;

        if (message) {
          url += `&text=${encodeURIComponent(message)}`;
        }
        // Fallback для браузера
        window.open(url, "_blank");
      },
      // Очистить ошибку
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: "telegram-storage",
      storage: createJSONStorage(() => localStorage), // Явно указываем storage
      partialize: (state) => ({
        tgUserName: state.tgUserName,
        // error не сохраняем
      }),
    },
  ),
);
