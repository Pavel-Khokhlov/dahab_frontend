import { useGlobalUIStore } from "./GlobalUI";

export const useStore = () => {
  return {
    globalUIStore: useGlobalUIStore(),
  };
};
