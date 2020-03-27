import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator()
import Incidents from './pages/incidents'
import Detals  from './pages/details'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="incidents" component={Incidents}/>
                <AppStack.Screen name="detals" component={Detals}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}