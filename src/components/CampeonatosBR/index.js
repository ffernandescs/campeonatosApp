import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Jogos from './jogos'
import Tabelas from './classificacao'

const Tab = createBottomTabNavigator();

export default function Brasileiro({navigation, route}) {
  const serie = route.params

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Tabelas'
        component={Tabelas}
        initialParams={{route: serie}}
      />
       <Tab.Screen
        name='Jogos'
        component={Jogos}
        initialParams={{route: serie}}
      />
    </Tab.Navigator>
  );
}
