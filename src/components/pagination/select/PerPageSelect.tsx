import {FC} from "react";
import Select, {StylesConfig} from "react-select";
import s from './select.module.css'

export const PerPageSelect: FC = () => {
    const perPageOptions = [1,2,3,4,5,6,7]
    const selectOptions = perPageOptions.map(value => ({
        value: [value],
        label: value,
    }))

    const colourStyles: StylesConfig<any> = {
        control: styles => ({
            ...styles,
            backgroundColor: '#333',
            minHeight: 24,
            width: 50,
            boxShadow: 'none',
            paddingLeft: 4,
            fontSize: 14,
        }),
        container: styles => ({ ...styles, width: 50 }),
        indicatorsContainer: styles => ({
            ...styles,
            '&:hover': {
                color: 'white',
            },
            position: 'absolute',
            right: -8,
            top: -6,
            padding: 0,
            color: '#fff',
        }),
        menuList: styles => ({
            ...styles,
            '&:hover': {
                backgroundColor: '#333',
            },
            backgroundColor: '#333',
            // overflow: 'hidden',
            textAlign: 'center',
            color: 'white',
        }),
        valueContainer: styles => ({ ...styles, padding: 0, textAlign: 'left' }),
        singleValue: styles => ({ ...styles, color: 'white' }),

        option: styles => ({
            ...styles,
            '&:hover': {
                backgroundColor: '#382766',
                color: 'white',
            },
            backgroundColor: '#333',
            color: 'white',
            fontSize: 14,
        }),
        input: styles => ({
            ...styles,
            color: 'white',
        }),
        indicatorSeparator: styles => ({...styles, display: 'none'}),
    }
    return (
        <div className={s.selectBox}>
            Показать
            <Select
                //value={selectedOption}
                styles={colourStyles}
                options={selectOptions}
                //onChange={handleChange}
                placeholder={selectOptions[0].label}
                // onChange={onPerPageChange}
                //options={options}
                // menuPortalTarget={document.body}
            />
            на странице
        </div>
    )
}