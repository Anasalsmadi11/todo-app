import React from "react";
// import { useContext,useState } from "react";
// import { SettingContext } from "../../context/Settings/settings";
// import { Pagination } from '@mantine/core';

export default function List(props){
    // const settings = useContext(SettingContext)

    // const [activePage, setPage] = useState(1);
  
    return(
        <>
        { props.listData.map(item => (
            <div key={item.id}>
              <p>To do: {item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              <hr />
            </div>
          ))}
          
 
        </>
    )
}