import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabBarNavigation from '../TabBarNavigation';
import Profile from './Profile';
import CustomDrawer from './CustomDrawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';








const Drawer = createDrawerNavigator();
const DrawerNavigations = () => {

  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerType: 'slide',
      drawerLabelStyle: {
        fontSize: 21,
        letterSpacing: 1,
        color : '#000000',
        
        
      },
      drawerItemStyle: { marginBottom: 10, padding: 5 },
      drawerActiveBackgroundColor: '#F7C1F9FF',
      drawerInactiveBackgroundColor : '#E6ABF5FF'
    }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Tabs"
        component={TabBarNavigation}
        options={{
          drawerLabel: 'Dashboard',
          

        }}
      ></Drawer.Screen>
      <Drawer.Screen name='Profile' component={Profile}
        options={{
          drawerLabel: 'Profile',
          headerShown : true
        }}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNavigations