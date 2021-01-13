import React, { useEffect, useState } from "react";
import defaultStrings from "../translations/locales/en"
import { useRouter } from "next/router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import locales from "../translations/locales";


const LanguageContext = React.createContext({
    localization: {
        locale: "en",
        translations: defaultStrings.hero,
        namespace: "common",
    },
    setLocale: (state) => {},
})

export const LanguageContextProvider = ({ localization, children }) => {
    const [localizationState, setLocalizationState] = useState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
    });
    const setLocale = (state) => {
        setLocalizationState(state)
    }
    const { query } = useRouter();
    const [getStoredLocale, setStoredLocale] = useLocalStorage("locale");
    useEffect (() => {
      if (localizationState.locale !== getStoredLocale) {
        setStoredLocale(localizationState.locale);
      }
    }, [localizationState]);

    useEffect(() => {
        const language: any = query.lang
        if (
          localization?.locale !== query.lang && language in ["en", "ja"]
        ) {
       
          setLocalizationState({
            locale: localization?.locale,
            translations: localization?.translations,
            namespace: localization?.namespace,
          });
        }
      }, [query.lang, localizationState]);

    return (
        <LanguageContext.Provider
          value={{ localization, setLocale: setLocale}}
        >
          {children}
        </LanguageContext.Provider>
      );

}

export default LanguageContext

export const getLocalizationProps = (ctx, namespace) => {
    const lang = (ctx.params?.lang) || "en";
    const locale: any = locales[lang];
    const strings: any = locale[namespace];
    const translations = {
      heroText: locales[lang].heroText,
      ...strings,
    };
    return {
      locale: ctx.params?.lang || "en",
      translations,
      namespace,
    };
  };