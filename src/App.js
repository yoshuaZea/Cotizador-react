import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';

// Componentes
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

// Styled Componenets
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({})
  const { cotizacion, datos } = resumen
  const [cargando, setCargando] = useState(false)

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de seguros" 
      />

      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
          setCargando={setCargando}
        />

        { 
          cargando 
          ? <Spinner /> 
          : (
            <Fragment>
              <Resumen 
                datos={datos}
              />

              <Resultado 
                cotizacion={cotizacion}
              />
            </Fragment>
          )        
        }
        
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
