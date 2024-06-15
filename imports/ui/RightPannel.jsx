import React, { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslator } from './helpers/useTranslator';
import Button from 'react-materialize/lib/Button';
export const RightPanel = ({ }) => {
    const t = useTranslator();
    return (
        <div className="right-pannel-content relative small-padding">
            <br />

            <h6 className='hand-police'>{t("participate")}</h6>
            <p>{t("participateInfo")}</p>
            <Button className='flex flex-middle' flat large href="https://fr.tipeee.com/evolutionary-gospel/" node="a">
                <img src="/img/money.svg" alt="" />
                <div className="flex-auto hand-police">
                    {t("participateBtn")}
                </div>
            </Button>

            <br />
            <h6 className='hand-police'>{t("contribute")}</h6>
            <p>{t("contributeInfo")}</p>
            <Button className='flex flex-middle' flat large href="https://github.com/evolutionaryProphet/evolutionaryGospel" node="a">
                <img src="/img/Octicons-mark-github.svg" alt="" />
                <div className="flex-auto hand-police ">
                    {t("contributeBtn")}
                </div>
            </Button>
            <br />
            <h6 className='hand-police'>{t("networks")}</h6>
            {/* <Button className='flex flex-middle' flat large >
                <img src="/img/X_icon.svg" alt="" />
                <div className="flex-auto hand-police">
                    X
                </div>
            </Button> */}
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
            <div style={{ margin: "30px 0" }}><hr />
            </div>
            <h6 className="titlePannel hand-police" >{t("version")} : 1.1 - 06/2024</h6>
            <p><i>Creative Commons Attribution-NonCommercial 4.0 International License</i></p>

        </div>
    )
};



