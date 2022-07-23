import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Container, Title, List } from './styles';
import Loading from '../../components/Loading';
import { Api } from '../../Services/Api';

export default function Espanhol({navigation}) {

  const [quote, setQuote] = useState([])
  const [loading, setLoading] = useState(true)

  async function ApiCampeonatos() {
    Api({
      "method": "GET",
      "url": "/leagues",
      "params": {code: 'ES', season: '2022'}
  
    })
      .then((response) => {
        const data = response.data.response
        setLoading(false)
        setQuote(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    ApiCampeonatos()
  }, [])

  if(loading) {
    return (
      <Loading/>
      )
  }

  return (
    <Container>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Brasileiro')} >
        <Title>Campeonatos</Title>

      </TouchableOpacity>
      <List>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          {
            quote.map((item, key) => {
              return (
                <TouchableOpacity
                onPress={() => navigation.navigate('Classificacao', item.league)}
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
                    resizeMode: 'cover',
                    height: 35,
                    width: 35,
                    marginRight: 20
                  }}
                  source={{uri: item.league.logo}} />
                  <Title>{item.league.name}</Title>
                </TouchableOpacity>
              )
            })
            }
          </View>
        </List>
    </Container>
  );
}
