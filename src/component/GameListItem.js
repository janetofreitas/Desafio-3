import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const GameListItem = props => {
    const {game, onPressItemDetails} = props
    const {jogo,sigla} = game.nome
    return(
    <TouchableOpacity onPress={() => {
        onPressItemDetails(game)
    }}>
    <View style = {style.line}>

        <Image style = {style.avatar} source = {{uri: game.imagem.thumbnail}} />
        <Text style = {style.lineText} key = {jogo}>
        {`${
                        toUpperFirst(jogo) 
                    }`}
        </Text>
    </View>
    </TouchableOpacity>

    )
}

const  style = StyleSheet.create(
    {
        line: {
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#37276B',
            alignItems: 'center',
            flexDirection: 'row'

        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,
            borderRadius: 50, //borda redonda
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7
        }
    }
)

export default GameListItem