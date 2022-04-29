import React,{useState} from 'react'
import { View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,StatusBar,Platform, Alert } from 'react-native'
import {Feather,FontAwesome,FontAwesome5} from '@expo/vector-icons'
import { Loading } from '../component/Loading'
import {reset} from '../API/auth-api'


export const ResetScreen=({navigation})=>{
    const [data,setData]=useState()
    const [show,setShow]=useState(true)
    const[loading,setLoading]=useState()

    const [username,setUsername]=useState()
    const[password,setPassword]=useState()
    const[secret,setSecret]=useState()

    function HandleShow(){
        setShow(!show)
      }

      function HandleEmail(val){
        setUsername(val.trim())
    }
  
    function HandlePassword(val){
      setPassword(val)
  }

  function HandleSecret(val){
    setSecret(val)
}

      const handleReset= async ()=>{
        
        setLoading(true)
        if(username==undefined||password==undefined||secret==undefined){
            setLoading(false)
            Alert.alert('Kindly fill all fields')
        }else{
            const result= await reset({username,password,secret})
            if(result.data){
                console.log(result.data)
                if(result.data.success==true){
                    setLoading(false)
                    Alert.alert("Reset was successful")
                }
                else{
                    setLoading(false)
                    Alert.alert("Failed to reset")
                }
            }
            
            else{
                setLoading(false)
                Alert.alert("Failed to reset")
            }
        }
        
    }
    
    if(loading===true){
        return(
          <Loading/>
        )
  }else{

    return(
        <ScrollView style={{backgroundColor:'#282c34',marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1,paddingHorizontal:30,marginTop:80}}>

                
            <View style={styles.action}>
                <Feather name="mail" size={20} color="white"/>
                <TextInput placeholder="Email" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>HandleEmail(val)}/>
          </View>

          <View style={styles.action}>
                <FontAwesome5 name="user-secret" size={20} color="white" />
                <TextInput placeholder="Secret" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>HandleSecret(val)}/>
          </View>

          <View style={styles.action}>
                <Feather name="lock" size={20} color="white" />
                <TextInput placeholder="New password" placeholderTextColor="white" style={styles.textInput} autoCapitalize='none' secureTextEntry={show} onChangeText={(val)=>HandlePassword(val)}/>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>HandleShow()}>
                {show?
                      <Feather name='eye-off' color="white" size={20}/>
                      :<Feather name='eye' color="white" size={20}/>
                }
                
            </TouchableOpacity>
          </View>

          <View style={{alignItems:'center',marginTop:20}}>
                    <TouchableOpacity style={{marginTop:0}}  onPress={()=>{handleReset()}}>
                        <View style={{borderRadius:12,width:'100%',backgroundColor:'white'}}>
                            <Text style={{color:'black',fontSize:18,paddingHorizontal:120,paddingVertical:10,fontWeight:"900",width:'100%'}}>Reset</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            <View style={{alignItems:'center',marginTop:20}}>
                    <TouchableOpacity style={{marginTop:0}}  onPress={()=>{navigation.goBack()}}>
                        <View style={{borderRadius:12,width:'100%',borderColor:'white',borderWidth:2}}>
                            <Text style={{color:'white',fontSize:18,paddingHorizontal:120,paddingVertical:10,fontWeight:"900",width:'100%'}}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>
          

            </View>
        </ScrollView>
    )
}}

const styles=StyleSheet.create({
    action:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
        marginTop:40
      },
      textInput:{
        flex:1,
        marginTop:-3,
        paddingLeft:10,
        color:"white"
      }
})