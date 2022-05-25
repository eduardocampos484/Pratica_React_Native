import React from 'react'
import { Text, Plataform } from 'react-native'
import Estilo from './estilo'

export default props => {
    if(Plataform.OS === 'android') { 
       return <Text style={Estilo.txtG}>Android</Text>
    } else if(Plataform.OS === 'ios') {
       return <Text style={Estilo.txtG}>iOS</Text>
    } else {
       return <Text style={Estilo.txtG}>Eita!!!</Text>
    }                 
}