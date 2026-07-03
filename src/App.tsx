import { HelmetProvider } from "react-helmet-async";
import { TranslationContext } from "./context/TranslationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/public/Main";
import { useGlobalUIStore } from "@/store/GlobalUI";
import { translations } from "./locales/translations";

function App() {
  const { currentLocale } = useGlobalUIStore();
  const currentTranslations = translations[currentLocale];
  return (
    <HelmetProvider>
      <TranslationContext.Provider value={currentTranslations}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </TranslationContext.Provider>
    </HelmetProvider>
  );
}

export default App;
