import React, {ChangeEvent} from 'react';
import Button from '@mui/material/Button';

const Input2 = () => {

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
                <Button variant='contained' component={'span'}>Upload button </Button>
            </label>
        </div>
    );
};

export default Input2;