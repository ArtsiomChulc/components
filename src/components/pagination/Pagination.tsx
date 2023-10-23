import {PaginationProps} from "@mui/material";
import {FC, useState} from "react";
import {MainPaginationButtons} from "./mainPaginationButtons/MainPaginationButtons";
import {PerPageSelect} from "./select/PerPageSelect";
import main from './pagination.module.scss'
import {paginationRange} from "./utils/dataForPagination";
import {getUsersAPI} from "./utils/getUsers";

type PhotosType = {
    small: null;
    large: null;
};

type UsersType = {
    followed: boolean;
    id: number;
    name: string;
    photos: PhotosType;
    status: null;
    uniqueUrlName: null;
}

export const Pagination: FC<PaginationProps> = () => {

    const [users, setUsers] = useState<UsersType[]>([])
    const getUsersHandler = async () => {
        const users: UsersType[] = await getUsersAPI.getUsers().then(data => data.items)
        setUsers(users)
    }
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
            <div style={{display: 'block', width: '100%', marginTop: '40px'}}>
                <button onClick={getUsersHandler}>get users</button>
                <div>{users.map((user, index) => {
                    return (
                        <>
                            <h4 style={{color: 'white'}}>{user.name}</h4>
                            <p>{user.status}</p>
                        </>
                    )
                })}</div>
            </div>
        </div>
    )
}


