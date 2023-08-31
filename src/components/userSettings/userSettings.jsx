import React, { useContext, useState } from 'react'
import { SettingContext } from '../../context/Settings/settings'
// import  { useState } from 'react';
import { Form } from 'react-bootstrap';

function UserSettings() {

  // const[storedPref,setStoredPref]=useState([])
    const settings= useContext(SettingContext)
console.log(settings)
   
// const arr=JSON.parse(localStorage.getItem("state"))



const handleToggleChange = () => {
  settings.setComplete(!settings.complete);
};

    const handleSubmit=(e)=>{
        e.preventDefault()
        settings.setMaxItemsPerPage(e.target.items.value)
        e.target.reset()
        console.log(e.target.show.value)
    }
  return (
    <div>
       
            <h2>the user settings</h2>

            <form onSubmit={handleSubmit}>
            {/* <form > */}
                <label> items per page</label>
                <input type='number' name='items'/>
                <div>
                
                {/* <input type='checkbox' name='show'/> */}
               
                <Form>
                    <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="show completed tasks"
                    checked={settings.complete}
                    onChange={handleToggleChange}
                    />
                </Form>
                
                {/* <label> show completed items</label> */}
                </div>
                <input type='submit'/>
            </form>
            <h3 style={{marginTop:"50px"}}>Updated settings:</h3>
            <h4>{settings.complete ? "show completed TOdos":"hide Completed Todos"}</h4>
            <h4>max items per page: {settings.maxItemsPerPage}</h4>
            
    </div>
  )
}

export default UserSettings

