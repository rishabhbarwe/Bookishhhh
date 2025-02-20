import { View, Text,TouchableOpacity,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const back = require('.././assets/back.png');
const BottomCart = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
        colors={['#ffffff','#042230FF']}
        locations={[0.05, 1]}
        style={{flex : 1}}
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
            <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'
            
        }}>
         
          <Text style={{fontSize :25, fontWeight : '900',color : '#000000'}}>Cart</Text>
        </View>
        </LinearGradient>
  )
}

export default BottomCart