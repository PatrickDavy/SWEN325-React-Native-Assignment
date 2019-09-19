import React, { Fragment } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Loading from './Screens/Loading';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Main from './Screens/Main';

const SwitchNavigator = createSwitchNavigator(
    {
      Loading: Loading,
      SignUp: SignUp,
      Login: Login,
      Main: Main
    },
    {
      initialRouteName: 'Loading',
      headerMode: 'none'
    }
);

const App = createAppContainer(SwitchNavigator);
export default App
