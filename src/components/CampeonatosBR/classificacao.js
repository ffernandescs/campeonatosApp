import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Api } from '../../Services/Api';
import {
  Container,
  Title, Update,
  Tabela, CategoryOne,
  CategoryTwo, Category,
  List,
  ListOne,
  ListTwo,
  Points,
  Time,
  TableTHead
   }
  from './styles';
  import Loading from '../Loading';

export default function Classificacao({navigation, route}) {
  const serie = route.params

  const [quote, setQuote] = useState([])
  const [league, setLeague] = useState([])
  const [loading, setLoading] = useState(true)

  async function ApiCampeonatos() {
    Api({
      "method": "GET",
      "url": "/standings",
      "params": {season: '2022', league: `${serie.route.id}`},
    })
      .then((response) => {
        const data = response.data.response[0].league.standings[0]
        setLoading(false)
        setQuote(data);
        setLeague(response.data.response[0].league);
        console.log(response.data.response[0].league.id)
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
      <View
        style={{
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: '#FFF',
              height: 50,
              width: 50,
              padding: 9,
              overflow: 'hidden',
              borderRadius: 8,
              marginRight: 5,
            }}
          >
            <Image
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: '100%',
              }}
              source={{uri: league.logo}} />
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
              left: 0
            }}
          >
            <Title
              style={{
                fontSize: 18,
                textTransform: 'none',
                color: '#fff'
              }}
            >{league.name}</Title>
            <Title
              style={{
                fontWeight: 'normal',
                position: 'relative',
                left: -15,
                color: '#fff'

              }}

            >{league.season}</Title>
          </View>
        </View>
      </View>
      <Category
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
      }}
      >
        <CategoryOne>
          <Title
            style={{
              color: '#FFF',
              width: 15,
            }}
          >#</Title>
          <Title
            style={{
              color: '#FFF',
            }}
          >Equipe</Title>
        </CategoryOne>
        <CategoryTwo>
          <TableTHead>P</TableTHead>
          <TableTHead>J</TableTHead>
          <TableTHead>V</TableTHead>
          <TableTHead>E</TableTHead>
          <TableTHead>D</TableTHead>
          <TableTHead>SG</TableTHead>
        </CategoryTwo>
      </Category>
      <Tabela>

        <List>
          {
            quote.map((item, key) => {
              return (
                <View
                  key={item.team.logo}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 40,
                    borderBottomColor: '#D6D6D6',
                    borderStyle: 'solid',
                    borderBottomWidth: 1
                  }}
                >
                  <ListOne style={{
                    flexDirection: 'row'
                  }}>
                    <Title
                      style={{
                        backgroundColor: '#096db3',
                        width: 20,
                        color: '#FFF',
                        borderRadius: 5
                      }}
                    >{item.rank}</Title>
                    <Image
                      style={{
                        resizeMode: 'cover',
                        height: 20,
                        width: 20,
                        marginRight: 5,
                      }}
                      source={{uri: item.team.logo}} />
                    <Time>{item.team.name}</Time>
                  </ListOne>
                  <ListTwo>
                    <View
                      style={{
                        backgroundColor: '#FFDEAD',
                        height: 40,
                        borderBottomColor: '#D6D6D6',
                        borderStyle: 'solid',
                        borderBottomWidth: 1
                      }}
                    >
                      <Points>{item.points}</Points>
                    </View>
                    <Points>{item.all.win}</Points>
                    <Points>{item.all.draw}</Points>
                    <Points>{item.all.lose}</Points>
                    <Points>{item.all.goals.for}</Points>
                    <Points>{item.all.goals.against}</Points>
                  </ListTwo>
                </View>

              )
            })
          }
          <View>
            <View>
              <View></View>
              <Text>Classificação - Copa Libertadores (Fase de Grupos)</Text>
              <Text>Classificação - Copa Libertadores (Classificação)</Text>
              <Text>Classificação - Copa Sul-Americana (Fase de Grupos)</Text>
              <Text>Rebaixamento - Serie </Text>
            </View>
          </View>
        </List>
      </Tabela>
    </Container>

  );
}
