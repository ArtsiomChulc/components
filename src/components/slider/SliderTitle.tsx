import React, {useEffect, useState} from 'react';

import s from './slider.module.scss'
import {DBSliderBlackCard} from "./DB";

const SliderTitle = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const element = DBSliderBlackCard

    const interval = 3000;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === element.length - 1 ? 0 : prevSlide + 1));
    };


    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [currentSlide, interval]);


    return (
        <div className={s.slideWrap}>
            {element.map((title, index) => {
                return (
                    <p key={title.title}
                       style={{ transform: `translateX(${index - currentSlide * 105}%)`}}
                       className={`${s.slide} ${index === currentSlide ? s.active : ''}`}
                    >{title.title}</p>
                )
            })}
        </div>
    );
};

export default SliderTitle;