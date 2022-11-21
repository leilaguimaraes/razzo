import styled from 'styled-components'
import Membro from '../Membro/Membro'

const StyledTime = styled.section`
margin: auto;
border-radius: 4px;
width: 80%;
background-color: var(--branco) ;
padding:18px ;
text-align: center ;
h1{
  font-weight: 700;
  font-size: 20px;
}
h3{
  font-weight: 600;
  font-size: 16px;
  color: var(--azul-primario);
}
`

const Time = (props)=>{
  return(
     props.membros.length > 0 &&
      <StyledTime>
        <h1>Times</h1>
        <h3>{props.nome}</h3>
        <div>
          {props.membros.map(membro =><Membro key={membro.nome} nome={membro.nome} cargo ={membro.cargo} imagem ={membro.imagem}
          />)}
        </div>
      </StyledTime>
  )
}

export default Time