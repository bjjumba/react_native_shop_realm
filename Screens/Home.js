import { View, Text,StyleSheet,Image,TouchableOpacity,Dimensions, Pressable } from 'react-native'
import React from 'react'
import stock from '../images/stock.png'
import addItem from '../images/cart2.png'
import Search from './Search.js'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Home=({navigation})=> {
    const onPressA=()=>{
        navigation.navigate("Home")
    }
    const onPressB=()=>{
        navigation.navigate("Sales")
    }
  return (
    <View style={styles.page}>
       <Pressable onPress={onPressA}><Image style={styles.image} source={addItem}/></Pressable>
       <TouchableOpacity onPress={onPressB}><Image style={styles.image} source={stock}/></TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    page:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        textAlign: 'center',
        fontSize:22
    },
    image:{
        resizeMode:'center',
        borderRadius:10,
        margin:10
    }
})
export default Home;