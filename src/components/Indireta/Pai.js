import Filho from './Filho'
import { Text } from 'react-native'
import Estilo from '../estilo'
import { useState } from 'react/cjs/react.production.min'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
        <Text style={Estilo.txtG}>
            {texto}{num}
        </Text>
        <Filho
        min={1}
        max={60}
        funcao={exibirValor}
        />
        </>
    )
}