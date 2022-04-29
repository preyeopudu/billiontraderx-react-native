import React,{useState} from 'react'
import { View,StyleSheet,RefreshControl,Text,ScrollView,TextInput,StatusBar,Platform,TouchableOpacity,Dimensions,ImageBackground } from 'react-native'
import {Feather,FontAwesome,Ionicons,MaterialCommunityIcons,EvilIcons} from '@expo/vector-icons'
import {Graph} from '../component/Graph'
import {Wallet} from '../component/Wallet'
import {Shared} from '../component/Share'
import {Invest} from '../component/Invest'
import {Plans} from '../component/Plan'
import {AuthContext} from '../Stack/context'
import {notify,getUser} from '../API/user-api'
import { getAd } from '../API/auth-api'

export const HomeScreen=({navigation})=>{
    const[loading,setLoading]=useState(false)
    const[refreshing,setRefreshing]=useState()
    const {auth,setAuth,user,setUser,notification,setNotification,ad,setAd} = React.useContext(AuthContext)
    
    const notified=async()=>{
        const res = await notify(user.username).catch((err)=>{return{err}})
        console.log(res)
        setUser(res.data)
        navigation.navigate('Notification')
}
const onRefresh=async()=>{
    const res=await getUser(user.username)
    const adres=await getAd()
    if(adres.data){
        setAd(adres.data.ad)
    }

    if(res.data){
      setUser(res.data.user)
      console.log(res.data.user.people)
      setRefreshing(false)
    }
}

    let bell=<MaterialCommunityIcons name="bell" size={35} color="white" />

    if(user.notice&&user.notice==true){
        bell=<MaterialCommunityIcons name="bell-alert" size={35} color="white" />
    }
        
    return(
        
        <View   style={styles.container}>
            
            <ImageBackground  source={require('../image/bitcore.png')} style={styles.image}>
                <ScrollView style={styles.child} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>} showsVerticalScrollIndicator={false}>

                    
                    
                    <View style={{flexDirection:'row',flex:1,marginTop:Platform.OS === 'android' ? 25 : 70}}>
                        <TouchableOpacity style={{position:'absolute',right:20}} onPress={()=>{notified()}}>
                        <View style={{marginLeft:5}}>
                        {bell}
                        </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{marginTop:40}}>

                        <Text style={{color:'white',fontSize:22,marginLeft:20}}>Hello {user.name},</Text>
                        <Wallet onPress={()=>{navigation.navigate('ADS_BONUS')}}/>
                    </View>

                   
                    
                    <View style={{alignItems:'center'}}>
                        <Shared/>
                    </View>
                    
                    <View style={{alignItems:'center',marginTop:20}}>
                         <Invest/>
                    </View>

                   
                    <View style={{alignItems:'center'}}>
                        <Plans/>
                    </View>


                </ScrollView>
            </ImageBackground>
        
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#282c34',
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height:'100%'
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
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
})