import React from 'react'
import { View, TextImput, Text } from 'react-native'
import { useState } from 'react/cjs/react.production.min'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <Text>{nome}</Text>
            <TextImput 
            placeholder="Digite Seu Nome"
            value={nome}
            onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}