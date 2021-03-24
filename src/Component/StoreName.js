import React, { useState } from 'react';
import Hotel from './../img/hotel.png';
import Tick from './../img/tick.svg';


function StoreName (){


    return (
        <div className="hotelSection">
            <div className="container">
                <div className="storeSection">
                    <div className="storeImg">
                        <img src={Hotel}/>
                    </div>
                    <div className="storeText">
                        <h2>Mano Super Market</h2>
                        <h5><img src={Tick}/> TRUSTED SELLER</h5>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search for products…"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StoreName;