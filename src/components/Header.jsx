import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

// Styled Components

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`
const TextH1 = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextH1>{titulo}</TextH1>
        </ContenedorHeader>    
    );
}

Header.propType = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;