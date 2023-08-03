import React, {ChangeEvent} from 'react';
import Button from '@mui/material/Button';
import {IconButton} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";

const Input3 = () => {

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size > 100000) {
                console.log('error')
            }
        }
    }

    return (
        <div>
            {/*для того чтобы работал выбор файлов нужно обязательно тег <label> и component={'span'}*/}
            <label>
                <input style={{display: 'none'}} onChange={uploadHandler} type="file"/>
                <IconButton component='span'>
                    <CloudUpload fontSize={'large'} color={'primary'} />
                </IconButton>
            </label>
        </div>
    );
};

export default Input3;