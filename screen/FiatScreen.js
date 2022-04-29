import React,{useState} from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground,ScrollView,TouchableNativeFeedback,Alert } from 'react-native'
import {Feather,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'
import {fiat} from '../API/user-api'
import {AuthContext} from "../Stack/context";
import { Loading } from '../component/Loading'



export const FiatScreen=()=>{
    const [accountName,setAccountName]=useState()
    const [accountNumber,setAccountNumber]=useState()
    const [bank,setBank]=useState()
    const [amount,SetAmount]=useState()
    const[loading,setLoading]=useState(false)
    const {auth,setAuth,user,setUser,notification,setNotification} = React.useContext(AuthContext)
    const HandleWithdraw=async()=>{

        if(amount==undefined||bank==undefined||accountName==undefined||accountNumber==undefined){
            Alert.alert('Invalid credentials',"Fill the form properly.")
        }
        else if(amount<10000){Alert.alert('Minimum Payout is 10,000')}
        else if(amount>99000){
            Alert.alert("Maximum Payout is 99,000")
        }
        else{
        setLoading(true)
        const res=await fiat(user.username,{accountNumber:accountNumber,accountName:accountName,bank:bank,amount:amount})
        console.log(res)
        if(!res.data.insufficient){
            setUser(res.data.user)
            Alert.alert("Succesful","Payment has been added to queue")
            setLoading(false)
        }else if(res.data.insufficient){
            Alert.alert("Insufficient balance","Failed to add to queue")
            setLoading(false)
        }
        }  
    }

    if(loading==true){
        return(
            <Loading/>
        )
    }else{

    return(
        <View   style={styles.container}>
          <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
          <View style={styles.child}>
              
          <ScrollView style={{flex:1}} >
                    <View style={{alignItems:'center',paddingVertical:10,paddingHorizontal:30,flex:1,marginTop:100}}>
                        
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="account-cash-outline" size={30} color="white" />
                        <TextInput placeholder="Account Name" style={styles.textInput} onChangeText={(val)=>{setAccountName(val)}} placeholderTextColor="white"/>
                    </View>
    
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="numeric-10-box" size={30} color="white" />
                        <TextInput placeholder="Account Number" style={styles.textInput} onChangeText={(val)=>{setAccountNumber(val)}} placeholderTextColor="white"/>
                    </View>
    
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="bank-transfer-out" size={30} color="white" />
                        <TextInput placeholder="Bank Name" style={styles.textInput} onChangeText={(val)=>{setBank(val)}} placeholderTextColor="white"/>
                    </View>
    
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="credit-card-check-outline" size={30} color="white" />
                        <TextInput placeholder="Amount" style={styles.textInput}  keyboardType="decimal-pad" onChangeText={(val)=>{SetAmount(val)}} placeholderTextColor="white"/>
                    </View>
                    
                        <TouchableNativeFeedback onPress={()=>HandleWithdraw()} >
                            <View style={{backgroundColor:'white',marginTop:30,paddingVertical:10,paddingHorizontal:10,borderRadius:15,elevation:5}} placeholderTextColor="white">
                                <Text style={{fontSize:15}}>Withdraw</Text>
                             </View>
                    
                        </TouchableNativeFeedback>
    
                        
                    </View>      
            </ScrollView>
          </View>
          </ImageBackground>
          
          

        </View>
    )
}}


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
    borderBottomWidth:0.4,
    borderBottomColor:'white',
    paddingBottom:5,
    marginBottom:15
  },
  textInput:{
      flex:1,
      marginTop:-3,
      paddingLeft:10,
      fontSize:20,
      color:'white',
      paddingVertical:5,
      borderRadius:5
  }
  })