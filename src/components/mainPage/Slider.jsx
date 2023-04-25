import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    './image/slider/slide1.jpg',
    './image/slider/slide2.jpg',
    './image/slider/slide3.jpg',
    './image/slider/slide4.jpg',
    './image/slider/slide5.jpg',
    './image/slider/slide6.jpg',
    './image/slider/slide7.jpg',
    './image/slider/slide8.jpg',
    './image/slider/slide9.jpg',
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const SliderComponent = () => {
    return (
        <div className="slider-container">
            <div className={'slider-text'}>Best moments :</div>
            <Slider {...settings}>
                {images.map((image, i) => (
                    <div key={i} className="slider-image-container" >
                        <div className={'slider-fit'}><img className="slider-image" src={image} alt={`Slide ${i + 1}`} /></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;