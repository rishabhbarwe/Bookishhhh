import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
const logo = require('../../assets/booklogo.jpeg');
import LinearGradient from 'react-native-linear-gradient';

const CustomDrawer = (props: any) => {
  return (
    <LinearGradient
    colors={['#FFFFFFFF', '#5B16CAFF']}


      style={{
        flex: 1
      }}
    >
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}
          contentContainerStyle={styles.drawerScrollContainer}>

          <View style={{
           
          }}>
            <Image source={logo} style={styles.logo}></Image>
          </View>




          {/* Drawer Items */}
          <View style={styles.drawerListItems}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  drawerScrollContainer: {
    padding: 0,
    margin: 0,
  },
  logo: {
    margin: 5,
    width: 300,
    height: 200,
    borderWidth: 8,
    borderColor: '#be95c4',
    borderRadius : 40


  },
  drawerListItems: {
    margin: 20
  }

})

export default CustomDrawer