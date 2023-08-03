import React, {ChangeEvent, useState} from 'react';
import {IconButton} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";
import defaultAva from '../../common/avas/pngtree-student-boy-png-image_3998533.png';
import s from './input5.module.scss'

const Input5ChangeAva = () => {

    const [ava, setAva] = useState(defaultAva)

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 4_000_000) {
                converterFileToBase64(file, (file64: string) => {
                    setAva(file64)
                })
            } else {
                console.error('Error: ', 'File very big')
            }
        }
    }

    const converterFileToBase64 = (file: File, callBack: (x: string) => void) => {
        const reader = new FileReader()
        reader.onloadend = () => {
            const file64 = reader.result as string
            callBack(file64)
        }
       reader.readAsDataURL(file)
    }

    return (
        <div className={s.wrapAva}>
            {/*для того чтобы работал выбор файлов нужно обязательно тег <label> и component={'span'}*/}
            <label>
                <input style={{display: 'none'}} onChange={uploadHandler} type="file"/>
                <IconButton component='span'>
                    <CloudUpload fontSize={'large'} color={'primary'} />
                </IconButton>
            </label>
            <div className={s.avaBlock}>
                <img src={ava || defaultAva} alt="Avatar"/>
            </div>
        </div>
    );
};

export default Input5ChangeAva;