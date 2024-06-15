import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx'
import axios from 'axios';
import { isDesktop, isMobile } from 'react-device-detect';
import { useTranslator } from '/imports/ui/helpers/useTranslator';
import Button from 'react-materialize/lib/Button';

export const Footer = ({ }) => {
    const t = useTranslator();

    return (
        <div className="Footer small-shadow">

            <h5 className="center-align hand-police">{t("footerThanks")}</h5>


            <br />
            <p>{t("footerInfo")}</p>
            <br />

            <div className="row">
                <div className="col s12 l6  small-padding">
                    <h6 className='hand-police'>{t("participate")}</h6>
                    <p className='small-padding'>{t("participateInfo")}</p>
                    <Button className='flex flex-middle' flat large href="https://fr.tipeee.com/evolutionary-gospel/" node="a">
                        <img src="/img/money.svg" alt="" />
                        <div className="flex-auto hand-police">
                            {t("participateBtn")}
                        </div>
                    </Button>
                </div>
                <div className="col s12 l6 small-padding">
                    <h6 className='hand-police'>{t("networks")}</h6>
                    {/* <Button className='flex flex-middle' flat large >
                <img src="/img/X_icon.svg" alt="" />
                <div className="flex-auto hand-police">
                    X
                </div>
            </Button> */}
                    <p className='small-padding'>{t("networksInfo")}</p>
                    <Button className='flex flex-middle' flat large href="https://t.me/+buKHpcux_v04NGNk" node="a">
                        <img src="/img/telegram-4.svg" alt="" />
                        <div className="flex-auto hand-police">
                            Telegram
                        </div>
                    </Button>
                    <Button className='flex flex-middle' flat large href="mailto:contact@evolutionarygospel.com" node="a">
                        <img src="/img/icons_554071.svg" alt="" />
                        <div className="flex-auto hand-police">
                            Mail
                        </div>
                    </Button>
                </div>
            </div>



        </div>

    )
};



