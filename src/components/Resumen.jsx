import React from 'react'
import styled from '@emotion/styled';
import { ucfirst } from '../helpers'
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    // Si no hay datos
    if(!datos) return null
    
    return (
        <TransitionGroup
            component="div"
            className="slide-in-bottom"
        >
            <CSSTransition
                classNames="slide-in-bottom"
                key={datos}
                timeout={{ enter: 500, exit: 500 }}
            >
                <ContenedorResumen>
                    <h2>Resúmen de cotización</h2>
                    <ul>
                        <li>Marca: {ucfirst(datos.marca)}</li>
                        <li>Plan: {ucfirst(datos.plan)}</li>
                        <li>Año del auto: {datos.year}</li>
                    </ul>
                </ContenedorResumen>
            </CSSTransition>
        </TransitionGroup>
    )
}

Resumen.propType = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen