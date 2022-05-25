import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>
             {props.num}     
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
    backgroundColor: '#000',
    padding: 10,
    width: 150, 
    }, 
    DisplayText: {
        color: '#FFF'
}
})