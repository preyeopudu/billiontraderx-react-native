import React,{useState} from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground, Alert } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import {transfer} from '../API/user-api'
import {AuthContext} from "../Stack/context";
import { Loading } from '../component/Loading'

export const TransferScreen=()=>{
    const [amount,SetAmount]=useState()
    const [receiver,setReceiver]=useState()
    const[loading,setLoading]=useState(false)
    const {auth,setAuth,user,setUser,notification,setNotification} = React.useContext(AuthContext)

    const HandleSubmit=async ()=>{
        setLoading(true)
        if(receiver==null||amount==null){
          setLoading(false)
          Alert.alert("Error","No value entered")
        }
        else{
          const res=await transfer(user.username,{user:receiver,amount})
          if(res.data.userFalse){
            setLoading(false)
            Alert.alert("User does not exist")
        }
        else if(res.data.success){
            setLoading(false)
            Alert.alert("Sent Successfully")
            setUser(res.data.user)
        }else if(!res.data.success){
            setLoading(false)
            Alert.alert("Insufficient balance")
        }
        else{
            setLoading(false)
            Alert.alert("Can't transfer")
        }
        }
      }


    const HandleAmount=(val)=>{
        SetAmount(val)
    }

    const HandleReceiver=(val)=>{
        setReceiver(val)
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
                    <TextInput placeholder="RECIPIENTS MAIL" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleReceiver(val)}}/>
                </View>

                <View style={styles.action}>
                    <TextInput placeholder="AMOUNT IN BTX" placeholderTextColor="white" keyboardType={'number-pad'} style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleAmount(val)}}/>
                </View>


                <View style={{alignItems:'center',marginTop:20,width:'100%'}}>
                    <TouchableOpacity activeOpacity={0.5} style={{borderColor:"white",borderRadius:12,borderWidth:1.5,marginTop:0,width:'100%',backgroundColor:'white',alignContent:'center',justifyContent:'center'}} onPress={HandleSubmit}>
                        
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
}
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
  borderBottomWidth:0.9,
  borderBottomColor:'white',
  paddingBottom:5,
  marginBottom:15,
  paddingTop:10,
  borderRadius:10
},
textInput:{
    flex:1,
    marginTop:-3,
    paddingLeft:10,
    color:"white",
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    paddingVertical:10
}
})