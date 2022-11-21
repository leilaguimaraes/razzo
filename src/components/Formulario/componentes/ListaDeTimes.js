import styled from 'styled-components'

const StyledLista = styled.div`
label{
  display: block ;
  font-weight: 400;
  font-size: 14px;
  margin: 8px 0;
}
select{
  border: none;
  padding: 8px ;
  border-radius: 4px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.08);
  width:100% ;
  margin-bottom: 16px;
}
`

const ListaDeTimes = (props)=>{
  return(
    <StyledLista>
      <label>{props.label}</label>
      <select onChange={e => props.aoAlterar(e.target.value)} required={props.obrigatorio} value={props.valor}>
        {props.itens.map(item=>{
          return <option key={item}>{item}</option>
        })}
      </select>

    </StyledLista>
  )
}

export default ListaDeTimes