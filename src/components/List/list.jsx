import React, { useContext } from "react";
import { SettingContext } from "../../context/Settings/settings";
import Auth from "../auth/auth";
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
             <Auth capability="update">
              <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              </Auth>
              <Auth capability="delete">
              <button onClick={()=>props.deleteItem(item.id)}>Delete</button>
              </Auth>
              <hr />
            </div>
          ))}
          
 
        </>
    )
}