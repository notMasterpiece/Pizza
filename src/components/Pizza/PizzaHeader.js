import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
    padding: 20px;
    h1 {
      margin: 0;
    }
`;

const PizzaHeader = () => {
    return (
        <Header>
            <h1>Конструктор піци "Зроби сам"</h1>
        </Header>
    );
};

export default PizzaHeader;