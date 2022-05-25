import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado />
    <Quadrado cor='#F00' lado={30} />
    <Quadrado cor='#090' lado={40} />
    <Quadrado cor='#009' lado={50} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
       flexDirection: "row",
       justifyContent: "flex-end",
       alignItems: "center",
       height: 350,
       width: '100%',
       backgroundColor: '#000'
    }
})