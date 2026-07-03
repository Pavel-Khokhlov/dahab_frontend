import { useGlobalUIStore } from "@/store/globalUI";

export const useStore = () => {
  return {
    globalUIStore: useGlobalUIStore(),
  };
};
