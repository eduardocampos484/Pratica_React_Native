import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Produtos from './Produtos'
export default props => {
    return (
    <>
        <Text style={Estilo.txtG}>
            Lista de Produtos
        </Text>
        {Produtos.map(p => {
            return <Text> key={p.id}) {p.nome} tem preco R$ {p.preco}</Text>
        })}
        
    </>
    )
}