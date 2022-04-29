import React,{useState} from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground,Alert } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import {withdraw} from '../API/user-api'
import {AuthContext} from "../Stack/context";
import { Loading } from '../component/Loading'




export const EthereumScreen=()=>{
    const [address,setAddress]=useState()
    const [amount,SetAmount]=useState()
    const[loading,setLoading]=useState(false)
    const {auth,setAuth,user,setUser,notification,setNotification} = React.useContext(AuthContext)


    const HandleAmount=(val)=>{
        SetAmount(val)
    }

    const HandleAddress=(val)=>{
        setAddress(val)
    }

    const handleWithdraw =async ()=>{
        if(address === undefined || amount===undefined){
            Alert.alert("A field is empty")
        }else if(address.length<=25){
            Alert.alert("invalid wallet address")
        }
        else if(amount<10000){
            Alert.alert("Minimum Payout is 10,000")
        }else if(amount>99000){
            Alert.alert("Maximum Payout is 99,000")
        }
        else{
            setLoading(true)
            const res = await withdraw(user.username,{paymentType:'Ethereum',address:address,amount:amount})
            if(res.data.insufficient){
                Alert.alert("Insufficient Balance")
                setLoading(false)
            }
            else if(!res.data.insufficient){
                Alert.alert("Sent Successfully")
                setUser(res.data.user)
                setLoading(false)
            }
            console.log(res)
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
                <View style={styles.inputContainer}>
              <View style={styles.action}>
                    <TextInput placeholder="ETH WALLET ADDRESS" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleAddress(val)}}/>
                </View>

                <View style={styles.action}>
                    <TextInput placeholder="AMOUNT IN BTX" placeholderTextColor="white" keyboardType={'number-pad'} style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleAmount(val)}}/>
                </View>


                <View style={{alignItems:'center',marginTop:20,width:'100%'}}>
                    <TouchableOpacity activeOpacity={0.5} style={{borderColor:"white",borderRadius:12,borderWidth:1.5,marginTop:0,width:'100%',backgroundColor:'white',alignContent:'center',justifyContent:'center'}} onPress={()=>{handleWithdraw()}} >
                        
                        <View style={{alignItems:'center',justifyContent:'center',paddingVertical:10}}>
                            <FontAwesome name="paper-plane" size={30} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
              </View>
          </View>
          </ImageBackground>
          
          

        </View>
    )
}}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#282c34',
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
      paddingVertical:0,
      marginTop:30,
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
      textAlign:'center',
      fontSize:17,
      paddingVertical:10,
      borderRadius:10,
      borderWidth:0.1
  }
  })