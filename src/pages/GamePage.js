import axios from 'axios';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameList from '../component/GameList';

export default class GamePage extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      games:[]
    }
  }

  componentDidMount(){
    axios.get('https://demo2443702.mockable.io/api-games2')
    .then(response => {
      const {results} = response.data
      this.setState({
        games: results
      })
    })
  }

  render(){
    return(
      <View>
        <GameList games = {this.state.games}
        onPressItem = {(game) => {
            this.props.navigation.navigate('Detalhes dos Games',{"game":game})
        }}
        /> 
      </View>
    )
  }


}