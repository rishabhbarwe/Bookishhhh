import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import BottomPlay from './BottomPlay';
import BottomCart from './BottomCart';
import BottomAccount from './BottomAccount';
import BottomCategories from './BottomCategories';


const home = require('../assets/home.png');
const play = require('../assets/play.png');
const cart = require('../assets/cart.png');
const category = require('../assets/categories.png');
const user = require('../assets/user.png')




const TabBarNavigation = () => {

    const [active, setActive] = useState('#ffffff');
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 65,
                backgroundColor: "#042230FF",
                paddingTop: 5,


            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#ffffff',
            tabBarIconStyle: { marginBottom: 1 },

        }}>
            <Tabs.Screen name="Dashboard" component={Dashboard} options={{
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: '200',
                    letterSpacing: 0.5,

                },
                tabBarIcon: (
                    (focus) => (
                        <Image source={home} style={{
                            width: 25,
                            height: 25,
                            tintColor: '#ffffff'
                        }}></Image>
                    )
                ),
                tabBarActiveTintColor: '#11B6E9FF',

                tabBarInactiveTintColor: '#ffffff',



            }}>
            </Tabs.Screen>
            <Tabs.Screen name="Play" component={BottomPlay} options={{
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: '200',
                    letterSpacing: 0.5,

                },
                tabBarIcon: (
                    (focus) => (
                        <Image source={play} style={{
                            width: 25,
                            height: 25,
                            tintColor: '#ffffff'
                        }}></Image>
                    )
                ),
                tabBarActiveTintColor: '#11B6E9FF',

                tabBarInactiveTintColor: '#ffffff',



            }}>
            </Tabs.Screen>
            <Tabs.Screen name="Category" component={BottomCategories} options={{
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: '200',
                    letterSpacing: 0.5,

                },
                tabBarIcon: (
                    (focus) => (
                        <Image source={category} style={{
                            width: 25,
                            height: 25,
                            tintColor: '#ffffff'
                        }}></Image>
                    )
                ),
                tabBarActiveTintColor: '#11B6E9FF',

                tabBarInactiveTintColor: '#ffffff',



            }}>
            </Tabs.Screen>
            <Tabs.Screen name="Cart" component={BottomCart} options={{
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: '200',
                    letterSpacing: 0.5,

                },
                tabBarIcon: (
                    (focus) => (
                        <Image source={cart} style={{
                            width: 25,
                            height: 25,
                            tintColor: '#ffffff'
                        }}></Image>
                    )
                ),
                tabBarActiveTintColor: '#11B6E9FF',

                tabBarInactiveTintColor: '#ffffff',



            }}>
            </Tabs.Screen>
            <Tabs.Screen name="Account" component={BottomAccount} options={{
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: '200',
                    letterSpacing: 0.5,

                },
                tabBarIcon: (
                    (focus) => (
                        <Image source={user} style={{
                            width: 25,
                            height: 25,
                            tintColor: '#ffffff'
                        }}></Image>
                    )
                ),
                tabBarActiveTintColor: '#11B6E9FF',

                tabBarInactiveTintColor: '#ffffff',



            }}>
            </Tabs.Screen>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    image: {



    }
})
export default TabBarNavigation