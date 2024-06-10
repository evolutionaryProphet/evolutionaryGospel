import React, { useEffect, useState } from 'react';
import { useTranslator } from './useTranslator';
import { i18n } from 'meteor/universe:i18n';
import { Select } from 'react-materialize';
const { default: getLang } = require("./getLang");
export const SelectLang = ({ setLang }) => {
  const t = useTranslator();
  const langs = [
    {
      name: "Français",
      langFormat: 'fr',
      langIso639: 'FR',

    },
    {
      name: "English",
      langFormat: 'en',
      langIso639: 'EN',
    },
  ]
  const [selected, setSelected] = useState(langs.find(lang => lang.langFormat == i18n.getLocale())?.langFormat);
  const handleChange = event => {
    const lang = event.target.value;
    setSelected(lang);
    setLang(lang);
    localStorage.setItem('lang', lang);
    i18n.setLocale(lang);


  };
  useEffect(() => {

    let lang = getLang()
    let storedLang = window.localStorage.getItem('lang')
    // we stock language browser
    if (storedLang) {
      i18n.setLocale(storedLang);
      setLang(storedLang);
      setSelected(storedLang);
    } else {
      i18n.setLocale(lang);
      window.localStorage.setItem('lang', lang);
      setLang(lang);
      setSelected(lang);
    }
  }, [])
  return (
    <Select
      id="langSelector"
      multiple={false}
      value={selected}
      onChange={handleChange}
      style={{ border: "1px solid red" }}
    >
      {langs.map((language) => (
        <option key={language.langFormat} value={language.langFormat} className=" main-color">{language.langIso639}</option>
      ))}
    </Select>
  )
};

