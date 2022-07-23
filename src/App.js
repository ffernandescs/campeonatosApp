import React from 'react';
import { LogBox } from 'react-native';
import Routes from './routes/routes'

export default function App() {
  LogBox.ignoreLogs(['EventEmitter.removeListener'])

  return (
    <>
      <Routes/>
    </>
  )
}

