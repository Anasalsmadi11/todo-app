import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './context/Settings/settings';
import { MantineProvider} from '@mantine/core';
import UserSettings from './components/userSettings/userSettings';
import {Route,Routes} from 'react-router-dom'
import  NavBar  from './components/navbar/Navbar';


export default class App extends React.Component {

 
  render() {
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavBar/>
        <Settings>
          
      <Routes>
        <Route  path='/' element={<ToDo />} />
        <Route  path='/settings' element={<UserSettings />} />
      </Routes>
 
      </Settings>
      </MantineProvider>
    );
  }
}



