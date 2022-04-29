import React from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground } from 'react-native'
import {Feather,FontAwesome,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
import * as Linking from 'expo-linking'


export const ContactScreen=()=>{
    const join=()=>{
        Linking.openURL('https://t.me/billiontraderx')
      }
     
       const messager=()=>{
         Linking.openURL('mailto: billiontraderx@gmail.com')
       }
    return(
        <View   style={styles.container}>
          <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
          <View style={styles.child}>
              
              <View style={{backgroundColor:'rgba(0,0,0,0.45)',marginVertical:50,marginHorizontal:10,borderRadius:30}}>
                  <Text style={{color:'white',fontSize:20,textAlign:'center',paddingTop:30,paddingBottom:10,paddingHorizontal:10}}>Join the community of Billion TraderX investors On our telegram page</Text>
                  <TouchableOpacity onPress={()=>{join()}}>
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',marginTop:10,marginBottom:20}}>
                        <FontAwesome5 name="telegram-plane" size={40} color="white" />
                    </View>
                    </TouchableOpacity>
              </View>


              <View style={{backgroundColor:'rgba(0,0,0,0.5)',marginVertical:30,marginHorizontal:10,borderRadius:30}}>
                  <Text style={{color:'white',fontSize:25,textAlign:'center',paddingTop:30,paddingBottom:10,paddingHorizontal:10}}>Contact us on our Gmail account</Text>
                    <TouchableOpacity onPress={()=>{messager()}}>
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',marginTop:10,marginBottom:20}}>
                        <MaterialCommunityIcons name="gmail" size={44} color="white" />
                    </View>
                    </TouchableOpacity>
              </View>

          </View>
          </ImageBackground>
          
          

        </View>
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