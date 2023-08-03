import React, {ChangeEvent, useRef} from "react";
import s from "./input1.module.scss";



export const Input1 = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click()
    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size > 100000) {
                console.log('error')
            }
        }
    }


    return (
        <div className={s.block}>
            <div className={s.wrapper}>
                <button onClick={selectFileHandler}>upload file</button>
                <input style={{display: 'none'}} ref={inputRef} type="file" onChange={uploadHandler}/>
            </div>
        </div>
    );
}


