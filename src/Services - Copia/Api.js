
import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'X-RapidAPI-Key': '70e77e799cmshb96b9fac60f16d8p173c92jsn9693bb75f1e2',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  }
})

