import React, { useState } from 'react';
import Truck from './../img/truck.svg';
import Guarantee from './../img/icons-protection.svg';
import Support from './../img/icons-support.svg';
import Chat from './../img/chatButton.svg';
import IconExpend from './../img/group-3.svg';


function FooterPre (){


    return (
        <div className="footerPreSection">
            <div className="container">
                <div className="footerIconMain">
                    <div className="footerIconBox">
                        <img src={Truck}/>
                        <h4>Free Delivery</h4>
                        <p>(above ₹500)</p>
                    </div>
                    <div className="footerIconBox">
                        <img src={Guarantee}/>
                        <h4>Buyer Protection</h4>
                    </div>
                    <div className="footerIconBox">
                        <img src={Support}/>
                        <h4>Customer Support</h4>
                    </div>
                </div>
                <div className="footerPreLine"></div>
                <div className="footerTextMain">
                    <h3>STORE DETAILS</h3>
                    <h4>Mano Super Market</h4>
                    <p>Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</p>
                    <div className="footerPreBtn">
                        <button type="button" className="btn">
                            <img src={Chat}/>
                        </button>
                        <span className="footerIconBtn">
                            <img src={IconExpend}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPre;