import React from 'react';
import { Provider } from 'react-redux'; 

import Store from './store';

import DrawerNavigator from './4/routes';

const App = () =>{
  return(
    
      <Provider store={Store}>
        <DrawerNavigator/>
      </Provider>
  )
}

export default App;