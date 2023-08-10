import {FC, useState} from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import s from './mainPaginationButton.module.scss'
import main from '../pagination.module.scss'
import {getUsersAPI} from "../utils/getUsers";

type MainPaginationButtonsPropsType = {
    paginationRange: (number: number) => Array<number>
}

// type PageButtonPropsType = {
//     page: number
//     id: number
// }
//
// const PageButton: FC<PageButtonPropsType> = (props: PageButtonPropsType) => {
//     return (
//         <button className={`${s.mainBtn} ${s.activeBtn}`}>
//             {props.page}
//         </button>
//     )
// }


export const MainPaginationButtons: FC<MainPaginationButtonsPropsType> = (props: MainPaginationButtonsPropsType) => {

    const paginationRangeArray = props.paginationRange(10)
    let [activeItem, setActiveItem] = useState<number | null>(null)
    const switcherButtonsLeft = () => {
        if (activeItem !== null) {
            setActiveItem(--activeItem)
            if (activeItem + 1 === paginationRangeArray[0] - 1 ) {
                setActiveItem(activeItem = paginationRangeArray.length - 1)

            }
        }
    }

        const switcherButtonsRight = () => {
            if (activeItem !== null) {
                setActiveItem(++activeItem)

                if (activeItem  === paginationRangeArray.length) {
                    setActiveItem(activeItem = paginationRangeArray[0] - 1 )
                }
            }
        }

    return (
            <>
                <button className={main.item} disabled={!activeItem} onClick={switcherButtonsLeft}>
                    <BiChevronLeft className={s.icon} size={16}/>
                </button>
                {paginationRangeArray.map((page: number, index) => {
                    const onClickHandler = (itemId: number) => {
                        setActiveItem(itemId)
                    }
                    return (
                        <button key={index} disabled={index === activeItem}
                                onClick={() => onClickHandler(index)}
                                className={`${s.mainBtn} ${activeItem === index ? s.activeBtn : ''} `}>
                            {page}
                        </button>
                    )
                })}
                <button className={main.item} onClick={switcherButtonsRight}>
                    <BiChevronRight className={main.icon} size={16}/>
                </button>
            </>
        )
    }

// export const PrevButton: FC = () => {
//     return (
//         <button className={main.item} >
//             <BiChevronLeft className={s.icon} size={16} />
//         </button>
//     )
// }
//
// export const NextButton: FC = () => {
//     return (
//         <button className={main.item} >
//             <BiChevronRight className={main.icon} size={16} />
//         </button>
//     )
// }