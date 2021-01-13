import { defaultLocale } from "./config";

export function getInitialLocale(){
    const localSetting = localStorage.getItem("locale");
    if (localSetting) {
      return JSON.parse(localSetting);
    }
    const [browserSetting] = navigator.language.split("-");
    if (browserSetting) {
      return browserSetting;
    }
    return defaultLocale;
  }