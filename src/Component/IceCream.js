import React, { useState } from 'react';
import Icecream1 from './../img/iceCream1.png';
import Icecream2 from './../img/iceCream2.png';
import Icecream3 from './../img/iceCream3.png';
import Icecream4 from './../img/iceCream4.png';
import MinuseIcon from './../img/minusIcon.png';
import PlusIcon from './../img/icons-consumer-plus.svg';
import ArrowRignt from './../img/arrowRignt.svg';

function IceCream (){

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };


    return (
        <div className="container">
            <div className="iceCreamMain">
                <h2 className="iceCreamHeading">Ice Creams <span className="headingTag">10</span></h2>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream1} alt="ice cream"/>
                        <span>30% OFF</span>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Ice Cream Bowl</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;209</span><span className="priceTag">&#8377;399</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream2} alt="ice cream"/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Baskin Robbin’s Scoop Cup</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;399</span></h2>
                            <h4>Out of stock</h4>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream3} alt="ice cream"/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Ice Cream Bowl</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;249</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream4} alt="ice cream"/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Kwality Walls Black Currant</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;175</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream1} alt="ice cream"/>
                        <span>30% OFF</span>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Ice Cream Bowl</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;209</span><span className="priceTag">&#8377;399</span></h2>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn" onClick={handleDecrement}><img src={MinuseIcon}/></button>
                                <button type="button" className="btn">{count}</button>
                                <button type="button" className="btn" onClick={handleIncrement}><img src={PlusIcon}/></button>
                            </div>
                            {/*<button type="button" className="btn">ADD</button>*/}
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream2} alt="ice cream"/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Baskin Robbin’s Scoop Cup</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;399</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox">
                    <div className="iceCreamImg">
                        <img src={Icecream3} alt="ice cream"/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Ice Cream Bowl</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;249</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBox noBorder">
                    <div className="iceCreamImg">
                        <img src={Icecream4}/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Kwality Walls Black Currant</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;175</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className="iceCreamBtnSection">
                    <button type="button" className="btn productBtn">SEE ALL PRODUCTS <img src={ArrowRignt}/> </button>
                </div>
            </div>
            <div className="iceCreamMain">
                <h2 className="iceCreamHeading">Ice Creams <span className="headingTag">1</span></h2>
                <div className="iceCreamBox noBorder">
                    <div className="iceCreamImg">
                        <img src={Icecream4} alt="ice cream"/>
                    </div>
                    <div className="iceCreamContent">
                        <h4>Kwality Walls Black Currant</h4>
                        <h5>1 Unit</h5>
                        <div className="iceCreamPrice">
                            <h2><span>&#8377;175</span></h2>
                            <button type="button" className="btn addBtn">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IceCream;