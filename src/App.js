import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { CSSReset } from './components/CSSreset';
import { Footer } from './components/Footer/Footer';
import { Formulario } from './components/Formulario/Formulario';
import Time from './components/Time/Time';

function App() {
  const times=[
    {nome: 'Programação'},
    {nome: 'Front-end'}

  ]
  const [membros, setMembros] = useState([])

  const aoNovoMembroAdicionado=(membro)=>{
    setMembros([...membros, membro])
  }

  return (
    <>
    <CSSReset/>
    <Banner/>
    <Formulario 
    times={times.map(time=>time.nome)} aoCadastrarMembro={membro => aoNovoMembroAdicionado(membro)}
    />

    {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        membros={membros.filter(membro => membro.time === time.nome)}
        />)}
      <Footer/>
    </>
  );
}

export default App;
