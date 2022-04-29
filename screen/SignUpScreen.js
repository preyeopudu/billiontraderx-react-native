import React,{useState} from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,Alert } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Loading} from '../component/Loading'
import {AuthContext} from '../Stack/context'
import {signUp,check,otp,getNotification,getAd} from '../API/auth-api'
export const SignUpScreen=({navigation})=>{

    const[stage,setStage]=useState(0)
    const [data,setData]=useState()
    const [loading,setLoading]=useState()
    const [name,setName]=useState()
    const [username,setUsername]=useState()
    const[referee,setReferer]=useState()
    const[password,setPassword]=useState()
    const[code,setCode]=useState()

    const {auth,setAuth,user,setUser,notification,setNotification,ad,setAd} = React.useContext(AuthContext)

  function showPassword(){
    SetShow(!show)
  }

  function HandleEmail(val){
    setUsername(val.trim())
  }

  function HandleName(val){
    setName(val.trim())
  }

  function HandleReferer(val){
    setReferer(val.trim())
  }

  function HandlePassword(val){
    setPassword(val)
  }

  function HandleCode(val){
    setCode(val)
  }



 const HandleSignUp =async()=>{
     

    const user=await AsyncStorage.getItem('user')
    const User=JSON.parse(user)
    console.log(user)
    const res= await signUp(User)
    const ad=await getAd()
            if(ad.data){
                console.log(ad.data.ad)
                setAd(ad.data.ad)
            }
    const note=await getNotification()
    if(note.data){
        setNotification(note.data.notifications)
    }

    console.log(res.data)
    if(res.data){
        if(res.data.auth===true){
            
            await setUser(res.data.user)
            setAuth(true)
        }else if(res.data.err){
            setLoading(false)
            Alert.alert(res.data.err.message)
        }
    }
 }


    const sendOtp=async()=>{
        setLoading(true)
        if(username===undefined|| password === undefined || name===undefined){
            Alert.alert('Error','ooops you skipped an important field!')
        }else{
            await AsyncStorage.setItem(
                'user',JSON.stringify({username:username,password:password,refree:referee,name:name})
            )
            const res =await otp({username:username})
            
            if(res.data.sent==false){
                Alert.alert('Failed',"for some reasons we are unable to forward your Signup code")
                setLoading(false)
            }
            else{
                Alert.alert('kindly check your box')
                setLoading(false)
                setStage(1)
            }
            
            ///send post requet to server for OTP code 

        } 
    }

    const checkOtp=async()=>{
        const res=await check({code:code})
        console.log(res.data.activated)
        // setLoading(true)
        if(res.data.activated==true){
            setLoading(false)
            setStage(2)
            Alert.alert('Here at last!',"A big congrats on making it here")
        }
        else if(res.data.activated==false){
            setLoading(false)
            Alert.alert('Invalid Code','Check your email and try again')
        }
    }
    if(loading==true){
        return(
            <Loading/>
        )
    }
    else if(stage==0){
    return(
        <View style={styles.container}>
            
            <View style={styles.inputContainer}>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color="white"/>
                    <TextInput placeholder="First Name" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleName(val)}}/>
                </View>

                <View style={styles.action}>
                     <Feather name="mail" size={20} color="white"/>
                    <TextInput placeholder="Valid Email" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleEmail(val)}}/>
                </View>

                <View style={styles.action}>
                     <Feather name="lock" size={20} color="white"/>
                    <TextInput placeholder="Password" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandlePassword(val)}} secureTextEntry={true}/>
                </View>

                <View style={styles.action}>
                    <FontAwesome name="users" size={20} color="white"/>
                    <TextInput placeholder="Referal (optional)" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleReferer(val)}}/>
                </View>


                <View style={{alignItems:'center',marginTop:20,width:'100%'}}>
                    <TouchableOpacity style={{borderColor:"white",borderRadius:12,borderWidth:1.5,marginTop:0,width:'100%',backgroundColor:'white'}}  onPress={()=>{sendOtp()}}>
                        <Text style={{color:'black',fontSize:18,paddingHorizontal:120,paddingVertical:10,fontWeight:"900",width:'100%',textAlign:'center'}}>OTP</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center',marginTop:20,width:'100%'}}>
                    <TouchableOpacity style={{borderColor:"white",borderRadius:12,borderWidth:1.5,marginTop:0,width:'100%'}}  onPress={()=>{navigation.goBack()}}>
                        <Text style={{color:'white',fontSize:18,paddingHorizontal:120,paddingVertical:10,fontWeight:"900",width:'100%',textAlign:'center'}}>Back</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )}
    else if(stage==1){
        return(
        <View style={{flex: 1,justifyContent:'center',backgroundColor: '#282c34',alignItems: 'center',marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                <View style={styles.inputContainer}>
                <View style={styles.action}>
                    <TextInput placeholder="Login code"  placeholderTextColor="white" style={{flex:1,fontSize:25,marginTop:-3,paddingLeft:10,color:"white",textAlign:'center'}} autoCapitalize='none' onChangeText={(val)=>{HandleCode(val)}}/>
                    
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{checkOtp()}}>
                        <View>
                            <Text style={{textAlign:'center',color:'white',fontSize:25,marginTop:20}}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
        </View>
        )
    }

    else if(stage==2){
        return(
        <View style={{flex: 1,justifyContent:'center',backgroundColor: '#282c34',alignItems: 'center',marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                <View style={styles.inputContainer}>
                <View>
                    <TouchableOpacity onPress={()=>{HandleSignUp()}}>
                        <View>
                            <Text style={{textAlign:'center',color:'white',fontSize:25,marginTop:20}}>Register</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
        </View>
        )
    }
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
        marginTop:20,
        width:'90%'
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
      borderBottomColor:'white',
      paddingBottom:5,
      marginBottom:5
    }
})