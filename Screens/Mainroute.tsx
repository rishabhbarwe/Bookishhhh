import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './LandingPage';
import TabBarNavigation from './TabBarNavigation';
import KiteRunner from './Books Exerpts/KiteRunner';
import DrawerNavigations from './Drawer/DrawerNavigations';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type mainrootTypes = {
    landing: undefined,
    Drawer: undefined,
    KiteRunner: {
        cover: any,
        name: string,
        excerpt: string
    },

}



const Mainroute = () => {

    const Stack = createNativeStackNavigator<mainrootTypes>();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="landing" component={LandingPage}></Stack.Screen>
                <Stack.Screen name="Drawer" component={DrawerNavigations}></Stack.Screen>
                <Stack.Screen name="KiteRunner" component={KiteRunner} ></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Mainroute