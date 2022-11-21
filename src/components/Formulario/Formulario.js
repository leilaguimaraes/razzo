import styled from 'styled-components'
import { useState } from 'react'
import { Button } from './componentes/Botao'
import { CampoTexto } from './componentes/CampoTexto'
import ListaDeTimes from './componentes/ListaDeTimes'

const StyledFormulario= styled.form`
  background-color: var(--branco) ;
  padding: 24px 20px;
  width:80vw;
  margin:  8px auto;
  border-radius:4px;
h2{
  font-size: 16px ;
  font-weight: 600 ;
  
}
`

export const Formulario = (props)=>{

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

const aoSalvar = (e) =>{
  e.preventDefault()
  props.aoCadastrarMembro({
    nome, cargo, time, imagem
  })

}

  return(
    <StyledFormulario onSubmit={aoSalvar}>
   
      <h2>Inserir participante do time:</h2>
      <CampoTexto 
      label="Nome" 
      placeholder="Digite seu nome" 
      valor={nome} 
      aoAlterar={valor => setNome(valor)} />
      
      <CampoTexto 
      label="Cargo" 
      placeholder="Digite seu cargo" 
      valor={cargo} 
      aoAlterar={valor => setCargo(valor)} />

      <CampoTexto 
      label="Imagem" 
      placeholder="Insira a url da sua imagem" 
      valor={imagem} 
      aoAlterar={valor => setImagem(valor)} />

      <ListaDeTimes 
      label="Time"
      valor={time}
      itens={props.times}
      aoAlterar={valor => setTime(valor)} 
      obrigatorio={true}/>
      
      <Button> Cadastrar </Button>
    
    </StyledFormulario>
  )
}