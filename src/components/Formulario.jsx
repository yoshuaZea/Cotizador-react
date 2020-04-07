import React, { useState } from 'react'
import styled from '@emotion/styled'
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helpers'
import PropTypes from 'prop-types';

const Div = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: blocK;
    width: 100%;
    padding: .5rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 .5rem;
`

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: all 0.3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Formulario = ({setResumen, setCargando}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState(false)

    // Extraer los valores del state
    const { marca, year, plan } = datos

    // Leer datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // Envío de formulario
    const cotizarSeguro = e => {
        e.preventDefault()

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true)
            return
        }
        
        setError(false)

        // Una base de 2000
        let resultado = 2000

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year)
        
        // Por cada año hay que restar el 3%
        resultado -= ( (diferencia * 3) * resultado ) / 100
        
        // Americano 15% - Asiático 5% - Europre 30%
        resultado = calcularMarca(marca) * resultado
        
        // Plan básico aumenta 20% - Plan Completo aumenta 50%
        const incrementoPlan = obtenerPlan(plan)
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2)     
        
        // Spinner
        setCargando(true)

        setTimeout(() =>{
            // Spinner
            setCargando(false)

            // Total - Pasa información al componente principal
            setResumen({
                cotizacion: resultado,
                datos
            })
        }, 1500)

    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >   
            { error ? <Error>Todos los campos son obligatorios</Error> : null }
            <Div>
                <Label htmlFor="Marca">Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">Selecciona...</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Div>

            <Div>
                <Label htmlFor="Año">Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">Selecciona...</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Div>

            <Div>
                <Label htmlFor="Plan">Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerInformacion}
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerInformacion}
                /> Completo
            </Div>

            <Button
                type="submit"
            >
                Cotizar
            </Button>
        </form>
    )
}

Formulario.propType = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Formulario