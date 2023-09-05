import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './context/Settings/settings';
import { MantineProvider} from '@mantine/core';
import UserSettings from './components/userSettings/userSettings';
import {Route,Routes} from 'react-router-dom'
import  NavBar  from './components/navbar/Navbar';

import LoginProvider from './components/auth/context';
import Auth from './components/auth/auth';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
// import {When} from 'react-if';
import {LoginContext} from './components/auth/context.jsx'

export default class App extends React.Component {

  static contextType = LoginContext;
  render() {
    // console.log(this.context)
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Settings>
          <LoginProvider>
            <NavBar/>
            <SignUp/>
        

                    <Routes>
                      <Route  path='/' element={<ToDo />} />
                      <Route  path='/settings' element={<UserSettings />} />
                    </Routes>
                      {/* <Login /> */}
              
                      {/* <Auth>
                        <div>Any valid user can see this</div>
                      </Auth>
              
                      <Auth capability="create">
                        <div>Users with create access can see this</div>
                      </Auth>
              
                      <Auth capability="update">
                        <div>Users with update access can see this</div>
                      </Auth>
              
                      <Auth capability="delete">
                        <div>Users with delete access can see this</div>
                      </Auth> */}
                      
                     {/* </When>
                  );
                }}
              </LoginContext.Consumer> */}
    
          </LoginProvider>
      </Settings>
      </MantineProvider>
    );
  }
}



