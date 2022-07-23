import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
      }}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <Text>Carregando...</Text>    
      </View>
      )
}

