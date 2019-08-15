import React from 'react';
import PropTypes from 'prop-types';
import TabsView from './Tabs/Tabs';

const Ingredients = ({ addIngredient }) => {
  return (
    <div>
      <TabsView
        addIngredient={addIngredient}
      />
    </div>
  );
};

Ingredients.propTypes = {
  addIngredient: PropTypes.func.isRequired,
};

export default Ingredients;
