import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import GameListItem from './GameListItem'

const GameList = props => {
    const {games, onPressItem} = props
    
    const renderItem = ({item}) =>{
        return (
            <GameListItem 
            key = {item.nome.jogo}
            game = {item}
            onPressItemDetails = {onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Games
                </Text>
            </View>
        )
    }

    return(
        <View style = {style.container}>
            <SafeAreaView>
                <FlatList
                    data={games}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.nome.jogo}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )

}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#e2f977'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#e2a977",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: '#000',
            fontSize: 20
        }
    }
)

export default GameList