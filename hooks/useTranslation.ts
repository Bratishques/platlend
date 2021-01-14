import { useContext } from "react";
import LanguageContext from "../context/languageContext";
import defaultStrings from "../translations/locales/en";

export default function useTranslation(localization) {
  function t(key: string) {
    if (!localization.translations[key]) {
      console.warn(
        `Translation '${key}' for locale '${localization.locale}' not found.`
      );
      return defaultStrings[key]
    }
    return localization.translations[key] || "";
  }

  return {
    t,
    locale: localization.locale,
  };
}
