import React, { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';
import PerfectScrollbar from 'react-perfect-scrollbar';
export const Summary = ({ lang, gospelMd, visibleDiv }) => {
    const [titleList, setTitleList] = useState([])

    useEffect(() => {
        const rawList = document.getElementsByClassName("title")
        let formattedList = []
        Array.from(rawList).forEach((element, i) => {

            if (element.tagName == "H1") {

                formattedList.push(
                    {
                        id: element.id,
                        index: i,
                        title: element.innerText, h2s: []
                    })
            } else {

                formattedList[formattedList.length - 1]?.h2s.push({
                    id: element.id, title: element.innerText, index: i
                })
            }
        })
        setTitleList(formattedList)
    }, [])

    return (
        <div className="Summary-content relative">
            {
                !isDesktop && (<img src={"/img/logo.png"} alt="" className="responsive-img logoTitle z-depth-2 center-align small-margin small padding" />)

            }
            {titleList.map((title, i) => (
                <div key={i}>
                    <a href={"#" + title.id} className={"summaryTitle elipsis hand-police " + (visibleDiv == title.id ? " active" : "")}>{title.title}</a>
                    {title.h2s.map((h2, j) => (
                        <a href={"#" + h2.id} className={"subtitle elipsis " + (visibleDiv == h2.id ? " active" : "")} key={i + "-" + j} >{j > 8 ? h2.title.substring(2) : h2.title.substring(1)}</a>
                    ))}
                </div>
            ))}
        </div>
    )
};



