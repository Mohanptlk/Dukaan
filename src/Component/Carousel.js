import React, { useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img2 from './../img/iceCream.png';
import img1 from './../img/food.png';

function Carousel() {

    const config = {
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [settings, setSettings] = useState(config);

    const products = [
        {
            img: img2,
            title: 'Ice Creams'
        },
        {
            img: img1,
            title: 'Home Food'
        },
        {
            img: img2,
            title: 'Ice Creams'
        },
        {
            img: img1,
            title: 'Fruit Salads'
        },
        {
            img: img2,
            title: 'Ice Creams'
        }
    ]


    return (
        <div className="carouselSection">
            <div className="container">
                <h2 className="sliderHeading">Bestsellers</h2>
            </div>
            <Slider {...settings}>
                {products.map((x, i) => {
                    return <div key={i} className="img-card">
                        <img className="img" src={x.img} />
                        <div className="card-body">
                            <h4 className="card-title">{x.title}</h4>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Carousel;