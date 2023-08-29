import React from "react";
import { Pagination } from '@mantine/core';


export default function PaginationSettings(props){
    return(
        <>
         <Pagination
            itemsPerPage={props.itemsPerPage}
            total={10}
            page={props.currentPage}
            onChange={(newPage) => props.setCurrentPage(newPage)}
            withPagesCount
          />
        </>
    )
}