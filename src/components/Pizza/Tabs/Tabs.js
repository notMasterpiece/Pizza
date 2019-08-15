import React from "react";
import styled from 'styled-components';
import cheese from '../../../assets/img/ingredient_type_cheese.png';
import meat from '../../../assets/img/ingredient_type_meat.png';
import fish from '../../../assets/img/ingredient_type_fish.png';
import vegetable from '../../../assets/img/ingredient_type_vegetable.png';
import { chesseList, meatList, fishList, vegetableList } from '../../../json';

const TabNavItem = styled.div`
  width: 25%;
  display: inline-block;
  text-align: center;
  filter: grayscale(80%);
  cursor: pointer;
  ${({active}) => active && `
     filter: grayscale(0%);
      `}
      img {
    max-width: 100%;
  }
`;


const Tooltip = styled.div`
    background-color: #e8d5ba;
    visibility: hidden;
    margin-bottom: 15px;
    display: block;
    position: absolute;
    text-align: center;
    left: -30px;
    right: -30px;
    bottom: 100%;
    padding: 15px 5px;
    border-radius: 7px;
    opacity: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    z-index: 2;
    &:before {
        border: solid transparent;
        top: 100%;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(232, 213, 186, 0);
        border-top-color: #e8d5ba;
        border-width: 12px;
        left: 50%;
        margin-left: -12px;
    }
`;

const Prise = styled.span`
  color: red;
  padding-left: 5px;
`;


const TabIngr = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 5px;
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px 0px #ccc;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  &:hover {
    ${Tooltip} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const TabsList = styled.div`
  margin-bottom: 20px;
`;




// This only demonstrates state management and rendering
// It's missing ARIA attributes and keyboard access, but I could
// show you that if you'd like in another sandbox
class Tabs extends React.Component {
    // This thing does 3 things

    // 1. manages the state
    state = {
        activeIndex: this.props.defaultIndex || 0
    };

    // 2. renders based on that state
    render() {
        let {activeIndex} = this.state;

        // this.props.children is just data™, so we can iterate our
        // children, map them to new children, even inspect their props
        let tabs = React.Children.map(this.props.children, (child, index) => {
            return (
                <TabNavItem
                    key={index}
                    active={ activeIndex === index }
                    onClick={() => this.setState({activeIndex: index})}
                >
                    <img src={child.props.img} alt={child.props.label} />
                    <h4>{child.props.label}</h4>
                </TabNavItem>
            );
        });
        return (
            <div>
                <TabsList>{tabs}</TabsList>
                {/* Children is Just Data™ (it's an array) so we can
            access the the one we want based on state
            and render it here */}
                {this.props.children[this.state.activeIndex]}
            </div>
        );
    }
}

// Tab is actually inconsequential in this implementation, don't
// actually even need to use it inside of <Tabs>, pass any ol' element
// in with a "label" prop and you're good. But I'd keep it, it's good
// for semantics and future features you might need
const Tab = ({children}) => <div>{children}</div>;

// I would do this but not worth the conversation for this demo :P
//const Tab = ({ children }) => <React.Fragment>{children}</React.Fragment>;




const TabsView = ({addIngredient}) => (
    <Tabs defaultIndex={1}>
        <Tab
            label="Сирна"
            img={cheese}
        >
            {
                chesseList.map(chesse => (
                    <TabIngr
                        key={chesse.id}
                        onClick={() => addIngredient(chesse)}
                    >
                        <Tooltip>
                            {chesse.title}
                            <div>
                                {`${chesse.weight} г -`}
                                <Prise>{`${chesse.price} грн`}</Prise>
                            </div>
                        </Tooltip>
                        <img src={chesse.img} alt={chesse.title}/>
                    </TabIngr>
                ))
            }
        </Tab>
        <Tab
            label="М'ясна"
            img={meat}
        >
            {
                meatList.map(meat => (
                    <TabIngr
                        key={meat.id}
                        onClick={() => addIngredient(meat)}
                    >
                        <img src={meat.img} alt=""/>
                        <Tooltip>
                            {meat.title}
                            <div>
                                {`${meat.weight} г -`}
                                <Prise>{`${meat.price} грн`}</Prise>
                            </div>
                        </Tooltip>

                    </TabIngr>
                ))
            }

        </Tab>
        <Tab
            label="Морська"
            img={fish}
        >
            {
                fishList.map(fish => (
                    <TabIngr
                        key={fish.id}
                        onClick={() => addIngredient(fish)}
                    >
                        <img src={fish.img} alt=""/>
                        <Tooltip>
                            {fish.title}
                            <div>
                                {`${fish.weight} г -`}
                                <Prise>{`${fish.price} грн`}</Prise>
                            </div>
                        </Tooltip>
                    </TabIngr>
                ))
            }
        </Tab>
        <Tab
            label="Овочева"
            img={vegetable}
        >
            {
                vegetableList.map((vegetable) => (
                    <TabIngr
                        key={vegetable.id}
                        onClick={() => addIngredient(vegetable)}
                    >
                        <img src={vegetable.img} alt=""/>
                        <Tooltip>
                            {vegetable.title}
                            <div>
                                {`${vegetable.weight} г -`}
                                <Prise>{`${vegetable.price} грн`}</Prise>
                            </div>
                        </Tooltip>
                    </TabIngr>
                ))
            }
        </Tab>
    </Tabs>
);

export default TabsView;
