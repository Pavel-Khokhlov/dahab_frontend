import { useGlobalUIStore } from "./globalUI.ts";

export const useStore = () => {
  return {
    globalUIStore: useGlobalUIStore(),
  };
};
