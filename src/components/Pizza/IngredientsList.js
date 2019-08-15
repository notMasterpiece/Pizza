import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import close from '../../assets/img/close.svg'

const Ingredient = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
`;

const TopIngredient = styled(Ingredient)`
  padding: 5px 118px 5px 35px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const IWeight = styled.div`
  margin-left: auto;
  min-width: 75px;
  text-align: right;
`;
const ILine = styled.div`
  border-bottom: 1px dashed #000;
  margin: 0 5px;
  flex: 1;
`;
const IClose = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 20px;
  cursor: pointer;
  min-width: 25px;
`;

const ICount = styled.span`
  margin-left: 5px;
  color: #6e6e6e;
  font-size: 14px;
`;
const IImg = styled.div`
  width: 25px;
  height: 25px;
  min-width: 25px;
  margin-right: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const Button = styled.button`
    background-color: #43a047;
    padding: 10px 20px;
    margin-top: 50px;
    color: #fff;
    font-weight: bold;
    transform: skewX(-30deg);
    border-radius: 6px;
    text-align: center;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    border: 0;
    span {
      display: block;
      transform: skewX(30deg);
    }
`;

const IAdd = styled.div`
    width: 22px;
    height: 22px;
    min-width: 22px;
    background: #43a047;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 22px;
    color: #fff;
    padding: 5px;
    margin: 0 6px;
    cursor: pointer;
    box-sizing: border-box;
`;
const IMinus = styled(IAdd)`
    background: #ff1744;
`;

const IngredientsList = ({
     ingredients,
     deleteIngredient,
     addIngredient,
     minusIngredient
}) => {

    return (
        <Fragment>
            <TopIngredient>
                Паляничка (класична) соус томатний, сир
                <ICount>x1</ICount>
                <ILine />
                <IWeight>
                    305 грам
                </IWeight>
            </TopIngredient>
            { ingredients.map((ingredient, index) => {
                return (
                    <Ingredient key={index}>
                        <IImg>
                            <img src={ingredient.img} alt={ingredient.title} />
                        </IImg>
                        {ingredient.title}
                        <ICount>x{ingredient.count}</ICount>
                        <ILine />
                        <IWeight>
                            {ingredient.weight * ingredient.count} грам
                        </IWeight>
                        <IMinus onClick={() => minusIngredient(ingredient.id)}>-</IMinus>
                        <IAdd onClick={() => addIngredient(ingredient.id)}>+</IAdd>
                        <IClose onClick={() => {deleteIngredient(ingredient.id)}} >
                            <img src={close} alt="close"/>
                        </IClose>
                    </Ingredient>
                )
            })}
            {
                ingredients.length ? (
                    <Button>
                        <span onClick={() => alert(JSON.stringify(ingredients))}>Замовити</span>
                    </Button>
                ) : null
            }

        </Fragment>
    );
};

IngredientsList.propTypes = {
    ingredients: PropTypes.array,
    addIngredient: PropTypes.func.isRequired,
    deleteIngredient: PropTypes.func.isRequired,
    minusIngredient: PropTypes.func.isRequired,
};

export default IngredientsList;
