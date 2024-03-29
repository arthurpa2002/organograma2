import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import { useState } from 'react';
import Times from './componentes/Times/index.js';
import Rodape from './componentes/RodaPe/index.js';




function App() {

  const times =[
    {
      nome: 'Programação',
      corPrimaria: '#57C278',  
      corSecundaria: '#D9F7E9',
    },
      {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',  
      corSecundaria: '#E8F8FF',
    }, 
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',  
      corSecundaria: '#F0F8E2',
    },
      {
      nome: 'Devops',
      corPrimaria: '#E06B69',  
      corSecundaria: '#FDE7E8',
    } ,
      {
      nome: 'UI/UX',
      corPrimaria: '#DB6EBF',  
      corSecundaria: '#FAE9F5',
    }, 
     {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',  
      corSecundaria: '#FFF5D9',
    },
      {
      nome: 'inovação e Gestão',
      corPrimaria: '#FF8A29',  
      corSecundaria: '#FFEEDF',
    }
    
  ]

  const  [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
     <Banner/>      
    <Formulario times={times.map(time => time.nome)} 
    aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
   
    {times.map(times => <Times 
    key={times.nome} 
    nome={times.nome}
     corPrimaria={times.corPrimaria}
      corSecundaria={times.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
      />)}
        <Rodape/>
    </div>
    
  );
}

export default App;
