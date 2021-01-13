import { defaultLocale } from "./config";
import {locales} from "./config";

export function getInitialLocale(){
    const localSetting = localStorage.getItem("locale");
    if (localSetting) {
      return JSON.parse(localSetting);
    }
    const [browserSetting] = navigator.language.split("-");
    if (browserSetting && browserSetting in locales) {
      return browserSetting;
    }
    return defaultLocale;
  }