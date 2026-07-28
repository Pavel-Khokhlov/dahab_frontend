import { HelmetProvider } from "react-helmet-async";
import { TranslationContext } from "./context/TranslationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/public/Main";
import { translations } from "./locales/translations";
import { useStore } from "./store";
import SchedulePage from "./pages/public/Schedule";
import { useEffect } from "react";

function App() {
  const { globalUIStore } = useStore();
  const currentTranslations =
    translations[globalUIStore.currentLocale as keyof typeof translations];

  useEffect(()=> {
    globalUIStore.initializeApp();
  }, [])
  return (
    <HelmetProvider>
      <TranslationContext.Provider value={currentTranslations}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
          </Routes>
        </BrowserRouter>
      </TranslationContext.Provider>
    </HelmetProvider>
  );
}

export default App;
