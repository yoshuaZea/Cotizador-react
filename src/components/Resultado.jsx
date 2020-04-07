import React from 'react'
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
`

const Cotizacion = styled.div`
    color: #00838F;
    text-transform: uppercase;
    padding: 1rem;
    margin: 0;
    font-weight: bold;
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`

const ResultadoCotizacion = styled.div`
`;

const Resultado = ({cotizacion}) => {
    return ( 
        (!cotizacion) 
        ? <Mensaje>Elige una marca, año y tipo de seguro.</Mensaje> 
        : (
            <TransitionGroup
                component="div"
                className="slide-in-bottom"
            >
                <CSSTransition
                    classNames="slide-in-bottom"
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <Cotizacion>
                        <p>El total es: $ {cotizacion}</p>
                    </Cotizacion>
                </CSSTransition>
            </TransitionGroup>
        )
    )
}

Resultado.propType = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado