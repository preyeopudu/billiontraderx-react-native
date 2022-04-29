import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {SignInScreen} from '../screen/SignInScreen'
import {SignUpScreen} from '../screen/SignUpScreen'
import {SplashScreen} from '../screen/SplashScreen'
import {ResetScreen} from '../screen/ResetScreen'

const RootStack = createStackNavigator()



export const RootStackScreen=({navigation})=>(
    <RootStack.Navigator>
        <RootStack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen options={{headerShown:false}} name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen options={{headerShown:false}} name="ResetScreen" component={ResetScreen}/>
        <RootStack.Screen options={{headerShown:false}} name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
)