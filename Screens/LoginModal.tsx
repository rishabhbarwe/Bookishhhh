import { View, Text, Modal, TextInput, Image, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react';
import CheckBox from '@react-native-community/checkbox';


const email = require('../assets/email.png')
const lock = require('../assets/lock.png')
const welcome = require('../assets/hello.png')
const facebook = require('../assets/facebook.png')
const google = require('../assets/google.png')
const twitter = require('../assets/twitter.png')
type loginModalType = {
    visible: boolean,
    onClose: any,
    navigation : any,
}

const LoginModal: React.FC<loginModalType> = ({ visible, onClose,navigation}) => {
    
    return (
             
       
            <Modal
            visible={visible}
            animationType='slide'
            transparent={true}
            onRequestClose={onClose}
        >
           <ScrollView>
           <View style={styles.screen}>
                <View style={styles.modal}>
                    
                    <View style={{flexDirection : 'row',alignItems : "center"}}>
                    <Image source={welcome} style={styles.HeaderImage}></Image>
                    <Text style={{alignSelf : 'flex-end',
                        marginLeft : 5,fontSize : 23,
                        fontWeight : '700',letterSpacing : 1,
                        color : '#7F04F1FF'}}>
                        Hello!
                    </Text>
                    </View>
                    <Text style={styles.label}>Username/email</Text>
                    <View style={styles.inputBox}>
                    <TextInput style={styles.input} placeholder='username'></TextInput>
                    <Image source={email} style={styles.image}></Image>
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View>
                    <TextInput style={styles.input} placeholder='password'></TextInput>
                    <Image source={lock} style={styles.image}></Image>
                    </View>
                    <View style={styles.rememberme}>
                        <CheckBox value={true}></CheckBox>
                        <Text style={styles.rememberMeText}>Remeber me!</Text>
                        </View>
                    <View>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("dashboard")}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection : 'row',alignSelf : 'center'}}>
                    <Text style={{alignSelf : 'center',
                        fontSize : 18,
                        textDecorationLine : 'underline',
                        fontWeight : '500',
                        color : '#780000'
                        }}>
                    new here?
                    </Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.RegisterbuttonText}>Register</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{flexDirection : 'row',alignItems : 'center',justifyContent : 'center'}}>
                        <View style={{width : 90,height : 5,backgroundColor : '#52796f'}}></View>
                        <Text style={{fontSize : 18,fontWeight : '700',marginHorizontal : 5,color : '#000000'}}>or connect with</Text>
                        <View style={{width : 90,height : 5,backgroundColor : '#52796f'}}></View>
                    </View>
                    <View style={{flexDirection : 'row',justifyContent : 'center'}}>
                        <Image style={styles.logo} source={google}></Image>
                        <Image style={styles.logo} source={facebook}></Image>
                        <Image style={styles.logo} source={twitter}></Image>
                    </View>

                </View>
            </View>
           </ScrollView>

        </Modal>
        

    )
}

const styles = StyleSheet.create({
    screen: {
       flex : 1,
       height : 781,
       backgroundColor : 'rgba(0,0,0,0.8)'
    },
    modal : {
         marginTop : 150,
         marginHorizontal : 20,
         padding : 20,
         height : 440,
         backgroundColor : 'rgba(200,200,200,1)',
         borderRadius : 20

    },
    HeaderImage: {
       
       width : 40,
       height : 40
       
       
       
    },
    label: {
          fontSize : 22,
          marginTop : 10,
          fontWeight : '700',
          color : '#000000'
    },
    input: {
        borderWidth : 0,
        
        borderRadius : 10,
        width : '100%',
        padding: 8,
        fontSize : 20,
        backgroundColor : 'rgba(255,255,255,0.7)',
        color : '#000000',
        paddingLeft : 38,
        fontWeight : '500'
        
        
    },
    button :{
      alignSelf : 'center',
      marginBottom : 20,
      marginTop : 10
      
    },
    buttonText : {
      fontSize : 21,
      fontWeight : '700',
      paddingHorizontal : 100,
      paddingVertical : 5,
      backgroundColor : '#8338ec',
      borderRadius : 20,
      color : '#ffffff'
    },
    RegisterbuttonText : {
        fontSize : 20,
        fontWeight : '700',
        color : '#6A00FFFF',
        marginLeft : 2
    },
    rememberme : {
       flexDirection : 'row',
       alignItems : 'center'
    },
    rememberMeText : {
       fontSize : 18,
       fontWeight : '700',
       color : '#000000FF'
    },
    inputBox : {
      flexDirection : 'row',
      position : 'relative'
    },
    image : {
        width : 25,
        height : 25,
        position : 'absolute',
        top : 10,
        left : 7,
        tintColor : '#9627D6FF'
    },
    logo : {
        width : 30,
        height : 30,
        margin : 10
    }
})

export default LoginModal