import styled from "styled-components"

const StyledBanner = styled.div`
padding: 24px;
display: flex;
justify-content:space-between ;
align-items: baseline ;
img{
  height: 36px;
}
h1{
  font-size:16px ;
  color: var(--branco);
}
`

export function Banner(){
  return(
    <StyledBanner>
      <img src="https://razzo.tech/wp-content/webp-express/webp-images/uploads/2022/05/Logo-Razzo_White.png.webp" alt=""/>
      <h1>Times</h1>
    </StyledBanner>
  )
}