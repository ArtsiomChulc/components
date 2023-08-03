import React, {ChangeEvent} from 'react';
import Button from '@mui/material/Button';
import {IconButton} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";

const Input4 = () => {

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            // console.log("file: ", file)

            // if (file.size < 4000000) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                const file64 = reader.result as string
                console.log('file64: ', file64)
            }
            // } else {
            //     console.error("Error: ", "File very big")
            // }
        }
    }

    return (
        <div>
            {/*для того чтобы работал выбор файлов нужно обязательно тег <label> и component={'span'}*/}
            <label>
                <input style={{display: 'none'}} onChange={uploadHandler} type="file"/>
                <IconButton component='span'>
                    <CloudUpload fontSize={'large'} color={'primary'}/>
                </IconButton>
            </label>
        </div>
    );
};

export default Input4;