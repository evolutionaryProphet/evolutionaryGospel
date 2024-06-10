
import { useTracker } from 'meteor/react-meteor-data';
import React, { useContext } from 'react';
import SideNav from 'react-materialize/lib/SideNav';

import "./style.scss";

import { useTranslator } from '/imports/ui/helpers/useTranslator';
import { Summary } from '../Summary';
import { Icon } from 'react-materialize';
const onlyZeroToNine = (n) => {
    return n > 9 ? "9+" : n;
}
export const SlideMenu = ({ lang, visibleDiv, gospelMd }) => {
    const t = useTranslator();


    return (<div className="slider-menu">
        <style>
            {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
        </style>
        <SideNav
            id="slider-menu"
            options={{
                draggable: true
            }}
            trigger={<a href="#" id="slider-menu-trigger-btn" className="button-collapse small-margin show-menu-btn">

                <Icon medium className="material-icons ">format_align_left</Icon>
            </a>}
        >

            <Summary lang={lang} gospelMd={gospelMd} visibleDiv={visibleDiv} />
        </SideNav>
    </div>)
}
