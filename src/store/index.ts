import { useGlobalUIStore } from "@/store/globalUI";
import { useTGStore } from "@/store/tg";

export const useStore = () => {
  return {
    globalUIStore: useGlobalUIStore(),
    tgStore: useTGStore(),
  };
};
