import React, { useContext } from 'react'
import { SettingContext } from '../../context/Settings/settings'
// import  { useState } from 'react';
import { Form } from 'react-bootstrap';

function UserSettings() {

    const settings= useContext(SettingContext)

   


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
    </div>
  )
}

export default UserSettings

