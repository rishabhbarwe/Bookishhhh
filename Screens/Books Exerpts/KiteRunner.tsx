import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const kt = require('../../assets/tkr.jpeg')
const back = require('../../assets/back.png');
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainrootTypes } from '../Mainroute';


type KiteRunnerProps = NativeStackScreenProps<mainrootTypes, 'KiteRunner'>;

const KiteRunner = ({route}:KiteRunnerProps) => {
    const navigation = useNavigation();
    const {cover,excerpt,name} = route.params;
    console.log("Cover in Kite runner : ",cover);
    console.log("excerpt in Kite runner : ",excerpt);
    
    return (
        <LinearGradient
            colors={['#ffffff', '#0d3b66']}
            style={{ flex: 1 }}
        >
            <View style={{
                padding: 20
            }}>
                
                
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{
                    flexDirection : 'row',
                    alignItems : 'center',

                }}>
                
                <Image source={back} style={{
                    width: 30,
                    height: 30
                }}></Image>
                <Text style={{
                   fontSize : 22,
                   fontWeight : '700',
                   color  : '#000000',
                   marginLeft : 10
                }}>
                    back
                </Text>
                </TouchableOpacity>
               
                {/*ruler */}
                <View style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#000000',
                    marginVertical: 8,
                    marginBottom: 2
                }}></View>
            </View>
            <View style={{
                flex: 1, alignItems: 'center'

            }}>
                <Text style={{
                    fontSize : 27,
                    fontWeight : '700',
                    color : '#5e548e',
                    marginVertical : 10

                }}>{name}</Text>
                <Image source={cover} style={{
                    width: 350,
                    borderWidth : 4,
                    borderColor : '#ffffff',
                    height : 400        
                }}></Image>
                <Text style={{
                    textAlign: 'justify',
                    padding: 20,
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#FFFFFFFF'

                }}>"{excerpt}"</Text>
            </View>
        </LinearGradient>
    )
}

export default KiteRunner