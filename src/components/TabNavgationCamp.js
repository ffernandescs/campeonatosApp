import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function TabNavigationCamp() {

  const Tab = createBottomTabNavigator()


  return (
    <Tab.Navigator>
      <Tab.Screen 
        options={{headerShown: false}}
        name='Tabelas' 
        component={Classificacao}/>
      <Tab.Screen 
        options={{headerShown: false}}
        name='Jogos' 
        component={Jogos}/>
    </Tab.Navigator>
  )
}