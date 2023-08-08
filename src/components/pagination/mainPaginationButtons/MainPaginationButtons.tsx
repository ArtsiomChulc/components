import {FC} from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import s from './mainPaginationButton.module.scss'

const PageButton: FC = () => {
    return (
        <button
        >
            {/*{page}*/}
        </button>
    )
}


export const MainPaginationButtons: FC = () => {
    return (
        <>
            {/*{paginationRange.map((page: number | string, index) => {*/}
            {/*    const isSelected = page === currentPage*/}

            {/*    if (typeof page !== 'number') {*/}
            {/*        return <Dots key={index} />*/}
            {/*    }*/}

                return <PageButton />
            {/*})}*/}
        </>
    )
}

export const PrevButton: FC = () => {
    return (
        <button className={s.item} >
            <BiChevronLeft className={s.icon} size={16} />
        </button>
    )
}

export const NextButton: FC = () => {
    return (
        <button className={s.item} >
            <BiChevronRight className={s.icon} size={16} />
        </button>
    )
}