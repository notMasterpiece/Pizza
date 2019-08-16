import React, { Component, Fragment } from 'react';
import Ingredients from './Ingredients';
import IngredientsList from './IngredientsList';
import Price from './Price';
import Weight from './Weight';
import PizzaImg from './PizzaImg';
import PizzaHeader from './PizzaHeader';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 30px auto 0;
  padding: 15px;
  align-items: center;
`;
const AppTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  user-select: none;
  flex-wrap: wrap;
`;

const AppTopLeft = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PizzaInfo = styled.div`
  position: absolute;
  right: 80px;
  bottom: 10px;
  color: #fff;
  font-weight: bold;
  text-align: right;
`;


class PizzaWrap extends Component {


  state = {
    ingredients: [],
  };


  deleteIngredient = (id) => {
    this.setState({
      ingredients: this.state.ingredients.filter(ingredient => ingredient.id !== id),
    });
  };


  addIngredient = (ingredient) => {

    if (typeof ingredient === 'object') {

      const { ingredients } = this.state;
      const includesIngredient = ingredients.find(element => element.id === ingredient.id);

      if (includesIngredient) {
        return this.plusIngredient(ingredient.id);
      }
      this.setState({
        ingredients: [...ingredients, ingredient],
      });

    } else {
      this.plusIngredient(ingredient);
    }
  };

  checkIngredientCount = (id) => {
    const { ingredients } = this.state;
    const includesIngredient = ingredients.find(element => element.id === id);
    if (includesIngredient) {
      if (includesIngredient.count === 5 ) {
        const notify = () => toast(`Ви вибрали максимальну кількість ${includesIngredient.title}`);
        notify();
        return false
      } else {
        return true;
      }
    }
  };


  plusIngredient = (id) => {

    if (!this.checkIngredientCount(id)) return;

    const ingredients = this.state.ingredients.map(ingredient => {
      if (ingredient.id !== id) {
        return ingredient;
      } else {
        return {
          ...ingredient,
          count: ingredient.count + 1,
        };
      }
    });

    this.setState({
      ingredients,
    });
  };

  minusIngredient = (id) => {

    const ingredients = this.state.ingredients.map(ingredient => {
      if (ingredient.id !== id) {
        return ingredient;
      } else {
        if (ingredient.count - 1 !== 0) {
          return {
            ...ingredient,
            count: ingredient.count - 1,
          };
        }
        return null;
      }
    });

    this.setState({
      ingredients: ingredients.filter(el => el != null),
    });
  };

  render() {
    const { ingredients } = this.state;

    return (
      <Fragment>
        <PizzaHeader/>
        <App>
          <AppTop>
            <AppTopLeft>
              <PizzaImg ingredients={ingredients}/>
              <PizzaInfo>
                <Price ingredients={ingredients}/>
                <Weight ingredients={ingredients}/>
              </PizzaInfo>
            </AppTopLeft>
            <AppTopLeft>
              <IngredientsList
                ingredients={ingredients}
                minusIngredient={this.minusIngredient}
                addIngredient={this.addIngredient}
                deleteIngredient={this.deleteIngredient}
              />
            </AppTopLeft>
          </AppTop>

          <Ingredients
            addIngredient={this.addIngredient}
            ingredients={ingredients}
          />
        </App>
        <ToastContainer
          hideProgressBar={true}
          position="top-right"
        />
      </Fragment>
    );
  }


  componentDidMount() {
    window.onload = function() {
      const images = document.getElementsByTagName('img');
      for (let i = 1; i < images.length; i++) {
        images[i].ondragstart = function() {
          return false;
        };
      }
    };
  }
}

export default PizzaWrap;
