
import "./App.css";
import SplitText from "./SplitText";
import BlurText from "./BlurText";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Hello!" } },
    ar: { translation: { welcome: "مرحبا!" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
function App() {
   const { t, i18n } = useTranslation();
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
    <SplitText
      text="Hello, GSAP!"
      className="text-2xl font-semibold text-center"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
    <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
   <div className="text-center mt-20">
      <h1>{t("welcome")}</h1>
      <button onClick={() => i18n.changeLanguage("ar")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        العربية
      </button>
      <button onClick={() => i18n.changeLanguage("en")} className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded">
        English
      </button>
    </div>
</>
  );
}

export default App;
