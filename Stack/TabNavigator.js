import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {BitcoinScreen} from '../screen/Bitcoin'
const Tab=createMaterialTopTabNavigator()

export const TopTabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Bitcoin" component={BitcoinScreen}/>

        </Tab.Navigator>
    )
}