import React, { useEffect, useState } from 'react';
import { LocaleProvider } from './helpers/reactivei18n';
import { SelectLang } from './helpers/SelectLang';
import "./scss/materaialize/materialize.scss"
import { Parable } from './Parable';
import "./style.scss"
import "./styleMobile.scss"
import { useTranslator } from '/imports/ui/helpers/useTranslator';
import Button from 'react-materialize/lib/Button';
import Modal from 'react-materialize/lib/Modal';
import axios from 'axios';
import { Summary } from './Summary';
import { isDesktop, isMobile } from 'react-device-detect';
import { SlideMenu } from './slideMenu/SlideMenu';
import { RightPanel } from './RightPannel';
import Icon from 'react-materialize/lib/Icon';


export const LandingPage = () => {
    const [lang, setLang] = useState('fr');
    const t = useTranslator();
    const showModal = window.localStorage.getItem('alreadyShown') !== "true"
    const [showSummary, setShowSummary] = useState(false);
    const [visibleDiv, setVisibleDiv] = useState(false)
    const [parableMd, setParableMd] = useState("");
    const [showRightPannel, setShowRightPannel] = useState(false)
    useEffect(() => {
        setShowSummary(false)
        axios({
            url: '/parable/parable_' + lang.slice(0, 2) + '.md', //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {

            response.data.text().then(res => {
                setParableMd(res)

                window.setTimeout(() => {
                    setShowSummary(true)
                }, 400)

            })
        })
    }, [lang])



    return (
        <>
            {!isDesktop && showSummary && (
                <SlideMenu lang={lang} visibleDiv={visibleDiv} parableMd={parableMd} />
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
            {parableMd && (
                < div className=" mainContent row no-margin">

                    {isDesktop && (
                        <div className="col l3 ">
                            <div className="Summary">
                                {showSummary && <Summary lang={lang} parableMd={parableMd} visibleDiv={visibleDiv} />}
                            </div>

                        </div>
                    )}

                    <div className="col l6">


                        <Parable lang={lang} parableMd={parableMd} setVisibleDiv={setVisibleDiv} />
                    </div>
                    {isDesktop ? (
                        <div className="col l3">
                            <RightPanel />
                        </div>
                    ) : (
                        <>
                            {showRightPannel ? (
                                <>
                                    <Button onClick={() => setShowRightPannel(false)} floating large className="rightPannelBtn rightPannelBtnOpen">

                                        <Icon>clear</Icon>
                                    </Button>
                                    <div className="rightPannelContainer">
                                        <RightPanel />

                                    </div>
                                </>
                            ) : (

                                <Button onClick={() => setShowRightPannel(true)} floating large className="rightPannelBtn">
                                    <img src="/img/information-348.svg" alt="" className='' />
                                </Button>

                            )}
                        </>

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
