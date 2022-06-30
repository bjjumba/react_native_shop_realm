import { View, Text,StyleSheet,ActivityIndicator, TouchableOpacity,FlatList,TextInput} from 'react-native'
import {useState} from 'react'
import React from 'react'
import realm, { getAllBooks,addBook,deleteAllBooks,deleteOneBook } from "../Services/Database";
import { DataTable } from 'react-native-paper';

export default function Sales() {
  const [data,setData]=useState(getAllBooks())
  //hold item
 const [item,setItem]=useState('')
 //Quantity
 const [quantity,setQuantity]=useState('')
  const onPress=()=>{
    const num =parseInt(quantity)
    addBook(item,num)
    setData(getAllBooks())
  }
  //delete alll
  const onPress1=()=>{
   deleteAllBooks()
   setData(getAllBooks())
  }
  return (
    <View >
      <Text style={styles.text}>Sales</Text>
      <ActivityIndicator color="#0000ff" size="large"/>
      <Text style={styles.text}>Enter Item </Text>
      <TextInput style={styles.textInput}
      value={item}
      onChangeText={(newValue)=>{
        setItem(newValue);
      }}
      />
      <Text style={styles.text}>Quantity</Text>
      <TextInput style={styles.textInput}
        value={quantity}
        onChangeText={(newV)=>{
          setQuantity(newV);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}><Text>Add new</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPress1}><Text>Clear</Text></TouchableOpacity>
      {/*Drawing a table*/}
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>item</DataTable.Title>
        <DataTable.Title>Quantity</DataTable.Title>
        <DataTable.Title >product id</DataTable.Title>
        <DataTable.Title >Button</DataTable.Title>
      </DataTable.Header>
     
      <FlatList
    data={getAllBooks()}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item, index}) => {
        return (
          <DataTable.Row>
          <DataTable.Cell>{item.title}</DataTable.Cell>
          <DataTable.Cell>{item.pages}</DataTable.Cell>
          <DataTable.Cell>{item.edition===null?'null':item.edition}</DataTable.Cell>
          <DataTable.Cell>
            <TouchableOpacity style={{backgroundColor:'grey'}}>
            <Text>Delete</Text>
            </TouchableOpacity>
            </DataTable.Cell>
        </DataTable.Row>
        )
    }} />
    </DataTable>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        color: 'black'
    },
    button:{
      backgroundColor:'black',
      borderRadius:10,
      justifyContent:"flex-start",
      margin:10,
      width:150,
      alignItems:"center"
    },
    textInput:{
      borderRadius:10,
      backgroundColor:'grey'
    }
})