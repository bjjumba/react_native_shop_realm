import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import Home from './Screens/Home.js'
import Search from './Screens/Search.js'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Sales from './Screens/Sales.js'

const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <Text>Hello</Text>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="Home" component={Search}/>
        <Stack.Screen name="Sales" component={Sales}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
  }
})