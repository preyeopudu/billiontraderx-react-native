import React,{useState} from 'react'
import { View,Text,TextInput,StyleSheet,TouchableOpacity,StatusBar,Platform,Alert } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import {Loading} from '../component/Loading'
import {AuthContext} from '../Stack/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {signIn,getNotification,getAd} from '../API/auth-api'

   
export const SignInScreen=({navigation})=>{
    const [data,setData]=useState()
    const [show,SetShow]=useState(true)
    const [loading,setLoading]=useState()
    const [username,setUsername]=useState()
    const[password,setPassword]=useState()
    const {auth,setAuth,user,setUser,notification,setNotification,ad,setAd} = React.useContext(AuthContext)
  
    const HandleSignIn=async()=>{
        setLoading(true) 
        const ad=await getAd()
            if(ad.data){
                console.log(ad.data.ad)
                setAd(ad.data.ad)
            }
        const note=await getNotification()
                if(note.data){
                    setNotification(note.data.notifications)
                }
        if(username===undefined|| password === undefined){
          setLoading(false)
          Alert.alert('LOGIN ERROR','you skipped a field !')
          }
          else{
            const res=await signIn({username,password})
            if(res.data){
              await setUser(res.data.user)
              setAuth(true)
              
              console.log({user})   
            }
            else{
              setLoading(false)
              Alert.alert('LOGIN ERROR')
            }
        }
          }
        
  
        
        
  
    function HandleEmail(val){
        setUsername(val.trim())
    }
  
    function HandlePassword(val){
      setPassword(val)
  }
  

    function showPassword(){
        SetShow(!show)
      }
    
      if(loading===true){
        return(
          <Loading/>
        )
  }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                
                <View style={styles.action}>
                     <Feather name="mail" size={20} color="white"/>
                    <TextInput placeholder="Email" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>HandleEmail(val)}/>
                </View>

                <View style={[styles.action,{marginTop:40,marginBottom:30}]}>
                     <Feather name="lock" size={20} color="white"/>
                    <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={show} style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>HandlePassword(val)}/>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>showPassword()}>
                        {show?
                            <Feather name='eye-off' color="white" size={20}/>
                            :<Feather name='eye' color="white" size={20}/>
                        }
                
            </TouchableOpacity>
                </View>

                <View style={{alignItems:'center',marginTop:20}}>
                    <TouchableOpacity style={{marginTop:0}}  onPress={()=>{HandleSignIn()}}>
                        <View style={{borderRadius:12,width:'100%',backgroundColor:'white'}}>
                            <Text style={{color:'black',fontSize:18,paddingHorizontal:120,paddingVertical:10,fontWeight:"900",width:'100%'}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center',marginTop:20}}>
                    <TouchableOpacity style={{borderColor:"white",borderRadius:12,borderWidth:1.5,marginTop:0}}  onPress={()=>{navigation.goBack()}}>
                        <Text style={{color:'white',fontSize:18,paddingHorizontal:120,paddingVertical:10,fontWeight:"900",width:'100%'}}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate("ResetScreen")}}>
                <Text  style={{color:'white'}}>Forgot Password?</Text>
            </TouchableOpacity>
           

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#282c34',
        alignItems: 'center',
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    inputContainer:{
        paddingHorizontal:20,
        paddingVertical:30,
        marginTop:150
    },
    textInput:{
      flex:1,
      marginTop:-3,
      paddingLeft:10,
      color:"white"
    },
    action:{
      flexDirection:'row',
      marginTop:25,
      borderBottomWidth:1,
      borderBottomColor:'#f2f2f2',
      paddingBottom:5
    }
})