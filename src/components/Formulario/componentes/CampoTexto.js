import styled from 'styled-components'

const StyledCampo = styled.div`

label{
  display: block ;
  font-weight: 400;
  font-size: 14px;
  margin: 8px 0;
}
input{
  border: none;
  padding: 8px ;
  border-radius: 4px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.08);
  width:100% ;
}
::placeholder{
  color: var(--preto-secundario);
}
`

export function CampoTexto(props){
  const aoDigitar = (evento) =>{
    props.aoAlterar(evento.target.value)
  }
  return(
    <StyledCampo>
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder}/>
    </StyledCampo>

  )
}