import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const PizzaPrice = styled.div`
  background-color: red;
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

const Price = ({ingredients}) => {

    let result = 35;
    ingredients.forEach(ingredient => {
        result += +ingredient.price * +ingredient.count
    });

    return (
        <PizzaPrice>
            {result} грн
        </PizzaPrice>
    );
};

Price.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default Price;