import React, { useEffect, useState } from 'react';
import { LocaleProvider } from './helpers/reactivei18n';
import { SelectLang } from './helpers/SelectLang';
import "./scss/materaialize/materialize.scss"
import { Gospel } from './Gospel';
import "./style.scss"
import "./styleMobile.scss"
import { useTranslator } from '/imports/ui/helpers/useTranslator';
import Button from 'react-materialize/lib/Button';
import Modal from 'react-materialize/lib/Modal';
import axios from 'axios';
import { Summary } from './Summary';
import { isDesktop, isMobile } from 'react-device-detect';
import { SlideMenu } from './slideMenu/SlideMenu';


export const LandingPage = () => {
    const [lang, setLang] = useState('fr');
    const t = useTranslator();
    const showModal = window.localStorage.getItem('alreadyShown') !== "true"
    const [showSummary, setShowSummary] = useState(false);
    const [visibleDiv, setVisibleDiv] = useState(false)
    const [gospelMd, setGospelMd] = useState("");
    useEffect(() => {
        setShowSummary(false)
        axios({
            url: '/gospel/gospel_' + lang + '.md', //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {

            response.data.text().then(res => {
                setGospelMd(res)

                window.setTimeout(() => {
                    setShowSummary(true)
                }, 400)

            })
        })
    }, [lang])



    return (
        <>
            {!isDesktop && showSummary && (
                <SlideMenu lang={lang} visibleDiv={visibleDiv} gospelMd={gospelMd} />
            )}
            <div id="landingHead" className="navbar-fixed ">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">
                            <img src={"/img/logo.png"} alt="" className="responsive-img logoTitle z-depth-2" />
                            {isDesktop && (
                                <div className="hand-police siteTitle" style={{ display: "inline-block", lineHeight: "64px" }}>
                                    {t("siteTitle")}

                                </div>
                            )}
                        </a>
                        <ul id="nav" className="right ">
                            <li>  <SelectLang setLang={setLang} /></li>

                        </ul>
                    </div>
                </nav>


            </div >
            {gospelMd && (
                < div className="row mainContent">
                    {isDesktop && (
                        <div className="col l3 ">
                            <div className="Summary">
                                {showSummary && <Summary lang={lang} gospelMd={gospelMd} visibleDiv={visibleDiv} />}
                            </div>

                        </div>
                    )}

                    <div className="col l6">


                        <Gospel lang={lang} gospelMd={gospelMd} setVisibleDiv={setVisibleDiv} />
                    </div>
                    {isDesktop && (
                        <div className="col l3">
                        </div>
                    )}

                </div >
            )}

            <Modal
                actions={[
                    <Button flat modal="close" onClick={() => window.localStorage.setItem('alreadyShown', true)} node="button" waves="green">{t("closeModal")}</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}

                id="modalWelcome"
                open={showModal}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}

            >
                <div className={"row " + !isDesktop && "modal-content-mobile"}>
                    <div className="col s12 l3 center-align">
                        <img src={"/img/logo.png"} alt="" className="responsive-img  z-depth-2" />
                    </div>
                    <div className="col s12 l9">
                        <h5 className="hand-police siteTitleModal no-margin">
                            {t("siteTitle")}
                        </h5>
                        <p>{t("modalWelcomeText1")}</p>
                        <p>{t("modalWelcomeText2")}</p>
                        <p>{t("modalWelcomeText3")}</p>
                    </div>
                </div>

            </Modal>

        </>


    );
} 
