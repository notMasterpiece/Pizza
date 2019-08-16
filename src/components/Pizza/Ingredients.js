import React from 'react';
import PropTypes from 'prop-types';
import TabsView from './Tabs/Tabs';

const Ingredients = ({ addIngredient, ingredients }) => {
  return (
    <div>
      <TabsView
        addIngredient={addIngredient}
        ingredients={ingredients}
      />
    </div>
  );
};

Ingredients.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
};

export default Ingredients;
