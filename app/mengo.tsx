import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useRef, useEffect } from 'react';
import { router } from 'expo-router';




export default function Flamengo() {

    const floatAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: -30,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 30,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: -30,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [floatAnim]);
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle={'light-content'}/>
      <LinearGradient
        // Background Linear Gradient
        colors={['#cf0534', '#cf0534','#000']}
        locations={[0, 0.2, 1]}
        style={styles.background}
      />
      <Animated.Image source={require('../assets/mengo.png')} style={[styles.image, {transform:[{ translateY: floatAnim }]}]} />
      <View style={styles.ViewButton}>
        <TouchableOpacity style={styles.flags} onPress={() => router.replace('./')}>
          <Text style={styles.text}>Fluminense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flags} onPress={() => router.replace('/vasco')}>
          <Text style={styles.text}>Vasco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flags} onPress={() => router.replace('/mengo')}>
          <Text style={styles.text}>Flamengo</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -100,
    height: '120%',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  image:{
    width: 300,
    height: 300,
  },
  ViewButton:{
    position:'absolute', 
    bottom:10,  
    width:'100%', 
    flexDirection:'row', 
    justifyContent:'space-around', 
    padding: 10
  },
  flags:{
    backgroundColor:'#fff',
    padding: 10,
    borderRadius: 5,
  }
});

