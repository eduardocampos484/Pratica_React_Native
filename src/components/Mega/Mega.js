import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'

import Numero from '.Numero'

export default class Mega extends Component {
   
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
        }

 alterarQtdeNumero = (qtde) => {
     this.setState({ qtdeNumeros: +qtde })
 }
      gerarNumeroNaoContido = nums => {
          const novo = parseInt(Math.random() * 60) + 1
          return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
      }

      gerarNumeros = () => {
          const numeros = Array(this.state.qtdeNumeros)
          .fill
          .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
          this.setState({numeros: []})
      }
      exibirNuneros = () => {
          const nums = this.state.numeros
          return nums.map(num => {
              return <Numero key={num} num={num} />
          })
      }

    render() {
        return (
            <>
            <Text style={Estilo.txtG}>
                Gerador de Mega-sena 
            </Text>
            <TextImput
            keyboardType={'numeric'}
            style={{borderBottomWidth: 1}}
            placeholder="Qtde de Numeros"
            value={'${this.state.qtdeNumeros}'}
            onChangeText={this.alterarQtdeNumero}
            />
            <Button 
            title='Gerar'
            onPress={this.gerarNumeros}
            />
            <View style= {{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap', //Permite quebrar a linha caso a quantidade de elemento ultrapasse o tamanho
                justifyContent: 'center'
            }}>
            {this.exibirNuneros()}
            </View>
            </>
        )
    }

}