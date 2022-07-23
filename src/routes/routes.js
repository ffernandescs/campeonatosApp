import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../page/Home';
import Brasileiro from '../page/Brasileiro';
import Espanhol from '../page/Espanhol';
import Classificacao from '../components/CampeonatosBR/'
import { Api } from '../Services/Api';

const Stack = createNativeStackNavigator();

function Routes({navigation, route}) {
  const serie = route
  useEffect(() => {
    console.log(serie)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Campeonatoss" component={Home} />
        <Stack.Screen name="Brasileiro" component={Brasileiro} />
        <Stack.Screen name="Espanhol" component={Espanhol} />
        <Stack.Screen name="Classificacao" component={Classificacao} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default Routes;
