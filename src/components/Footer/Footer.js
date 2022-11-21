import styled from 'styled-components'

const StyledFooter = styled.div`
background-color: var(--branco) ;
font-weight: 500;
font-size: 14px;
color: var(--azul-primario);
margin-top: 120px;
padding: 25px;
p{
  text-align: center;
}
`

export function Footer(){
  return(
  <StyledFooter>
    <p>Feito por Leila Guimarães 💙</p>
  </StyledFooter>

  )
}

