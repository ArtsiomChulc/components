import {PaginationProps} from "@mui/material";
import {FC} from "react";
import {MainPaginationButtons, NextButton, PrevButton} from "./mainPaginationButtons/MainPaginationButtons";
import {PerPageSelect} from "./select/PerPageSelect";
import s from './pagination.module.scss'

export const Pagination: FC<PaginationProps> = () => {


    // const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <PrevButton />

                <MainPaginationButtons/>

                <NextButton />
            </div>
                <PerPageSelect/>
        </div>
    )
}

