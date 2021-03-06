import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado />
    <Quadrado cor='#F00' />
    <Quadrado cor='#090' />
    <Quadrado cor='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#000'
    }
})