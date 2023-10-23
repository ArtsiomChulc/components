import React from 'react';
import {NAME_BLACK_CARD} from "./DB";

import s from './slider.module.scss';
import SliderTitle from "./SliderTitle";

const Slider = () => {

    return (
        <div className={s.mainSlider}>
            <h3>{NAME_BLACK_CARD}</h3>
              <SliderTitle/>
        </div>
    );
};

export default Slider;