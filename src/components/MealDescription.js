import React from 'react';

class MealDescription extends React.Component {
  render(){
    const {name, cookingTime, ingredients, caloriesPer100gr, score} = this.props.info;
    const stringIngredients = ingredients.join(', ')
    return (
      <section className="right-part">
        <h2 className='name'>{name}</h2>
        <p className='score'>Score: {score} Stars out of 5</p>
        <p className='cookingTime'>Cooking time: {cookingTime} minutes</p>
        <p className='calories'>Calories Per 100 gr: {caloriesPer100gr} KCal</p>
        <p className='ingredients'><b>Ingredients: </b>{stringIngredients}</p>
      </section>
    );
  }
}

export default MealDescription;