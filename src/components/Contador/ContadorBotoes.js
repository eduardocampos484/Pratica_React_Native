import React from 'react'
import { View, Button, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={style.Botoes}>
        <Button title="+" omPress={props.inc} />
        <Button title="-" omPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})