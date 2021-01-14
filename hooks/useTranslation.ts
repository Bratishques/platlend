import { useContext } from "react";
import LanguageContext from "../context/languageContext";

export default function useTranslation(localization) {
  function t(key: string) {
    if (!localization.translations[key]) {
      console.warn(
        `Translation '${key}' for locale '${localization.locale}' not found.`
      );
      return localization.en[key]
    }
    return localization.translations[key] || "";
  }

  return {
    t,
    locale: localization.locale,
  };
}
