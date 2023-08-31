import React, { useContext } from "react";
import { SettingContext } from "../../context/Settings/settings";

export default function List(props){
  // const settings= useContext(SettingContext)
  // const arr = JSON.parse(localStorage.getItem("listData"));


    // console.log("parsed",arr)
 

    return(
        <>
        {props.list.map(item => (
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