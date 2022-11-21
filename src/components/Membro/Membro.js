import styled from 'styled-components'

const StyledCard = styled.div`
width: 176px ;
margin: 24px auto ;
border-radius: 4px;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
.cabecalho img{
  border-radius: 50px;
  width:56px ;
  height: 56px;
  margin: 10px;
}
.rodapeCard{
  background-color: var(--azul-primario);
  padding: 24px;
  border-radius: 0 0 4px 4px  ;
}
.rodapeCard h4{
    font-weight: 600;
    font-size: 16px;
    color: var(--branco) ;
    margin-bottom: 4px ;
  }
p{
  font-weight: 200;
  font-size: 12px;
  color: var(--branco);
}
.rodapeCard a img{
  height: 30px ;
  width:30px ;
  margin-top: 24px;
}
`

const Membro = (props)=>{
  return (
    <StyledCard>
      <div className="cabecalho">
        <img src={props.imagem} alt={props.nome}/>
      </div>
      <div className="rodapeCard">
        <h4>{props.nome}</h4>
        <p>{props.cargo}</p>
        <a href={props.imagem}>
        <img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt={props.nome}/>
        </a>
      </div>
    </StyledCard>
  )
}
export default Membro