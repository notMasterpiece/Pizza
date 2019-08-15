import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const PizzaWeight = styled.div`
  background-color: #43a047;
  padding: 5px 15px;
  color: #fff;
  font-weight: bold;
  transform: skewX(-30deg);
  border-radius: 6px;
  text-align: center;
  display: inline-block;
  margin-top: -30px;
`;

const PizzaWeightInner = styled.div`
    transform: skewX(30deg);
    font-size: 20px;
`;

const Weight = ({ingredients}) => {

    let result = 305;
    ingredients.forEach(ingredient => {
        result += +ingredient.weight * +ingredient.count
    });

    if (!result) return null;

    return (
        <PizzaWeight>
            <PizzaWeightInner>{ result } г</PizzaWeightInner>
        </PizzaWeight>
    );
};

Weight.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default Weight;