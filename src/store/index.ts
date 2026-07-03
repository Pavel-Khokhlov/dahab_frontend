import { useGlobalUIStore } from "./globalUI";

export const useStore = () => {
  return {
    globalUIStore: useGlobalUIStore(),
  };
};
