// @ts-ignore
import { i18n } from 'meteor/universe:i18n';
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';

import '../../locales/en.i18n.json';
import '../../locales/fr.i18n.json';

const localeContext = createContext(i18n.getLocale());



export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(i18n.getLocale());
  useEffect(() => {
    i18n.onChangeLocale(setLocale);
    return () => {
      i18n.offChangeLocale(setLocale);
    };
  }, [setLocale]);

  return (
    <localeContext.Provider value={locale}>{children}</localeContext.Provider>
  );
}

export function useLocale() {
  return useContext(localeContext);
}