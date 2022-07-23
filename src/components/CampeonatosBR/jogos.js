import React, { useEffect, useState} from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Container, Title } from './styles';
import Loading from '../Loading';
import { Api } from '../../Services/Api';

export default function Jogos({ navigation, route }) {
  const serie = route.params

  let dateJogos = new Date()
  let dia = String(dateJogos.getDate()).padStart(2, '0');
  let mes = String(dateJogos.getMonth() + 1).padStart(2, '0');
  let ano = dateJogos.getFullYear()

  let dataAtual = ano + '-' + mes + '-' + dia

  const [quote, setQuote] = useState([])
  const [loading, setLoading] = useState(true)


  async function ApiCampeonatos() {
    Api({
      "method": "GET",
      "url": "/fixtures",
      "params": {
        date: `${dataAtual}`,
        league: `${serie.route.id}`,
        season: '2022',

      },
    })
      .then((response) => {
        const data = response.data.response
        setLoading(false)
        setQuote(data);
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
      <ScrollView>
        <Title>Olda</Title>
        {
          quote.map((item, key) => {
            return (
              <TouchableOpacity
                key={item.fixture.venue.name}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  paddingBottom: 10,
                  paddingTop: 10,
                  borderColor: '#D6D6D6',
                  borderStyle: 'solid',
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
              }}

              >
                  <View style={{
                    justifyContent: 'flex-end',
                    alignContent: 'center',
                  }}
                  >
                    <Title>{item.fixture.venue.name}</Title>
                    <Title>{item.fixture.venue.city}</Title>
                  </View>
                  <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 15,
                  }}>
                    <View
                      style={{
                        width: '35%',
                        justifyContent: 'center',
                        alignItems: 'center',

                      }}
                    >
                      <Image
                        style={{
                          resizeMode: 'cover',
                          height: 35,
                          width: 35,
                        }}
                        source={{uri: item.teams.home.logo}}/>
                      <Title>{item.teams.home.name}</Title>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '10%',
                      }}
                    >
                      <Title>x</Title>
                    </View>
                    <View
                      style={{
                        width: '35%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        style={{
                          resizeMode: 'cover',
                          height: 35,
                          width: 35,
                        }}
                        source={{uri: item.teams.away.logo}}/>
                      <Title>{item.teams.away.name}</Title>
                    </View>
                  </View>
                </TouchableOpacity>

            )
          })
        }
      </ScrollView>

    </Container>

  );
}
