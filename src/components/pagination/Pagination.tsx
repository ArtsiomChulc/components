import {PaginationProps} from "@mui/material";
import {FC} from "react";
import {MainPaginationButtons} from "./mainPaginationButtons/MainPaginationButtons";
import {PerPageSelect} from "./select/PerPageSelect";
import main from './pagination.module.scss'
import {paginationRange} from "./utils/dataForPagination";

export const Pagination: FC<PaginationProps> = () => {

    // const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
        <div className={main.wrap}>
            <div className={main.container}>
                {/*<PrevButton/>*/}
                <div className={main.wrapMainBtn}>
                    <MainPaginationButtons paginationRange={paginationRange}/>
                </div>
                {/*<NextButton/>*/}
            </div>
            <PerPageSelect/>
        </div>
    )
}


