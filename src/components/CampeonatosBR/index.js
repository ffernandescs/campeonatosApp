import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Jogos from './jogos'
import Tabelas from './classificacao'
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function Brasileiro({navigation, route}) {
  const serie = route.params

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Tabelas'
        component={Tabelas}
        initialParams={{route: serie}}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" />
          )
        }}

      />
       <Tab.Screen
        name='Jogos'
        component={Jogos}
        initialParams={{route: serie}}
      />
    </Tab.Navigator>
  );
}
