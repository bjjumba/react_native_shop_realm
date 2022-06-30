import { View, Text,StyleSheet,TextInput,FlatList,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import realm, { getAllBooks,addBook,deleteAllBooks } from "../Services/Database";
import { DataTable,Card,Title, Paragraph,Button } from 'react-native-paper';

export default function Search() {
  return (
       <View style={styles.container}>
   <FlatList
    data={getAllBooks()}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item, index}) => {
        return (
    <View style={{margin: 10}}>
    <Card>
     <Card.Content>
    <Paragraph>{item.title}</Paragraph>
    <Paragraph>PROGRESS(%)</Paragraph>
    <ProgressBar progress={item.pages/100} color='blue'/>
  </Card.Content>
   </Card>
   </View>
        )
    }} />
   </View> 
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
    },

    container1: {
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    txtInput:{
        flex:1,
        fontSize:20,
        margin:5,
        borderRadius:15,
        padding:5,
        backgroundColor:'#B8F7F1',
        color:"#DCC6C1",
        borderWidth:1
    },
    text:{
        color:'black'
    }
})