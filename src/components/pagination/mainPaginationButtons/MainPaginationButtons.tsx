import {FC} from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import s from './mainPaginationButton.module.scss'
import main from '../pagination.module.scss'

type MainPaginationButtonsPropsType = {
    paginationRange: (number: number) => Array<number>
}

type PageButtonPropsType = {
    page: number
}

const PageButton: FC<PageButtonPropsType> = (props: PageButtonPropsType) => {
    return (
        <button className={s.mainBtn}>
            {props.page}
        </button>
    )
}


export const MainPaginationButtons: FC<MainPaginationButtonsPropsType> = (props: MainPaginationButtonsPropsType) => {

    const paginationRange = props.paginationRange(10)


    return (
        <>
            {paginationRange.map((page: number, index) => {
                return (
                    <PageButton key={index} page={page}/>
                )
            })}
        </>
    )
}

export const PrevButton: FC = () => {
    return (
        <button className={main.item} >
            <BiChevronLeft className={s.icon} size={16} />
        </button>
    )
}

export const NextButton: FC = () => {
    return (
        <button className={main.item} >
            <BiChevronRight className={main.icon} size={16} />
        </button>
    )
}