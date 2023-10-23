import React from 'react';
import s from './app.module.scss';
import {Input1} from "./components/Input-1/Input1";
import Input2 from "./components/Input-2/input2";
import Input3 from "./components/Input-3/input3";
import Input4 from "./components/input-4_base64/input4Base64";
import Input5ChangeAva from "./components/Input-5_changeAva/input5ChangeAva";
import {Pagination} from "./components/pagination/Pagination";
import Slider from "./components/slider/Slider";


const App: React.FC = () => {


    return (
        <div className={s.AppBlock}>
            <div>
                <Slider/>
                {/*<Input1/>*/}
                {/*<Input2/>*/}
                {/*<Input3/>*/}
                {/*<Input4/>*/}
                {/*<Input5ChangeAva/>*/}
                {/*<Pagination/>*/}
            </div>
        </div>
    );
};

export default App;