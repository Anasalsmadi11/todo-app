import React from 'react';

import ToDo from './components/todo/todo';
import Settings from './context/Settings/settings';
import { MantineProvider} from '@mantine/core';

export default class App extends React.Component {

 
  render() {
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
   
     <Settings>
        <ToDo />
      </Settings>
      </MantineProvider>
    );
  }
}



