import React, { useContext } from "react";
import { Pagination } from '@mantine/core';
import { SettingContext } from "../../context/Settings/settings";


export default function PaginationSettings(props){
  const settings= useContext(SettingContext)
  // console.log(props.itemsPerPage)
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