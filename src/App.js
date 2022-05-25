import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import FlexBoxV1 from './components/FlexBoxV1'

import Mega from './components/mega/Mega'
// import FlexBoxV4 from './components/FlexBoxV4'
// import FlexBoxV3 from './components/FlexBoxV3'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/Produtos/ListaProdutosV2'
// import ListaProdutos from './components/Produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/Relação/Familia'
// import Membro from './components/Relação/Membro'
// import Parimpa from './components/Parimpa'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/Contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/Direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatório from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'


export default () => (  
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={12} />
    {/*
    <FlexBoxV4 />
    <FlexBoxV3 />
    <FlexBoxV2 />
    <FlexBoxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com'}} />
    <UsuarioLogado usuario={{ nome: 'Ana', email: 'gui@gui.com'}} />
    <UsuarioLogado usuario={{ email: 'gui@gui.com'}} />
    <Familia />
           <Membro nome="Bia" sobrenome="Arruda" />
           <Membro nome="Carlos" sobrenome="Arruda" />
       <Familia />
       <Familia />
           <Membro nome="Ana" sobrenome="Silva" />
           <Membro nome="Julia" sobrenome="Silva" />
       <Familia />
        <Parimpa num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={5} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto"
        segundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} /> 
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1, //Serve para usar a tela toda, crescer
        justifyContent: "center", //Para centralizar o eixo principal
        alignItems: "center", //Para centralizar o texto. Alinha o eixo cruzado
        padding: 20,
    }
})