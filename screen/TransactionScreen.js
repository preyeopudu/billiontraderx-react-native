import React from 'react'
import { View,StyleSheet,Text,TextInput,StatusBar,Platform,TouchableOpacity,ImageBackground } from 'react-native'
import {Feather,FontAwesome} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'
import {AuthContext} from '../Stack/context'


export const TransactionScreen=()=>{
  const {auth,setAuth,user,setUser,notification,setNotification} = React.useContext(AuthContext)
  const DATA = user.receipt.reverse()

  const Item = ({ item, onPress, style }) => (
    <View style={{backgroundColor:'rgba(0,0,0,0.45)',borderRadius:10,marginHorizontal:10,marginTop:25}}>
        <View style={{paddingHorizontal:15}}>
            <Text style={{color:'white',marginTop:10,fontSize:16}}>{item.text}</Text>
            <Text style={{color:'white',marginTop:15,marginBottom:20,fontSize:13}}>{new Date(item.date).toDateString() }</Text>
        </View>
        
    </View>
    
);
    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item._id)}
           
          />
        );
      }


    return(
        <View   style={styles.container}>
          <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
          <View style={styles.child}>
              
                <FlatList  data={DATA} keyExtractor={(item,index)=>item._id} renderItem={renderItem} />

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