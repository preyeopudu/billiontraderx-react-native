import React from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground,FlatList } from 'react-native'
import {Feather,FontAwesome,Ionicons,MaterialCommunityIcons,EvilIcons} from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import {AuthContext} from '../Stack/context'
import Clipboard from 'expo-clipboard'


export const ReferalScreen=()=>{
    const {auth,setAuth,user,setUser,notification,setNotification} = React.useContext(AuthContext)
    
    const copyToClipboard = () => {
      Clipboard.setString(user.username);
    }

    const DATA = user.people
    console.log(`${typeof(DATA)} of peoples`)

    const Item = ({ item, onPress, style }) => (
      <Text style={{color:'white',marginVertical:10,fontSize:20,textAlign:'center'}}>{item.username}</Text>
  )




    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item._id)} 
           
          />
        );
      };


    return(
        <View   style={styles.container}>
          <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
          <View style={styles.child}>
              <View style={{backgroundColor:'rgba(0,0,0,0.45)',borderRadius:10,marginHorizontal:10,marginTop:25}}>
                  <Text style={{color:'white',textAlign:'center',fontSize:23,paddingVertical:20}}>{user.username}</Text>

                  <View style={{alignItems:'center',paddingBottom:20}}>
                      <TouchableOpacity onPress={()=>copyToClipboard()}>
                            <Ionicons name="ios-copy" size={24} color="white" />
                      </TouchableOpacity>
                  </View>
              </View>

              <View style={{backgroundColor:'rgba(0,0,0,0.45)',borderRadius:10,marginHorizontal:10,marginTop:25}}>
              <Text style={{color:'white',textAlign:'center',fontSize:20,marginBottom:20,marginTop:20}}>{user.referalAmount} BTX</Text>
                  <Text style={{color:'white',textAlign:'center',fontSize:20,marginBottom:20}}>from {user.referal} refferals</Text>
              </View>

              <View style={{backgroundColor:'rgba(0,0,0,0.45)',borderRadius:10,marginHorizontal:10,marginTop:25}}>
                  <FlatList 
                    data={DATA} 
                    keyExtractor={(item,index)=>item._id}
                    renderItem={renderItem} />
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