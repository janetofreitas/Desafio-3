//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions}  from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import GameDetailsPage from './src/pages/GameDetailsPage';
import GamePage  from './src/pages/GamePage'

const Stack = createStackNavigator();

function App(){
  return(
    <View style = {style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "GamePage" >
          <Stack.Screen name = "Lista de Games" component = {GamePage} />
          <Stack.Screen name = "Detalhes dos Games" component = {GameDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }
)

export default App;


