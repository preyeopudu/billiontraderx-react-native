import React from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground,ScrollView, Button } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import * as Linking from 'expo-linking'

export const Depositcreen=()=>{
    const Ruby=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/a9cab2b7-1cdd-455d-98d4-91f52dff6db4')
      }

      const Beryl=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/a337edcc-08c4-4569-9d4d-3b2c9ce40363')
      }

      const Onyx=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/53107e4f-3195-4217-b3eb-f02ae43c2475')
      } 

      const Sapphire=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/e0400fc4-8ff1-4f3e-ae1b-b007de1d981d')
      }

      const Agate=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/7176ef4b-a263-4e4b-bbf2-ad28c579e61e')
      }

      const first=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/6e9b65b9-8277-4f88-8ae8-5cb3e036f60e')
      }

      const second=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/f637fe45-b634-46ae-aeb0-48a16ff7f6e2')
      }

      const third=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/1c7b4eee-49cc-426e-8f3b-805cc52c6313')
      }

      const fourth=()=>{
        Linking.openURL('https://commerce.coinbase.com/checkout/0b3c83d8-583d-4bc7-a9da-d6459669d0ad')
      }
    return(
        <View   style={styles.container}>
          <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
          <View style={styles.child}>
              <ScrollView>
                  <View style={{marginHorizontal:40,marginTop:80}}>

                    
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase Ruby Stack' color='purple' onPress={()=>{Ruby()}}/>
                      </View>
              

                     
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase Beryl Stack' color='purple' onPress={()=>{Beryl()}}/>
                      </View>

                      <View style={{marginBottom:20}}>
                            <Button title='Purchase Onyx Stack' color='purple' onPress={()=>{Onyx()}}/>
                      </View>

                      
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase Sapphire Stack'  color='purple' onPress={()=>{Sapphire()}}/>
                      </View>


                      <View style={{marginBottom:20}}>
                            <Button title='Purchase Agate Stack' color='purple' onPress={()=>{Agate()}}/>
                      </View>

                      
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase 100,000 BTX' color='purple' onPress={()=>{first()}}/>
                      </View>

                 
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase 200,000 BTX' color='purple' onPress={()=>{second()}}/>
                      </View>

            
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase 500,000 BTX' color='purple' onPress={()=>{third()}}/>
                      </View>


                      
                      <View style={{marginBottom:20}}>
                            <Button title='Purchase 1,000,000 BTX' color='purple' onPress={()=>{fourth()}}/>
                      </View>
                        

                       
                  </View>
                  
              </ScrollView>

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