import { View, Text } from 'react-native'
import React from 'react'
import LandingPage from './Screens/LandingPage';
import Dashboard from './Screens/Dashboard';
import Store from './Screens/Store';
import { Provider } from 'react-redux';
import Mainroute from './Screens/Mainroute';
import 'react-native-gesture-handler';


const App = () => {
  return (
    <>
    <Provider store={Store}>
      {/* // <LandingPage></LandingPage> */}
      {/* <Dashboard></Dashboard> */}
      <Mainroute></Mainroute>
    </Provider></>
   
  )
}

export default App