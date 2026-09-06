import { toast, ExternalToast } from "sonner";

import LogoIcon from "../components/LogoIcon";

export const useCustomToast = () => {
  const showSuccess = (message: string, options: ExternalToast = {}) => {
    toast.success(message, {
      ...options,
      style: {
        background: "rgba(var(--primary-white-rgb), 0.9)",
        color: "var(--primary-black)",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        ...options.style,
      },
      icon: <LogoIcon size={30} color="var(--primary-brand)" />,
    });
  };

  const showError = (message: string, options: ExternalToast = {}) => {
    toast.error(message, {
      ...options,
      style: {
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        ...options.style,
      },
      icon: <LogoIcon size={30} color="var(--primary-brand)" />,
    });
  };

  const showWarning = (message: string, options: ExternalToast = {}) => {
    toast.warning(message, {
      ...options,
      style: {
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        color: "#333",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        ...options.style,
      },
      icon: <LogoIcon size={30} color="var(--primary-brand)" />,
    });
  };

  return { showSuccess, showError, showWarning };
};
