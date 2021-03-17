import 'react-native-gesture-handler'; // A própria biblioteca pede para fazer este import primeiro
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App(){
  return(
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Routes style={{justifyContent: 'center'}}/>
    </NavigationContainer>
    
  )
}

