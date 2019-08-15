import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import pizza from '../../assets/img/constractor_pizza.png';
import pizz_v2 from '../../assets/img/osnova-v1.png';

import tomato_sauce from '../../assets/img/tomato_sauce.png';
import styled from 'styled-components';

const Figure = styled.figure`
    position: relative;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
`;

const FigureImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  max-width: 100%;
`;


const SauceImg = styled.img`
  top: 17px;
  left: 17px;
  position: absolute;
  z-index: -1;
  max-width: 92%;
  @media (max-width: 768px) {
      max-width: 88%;
    }
`;


const PizzaImg = ({ ingredients }) => {
  return (
    <Figure>
      <FigureImg src={pizz_v2} alt="pizza" />
      <SauceImg src={tomato_sauce} alt="pizza" />
      {
        ingredients.map(ingredient => {

          if (ingredient.chesse) {
            return (
              <FigureImg key={'pizaa-0'} src={ingredient.bigImg} alt={ingredient.title} style={{ zIndex: -1 }}/>
            );
          }

          switch (ingredient.count) {
            case 1:
              return (<FigureImg key={'pizaa-1'} src={ingredient.bigImg} alt={ingredient.title}/>);
            case 2:
              return (
                <Fragment key={Math.random()}>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}/>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-10px, 5px) rotate(20deg)' }}/>
                </Fragment>
              );
            case 3:
              return (
                <Fragment key={Math.random()}>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}/>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-10px, 5px) rotate(20deg)' }}/>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(10px, 0px) rotate(-35deg)' }}/>
                </Fragment>
              );
            default:
              return (
                <Fragment key={Math.random()}>a
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}/>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-10px, 5px) rotate(20deg)' }}/>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(10px, 0px) rotate(-35deg)' }}/>
                  <FigureImg src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-5px, -5px) rotate(70deg)' }}/>
                </Fragment>
              );
          }
        })
      }
    </Figure>
  );
};

PizzaImg.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default PizzaImg;
