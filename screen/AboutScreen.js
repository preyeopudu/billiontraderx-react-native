import React from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

export const AboutScreen=()=>{
    return(
        <View   style={styles.container}>
          <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
          <View style={styles.child}>
            <ScrollView>
          <Text style={{color:'white',fontSize:25,marginTop:20,marginBottom:10}}>What is Billion Traderx?</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Billion Traderx is a crypto syndicate set up solely on bitcore(BTX) cryptocurrency commercialism, which also provides an opportunity of dividend for low income earners and proficient investors.</Text>

                <Text style={{color:'white',fontSize:25,marginBottom:10}}>About what we trade?</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Billion Traderx majorly trade Bitcore (BTX) which is a cyptocurrency created in April 2017 by developers of Bitsend. Bitcore is  the first known cryptocurrency to use the hybrid fork method to distribute BTX to Bitcoin holders thereby gaining traction on the blockchain technology.</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Bitcore can handle 48 million transactions per day, which is about 17.6 billion transaction per year.Bitcore(BTX) is currently worth 0.200789USD with $3.60M and 785 ranked on the coin market capitalization.</Text>

                <Text style={{color:'white',fontSize:25,marginBottom:10}}>How you can be part of the Billion Traderx?</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>You can be part of the Billion Traderx by securing a position in our investment stacks and obtain profits within a speculated period while your chosen stack is matured.</Text>

                
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Our stacks are:</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Ruby stack - $10.7 ~ 5,000 NGN – 80% ROI (#9,000) in 12days [1000btx ref. bonus]</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Beryl stack - $21.41 ~ 10,000 NGN – 80% ROI (#18,000) in 15days [1500btx ref. bonus]</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Onyx stack - $42.82 ~ 20,000 NGN – 95% ROI (#39,000) in 30days [2000btx ref. bonus]</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Sapphire - $107.07 ~ 50,000 NGN – 95% ROI (#97,500) in 30days [3000btx ref. bonus]</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Topaz - $160.59 ~ 75,000 NGN – 95% ROI (#142,500) in 30days [5000btx ref. bonus]</Text>
            
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Conversion rate ~ 467btx approx. 1 USD</Text>


                <Text style={{color:'white',fontSize:25,marginBottom:10}}>How do i purchase stacks & place withdrawal?</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>Billionaire Traderx receives payment for stacks solely in Bitcoin (BTC) & Etherum (ETH).  No payment is received in fiat (local currencies). All payment is received in crytocurrency.</Text>
                <Text style={{color:'white',fontSize:15,marginBottom:10}}>All matured stacks are withdrawable via  Bitcore (BTX), Bitcoin (BTC), Etherum (ETH) or INTERNAL TRANSFER of  BTX as the case maybe. Fiat (local currencies) will also be included for easy transaction for folks.</Text>
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