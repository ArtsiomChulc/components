import React from 'react';
import s from './app.module.scss';
import {Input1} from "./components/Input-1/Input1";
import Input2 from "./components/Input-2/input2";
import Input3 from "./components/Input-3/input3";
import Input4 from "./components/input-4_base64/input4Base64";


const App: React.FC = () => {


    return (
        <div className={s.AppBlock}>
            <div>
                {/*<Input1/>*/}
                {/*<Input2/>*/}
                {/*<Input3/>*/}
                <Input4/>
            </div>
        </div>
    );
};

export default App;