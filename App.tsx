import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
const book1 = require('./assets/book1.jpeg')
const book2 = require('./assets/book2.jpeg')
const arrow = require('./assets/right-arrow.png')

const App = () => {
  const sliderAnimation1 = useRef(new Animated.Value(300)).current;
  const sliderAnimation2 = useRef(new Animated.Value(-300)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState('');
  const fullText = "Your Ultimate\nReading Companion!...";

  
  useEffect(() => {
    
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        clearInterval(intervalId); 
      }
    }, 100);

    
    const animationTimeout = setTimeout(() => {
    
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

     
      Animated.parallel([
        Animated.timing(sliderAnimation1, {
          toValue: 0,
          duration: 3000,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.timing(sliderAnimation2, {
          toValue: 0,
          duration: 3000,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);

    return () => {
      clearInterval(intervalId); 
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.upperBox}>
        <Animated.Text style={styles.upperText}>{text}</Animated.Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 30 }}>
        <View style={{ width: 5, backgroundColor: '#a3c4f3', height: 110, marginLeft: 100, marginRight: 10 }}></View>
        <Animated.View style={{ transform: [{ translateX: sliderAnimation1 }] }}>
          <Image source={book1} style={styles.image1} />
        </Animated.View>
      </View>
      <View style={{ flexDirection: 'row-reverse' }}>
        <View style={{ width: 5, backgroundColor: '#a3c4f3', height: 110, marginRight: 100, marginLeft: 10 }}></View>
        <Animated.View style={{ transform: [{ translateX: sliderAnimation2 }] }}>
          <Image source={book2} style={styles.image1} />
        </Animated.View>
      </View>
      <View style={styles.bottom}>
        
        <Animated.View style={{ opacity: fadeAnimation }}>
          <Text style={styles.bottomText}>
            Books are gateways to new worlds, offering endless opportunities for
            learning, exploration, and imagination. They hold the power to transport
            readers to distant lands, and provide insight into the human experience. Whether fiction or nonfiction, books serve
            as valuable sources of knowledge, entertainment, and emotional connection.
          </Text>
        </Animated.View>
        <TouchableOpacity style={styles.button} onPress={()=>console.log("Hello")}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={styles.buttonText}>Get started</Text>
            <Image source={arrow} style={styles.arrow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#8338ec',
  },
  upperText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '900',
  },
  upperBox: {
    padding: 20,
    marginVertical: 10,
    height: 120,
  },
  image1: {
    width: 300,
    height: 150,
    borderRadius: 20,
    marginTop: -20,
    elevation: 5,
    borderWidth : 4,
    borderColor : '#fff'
  },
  bottom: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#bb3e03',
    width: 180,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 20,
    
  },
  arrow: {
    width: 25,
    height: 25,
    tintColor: "#fff"
  },
  bottomText: {
    color: '#063B1EFF',
    padding: 30,
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default App;
