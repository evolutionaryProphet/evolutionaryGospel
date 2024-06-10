import React from 'react';
import { LocaleProvider } from './helpers/reactivei18n';
import { SelectLang } from './helpers/SelectLang';
import "./scss/materaialize/materialize.scss"
import { LandingPage } from './LandingPage';
import { isDesktop, isMobile } from 'react-device-detect';

export const App = () => (
  <div className={isDesktop ? "desktop" : "mobile"}>

    <LocaleProvider>
      <LandingPage />
    </LocaleProvider>
  </div>
);
