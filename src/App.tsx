import { HelmetProvider } from "react-helmet-async";
import { LOCALES, TranslationContext } from "./context/TranslationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/public/Main";
import { translations } from "./locales/translations";

function App() {
  return (
    <HelmetProvider>
      <TranslationContext.Provider value={translations[LOCALES.ENGLISH]}>
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
