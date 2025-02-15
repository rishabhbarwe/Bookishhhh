import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';

const Mainroute = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="landing" component={LandingPage}></Stack.Screen>
                <Stack.Screen name="dashboard" component={Dashboard}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Mainroute