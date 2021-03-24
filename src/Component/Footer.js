import React, { useState } from 'react';
import HomeIcon from "../img/homeIcon.svg";
import BagIcon from "../img/bagIcon.svg";
import OrderIcon from "../img/orderIcon.svg";


function Footer (){


    return (
        <div className="footerSection">
            <div className="container">
                <div className="footerBtns">
                    <button type="button" className="btn homeBtn"><img src={HomeIcon}/> Home</button>
                    <button type="button" className="btn bagBtn"><img src={BagIcon}/> Bag <span className="tagNumber">3</span></button>
                    <button type="button" className="btn orderBtn"><img src={OrderIcon}/> Orders</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;