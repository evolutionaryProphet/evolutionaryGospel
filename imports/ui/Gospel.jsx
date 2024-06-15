import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx'
import axios from 'axios';
import { isDesktop, isMobile } from 'react-device-detect';
import { useTranslator } from '/imports/ui/helpers/useTranslator';
import { Footer } from './Footer';


function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
export const Gospel = ({ lang, gospelMd, setVisibleDiv }) => {
    const t = useTranslator();
    const handleScroll = (e) => {
        const rawList = document.getElementsByClassName("title")
        Array.from(rawList).forEach((element, i) => {
            if (isScrolledIntoView(element)) {
                setVisibleDiv(element.id)
            }

        })
        return true
    }
    return (
        <div className="mainContent">

            <div className="row no-margin relative">
                <div className="col s12  gospel" onScroll={handleScroll}>
                    {!isDesktop && (
                        <div className="hand-police siteTitle" style={{ display: "inline-block", lineHeight: "64px" }}>
                            {t("siteTitle")}

                        </div>
                    )}
                    <Markdown
                        options={{
                            overrides: {
                                h1: {
                                    props: {
                                        className: 'title',
                                    },
                                },
                                h2: {
                                    props: {
                                        className: 'title',
                                    },
                                },
                            },
                        }}>{gospelMd}</Markdown>
                    <Footer className="footer" />

                </div>
            </div>


        </div>

    )
};



