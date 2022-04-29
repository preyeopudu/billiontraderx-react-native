import React from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {BitcoinScreen} from './Bitcoin'
import {EthereumScreen} from "./Ethereum";
const Tab=createMaterialTopTabNavigator()


export const CryptoScreen=()=>{
    return(

        <Tab.Navigator style={{marginTop:50}}>
            <Tab.Screen name="Bitcoin" component={BitcoinScreen}/>
            <Tab.Screen name="Ethereum" component={EthereumScreen}/>
        </Tab.Navigator>

        )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#282c34',
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height:'100%',
       
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        justifyContent: "center",
        flex:1
    },
    child:{
        flex:1,
        width:"100%",
        height:'100%',
        backgroundColor: 'rgba(0,0,0,0.85)',
       
    },
    inputContainer:{
      paddingHorizontal:20,
      paddingVertical:30,
      marginTop:150,
      width:'90%',
      justifyContent:'center'
  },
  action:{
    flexDirection:'row',
    marginTop:30,
    borderBottomWidth:1,
    borderBottomColor:'white',
    paddingBottom:5,
    marginBottom:15
  },
  textInput:{
      flex:1,
      marginTop:-3,
      paddingLeft:10,
      color:"white",
      textAlign:'center'
  }
  })