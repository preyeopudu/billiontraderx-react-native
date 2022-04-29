import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from '../screen/HomeScreen'
import {TransferScreen} from '../screen/TransferScreen'
import{ReferalScreen} from '../screen/ReferalScrreen'
import{Depositcreen} from  '../screen/DepositScreen'
import{CryptoScreen} from '../screen/CryptoScreen'
import{FiatScreen} from '../screen/FiatScreen'
import{TransactionScreen} from '../screen/TransactionScreen'
import{AboutScreen} from '../screen/AboutScreen'
import{TermScreen} from '../screen/Terms'
import{ContactScreen} from '../screen/ContactScreen'
import {SecretScreen} from "../screen/SecretScreen";
import {NotificationScreen} from '../screen/NotificationScreen'
import {AdScreen} from '../screen/AdScreen'

import {DrawerContent} from '../component/DrawerContent'
const HomeStack=createStackNavigator()
const Drawer = createDrawerNavigator();

export const  DrawerStack=()=> {
  return (
   
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
            <Drawer.Screen name="Home"  component={HomeStackScreen} />
            <Drawer.Screen name="Transfer" component={TransferScreen}/>
            <Drawer.Screen name="Referral" component={ReferalScreen}/>
            <Drawer.Screen name="Deposit" component={Depositcreen}/>
            <Drawer.Screen name="Fiat" component={FiatScreen}/>
            <Drawer.Screen name="Crypto" component={CryptoScreen}/>
            <Drawer.Screen name="Transactions" component={TransactionScreen}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
            <Drawer.Screen name="Term" component={TermScreen}/>
            <Drawer.Screen name="Contact" component={ContactScreen}/>
            <Drawer.Screen name="Secret" component={SecretScreen}/>
      </Drawer.Navigator>
   
  );
}

const HomeStackScreen = ()=>{
  return(
      <HomeStack.Navigator>
          <HomeStack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
          <HomeStack.Screen name='Notification' component={NotificationScreen}/>
          <HomeStack.Screen name='ADS_BONUS' component={AdScreen}/>
    </HomeStack.Navigator> 
  )
}

 