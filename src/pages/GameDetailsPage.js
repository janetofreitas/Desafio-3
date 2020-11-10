import React from 'react'
import {View, Text, StyleSheet,Image, SafeAreaView} from 'react-native'

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
            <View style = {style.container}>
                <SafeAreaView>
                <Image style = {style.avatar} source = {{uri: this.state.game.imagem.medium}} />
                <Text style = {style.baseText}>Nome:</Text>
                <Text style = {style.baseText}>{this.state.game.nome.jogo}</Text>
                <Text style = {style.baseText}>Sigla:{this.state.game.nome.sigla}</Text>
                <Text style = {style.baseText}>Publisher:</Text>
                <Text style = {style.baseText}>{this.state.game.publisher}</Text>
                <Text style = {style.baseText}>Gênero:{this.state.game.genero}</Text>
                <Text style = {style.baseText}>Nome:</Text>
                <Text style = {style.baseText}>Origem:{this.state.game.origem}</Text>
                <Text style = {style.baseText}>Preço:</Text>
                <Text style = {style.baseText}>{this.state.game.preco}</Text>
                </SafeAreaView>
                </View>
        )
    }
}

const style = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#048259',
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
        fontSize: 30,
        textAlign: "center"
        
      },
      titleText: {
        fontSize: 60,
        fontWeight: "bold"
      },
      avatar: {
        aspectRatio: 1,
        margin: 70,
        height: 250, //borda redonda
    }

    }
  )