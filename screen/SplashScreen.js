import React from 'react';
import { StyleSheet, Text, View,Image,Platform,TouchableOpacity,StatusBar } from 'react-native';

export  const SplashScreen=({navigation})=>{
  return (
    <View style={styles.container}>
      <Image source={require('../image/bitcore3.png')} resizeMode="stretch" style={{width:120,height:120,marginBottom:20,marginTop:'40%'}}/>
      <Text style={{fontSize:40,color:'white'}}>Billion traderx</Text>

      <View style={styles.buttonContainer}>

      <View style={{width:"50%"}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            </View>
         </TouchableOpacity>
      </View>
        
      

      <View style={{width:"50%"}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('SignUpScreen')}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
        
      


    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  buttonContainer:{
    flexDirection:'row',
    width:'75%',
    justifyContent:'center',
    marginTop:40
  },
  button:{
    
    backgroundColor:"#282c34",
    elevation:20,
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.26
  },
  buttonText:{
    fontSize:25,
    color:'white',
    padding:10
  }
});
