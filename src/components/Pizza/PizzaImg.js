import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import pizza from '../../assets/img/constractor_pizza.png';
import styled from 'styled-components';

const Figure = styled.figure`
    position: relative;
    width: 400px;
    height: 400px;
    margin: 0 50px;
    img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const PizzaImg = ({ ingredients }) => {
  return (
    <Figure>
      <img src={pizza} alt="pizza" style={{ zIndex: -1 }}/>
      {
        ingredients.map(ingredient => {

          if (ingredient.chesse) {
            return (
              <img key={'pizaa-0'} src={ingredient.bigImg} alt={ingredient.title} style={{ zIndex: -1 }}/>
            );
          }

          switch (ingredient.count) {
            case 1:
              return (<img key={'pizaa-1'} src={ingredient.bigImg} alt={ingredient.title}/>);
            case 2:
              return (
                <Fragment key={Math.random()}>
                  <img src={ingredient.bigImg} alt={ingredient.title}/>
                  <img src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-10px, 5px) rotate(20deg)' }}/>
                </Fragment>
              );
            case 3:
              return (
                <Fragment key={Math.random()}>
                  <img src={ingredient.bigImg} alt={ingredient.title}/>
                  <img src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-10px, 5px) rotate(20deg)' }}/>
                  <img src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(10px, 0px) rotate(-35deg)' }}/>
                </Fragment>
              );
            default:
              return (
                <Fragment key={Math.random()}>
                  <img  src={ingredient.bigImg} alt={ingredient.title}/>
                  <img  src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(-10px, 5px) rotate(20deg)' }}/>
                  <img  src={ingredient.bigImg} alt={ingredient.title}
                       style={{ transform: 'translate(10px, 0px) rotate(-35deg)' }}/>
                  <img  src={ingredient.bigImg} alt={ingredient.title}
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
