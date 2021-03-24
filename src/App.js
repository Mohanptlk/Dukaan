import Carousel from "./Component/Carousel";
import './App.css';
import './Custom.scss';

import './fonts/GalanoGrotesqueRegular.ttf';
import './fonts/GalanoGrotesqueMedium.ttf';
import IceCream from "./Component/IceCream";
import StoreName from "./Component/StoreName";

import logo from './img/logo.svg';
import FooterPre from "./Component/FooterPre";
import Footer from "./Component/Footer";



function App() {
  return (
    <div className="App">
      <header className="headerMain">
        <div className="container">
            <div className="headerInner">
                <div className="logoSection">
                    <h4>Store made with</h4>
                    <img src={logo}/>
                </div>
                <a href="#">DOWNLOAD APP</a>
            </div>
        </div>
      </header>
        <StoreName/>
        <Carousel/>
        <IceCream/>
        <FooterPre/>
        <Footer/>
    </div>
  );
}

export default App;
