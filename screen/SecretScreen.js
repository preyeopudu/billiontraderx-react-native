import React,{useState} from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground,Alert } from 'react-native'
import {Feather,FontAwesome,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
import {AuthContext} from '../Stack/context'
import { Loading } from '../component/Loading'
import {userSecret} from '../API/user-api'

export const SecretScreen=()=>{
    const[secretuser,setSecret]=useState()
    const[loading,setLoading]=useState(false)
    const {auth,setAuth,user,setUser,notification,setNotification} = React.useContext(AuthContext)

    const HandleSubmit=async ()=>{
        setLoading(true)
        if(secretuser==null){
          setLoading(false)
          Alert.alert("Error","No value entered")
        }
        else{
          const res=await userSecret(user.username,{secretuser:secretuser})
          if(res.data){
            setUser(res.data.user)
            setLoading(false)
          }
        }
      }

      let display

      if(user.secretCode==null){
        display=<Text style={{color:'white',fontSize:17,marginVertical:10,fontWeight:'900'}}>No secret yet</Text>
      }else{
        display=<Text style={{color:'white',fontSize:17,marginVertical:10,fontWeight:'900'}}>your secret is {user.secretCode}</Text>
      }
    
      const HandleSecret=(val)=>{
          setSecret(val)
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
              
              <View style={{backgroundColor:'rgba(0,0,0,0.9)',marginVertical:50,marginHorizontal:10,borderRadius:10}}>
                  
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',marginTop:15,marginBottom:15}}>
                            <FontAwesome name="eye-slash" size={44} color="white" />
                            {display}
                    </View>

                  
              </View>


              <View style={{backgroundColor:'rgba(0,0,0,0.9)',marginVertical:30,marginHorizontal:10,borderRadius:20}}>
                  <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center',paddingTop:30,paddingBottom:20,paddingHorizontal:20}}>Set your secret below</Text>
                  <View style={styles.action}>
                    <TextInput placeholder="Secret Code" placeholderTextColor="white"  style={styles.textInput} autoCapitalize='none' onChangeText={(val)=>{HandleSecret(val)}}/>
                </View>

                <View style={{marginVertical:15,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{HandleSubmit()}}>
                        <View style={{backgroundColor:'white',width:'100%',borderRadius:5}}>
                            <Text style={{color:'black',textAlign:'center',fontSize:25,paddingVertical:5,paddingHorizontal:10}}>Set Secret</Text>
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
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'white',
    paddingBottom:5,
    marginBottom:15,
    marginHorizontal:30
  },
  textInput:{
      flex:1,
      marginTop:10,
      paddingLeft:10,
      color:"white",
      textAlign:'center',
      fontSize:20
  }
  })