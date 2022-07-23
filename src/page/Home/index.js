import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, Image, ActivityIndicator } from 'react-native';
import { Container, Title, List } from './styles';
import Loading from '../../components/Loading';

export default function Campeonatos({navigation}) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])



  if(loading) {
    return (
      <Loading/>
      )
  }

  return (
    <Container>
      <List>
        <TouchableOpacity
          onPress={() => navigation.navigate('Brasileiro')}
          style={{
            flexDirection: 'row',
            alignItems:'center',
            padding: 10,
            borderBottomColor: '#D6D6D6',
            borderStyle: 'solid',
            borderBottomWidth: 1
          }}
          >
          <Image
            style={{
              width: 35,
              height: 35,
            }}
            source={require('../../assets/image/br.jpg')}/>
            <Title>Brasileiro</Title>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Espanhol')}
          style={{
            flexDirection: 'row',
            alignItems:'center',
            padding: 10,
            borderBottomColor: '#000',
            borderStyle: 'solid',
            borderBottomWidth: 1
          }}
          >
          <Image
            style={{
              width: 35,
              height: 35,
            }}
            source={require('../../assets/image/Espanhol.jpg')}/>
            <Title>Espanhol</Title>
          </TouchableOpacity>
        </List>
    </Container>
  );
}
