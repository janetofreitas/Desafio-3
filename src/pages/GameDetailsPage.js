import React from 'react'
import {View, ScrollView, Text, StyleSheet,Image, SafeAreaView} from 'react-native'

export default class GameDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "game": props.route.params.game
        }
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
      };

    render(){
        return(
            <ScrollView style = {style.container}>
                <SafeAreaView>
                <Image style = {style.avatar} source = {{uri: this.state.game.imagem.medium}} />
                <Text style = {style.titleText}>Nome:</Text>
                <Text style = {style.baseText}>{this.state.game.nome.jogo}</Text>
                <Text style = {style.titleText}>Sigla:</Text>
                <Text style = {style.baseText}>{this.state.game.nome.sigla}</Text>
                <Text style = {style.titleText}>Publisher:</Text>
                <Text style = {style.baseText}>{this.state.game.publisher}</Text>
                <Text style = {style.titleText}>Gênero:</Text>
                <Text style = {style.baseText}>{this.state.game.genero}</Text>
                <Text style = {style.titleText}>Origem:</Text>
                <Text style = {style.baseText}>{this.state.game.origem}</Text>
                <Text style = {style.titleText}>Preço:</Text>
                <Text style = {style.baseText}>{this.state.game.preco}</Text>
                </SafeAreaView>
                </ScrollView>
        )
    }
}

const style = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#9FDEF8',
        margin:14
        
        
      },
      line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#37276B',
        alignItems: 'center',
        flexDirection: 'row'
    },
    baseText: {
        fontFamily: "Cochin",
        fontSize: 25,
        textAlign: "center"
        
      },
      titleText: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
      },
      avatar: {
        aspectRatio: 1,
        margin: 70,
        height: 250, 
    }

    }
  )