import styled from 'styled-components'

const StyledButton = styled.button`
background-color: var(--azul-primario) ;
color: var(--branco);
font-weight: 600;
font-size: 14px;
padding: 8px;
border: none ;
border-radius:4px ;

:hover{
  background: #1652C0;
  cursor:pointer ;
}
`

export function Button (props){
  return(
    <StyledButton>
      {props.children}
    </StyledButton>
  )
}