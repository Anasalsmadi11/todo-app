import React, { useContext } from "react";
import { Pagination } from '@mantine/core';



export default function PaginationSettings(props){

    return(
        <>
         <Pagination
            itemsPerPage={props.itemsPerPage}
            total={props.total}
            // page={props.currentPage}
            onChange={(newPage) => props.setCurrentPage(newPage)}
            withPagesCount
          />
        </>
    )
}