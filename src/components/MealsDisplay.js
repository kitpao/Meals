import React from 'react';
import Meal from './Meal';

class MealsDisplay extends React.Component {
  render(){
    return (
      <section className="left-part">
        <h2>Check out all available meals!</h2>
        <p>Click on the meal to see more details</p>
        <ul>
          {Object.keys(this.props.meals).map(
            key => <Meal
                      key={key}
                      details={this.props.meals[key]}
                      displaySpecificMeal={this.props.displaySpecificMeal}
                      value={key}
                      selectedMeal={this.props.selectedMeal}
                    />
          )}
        </ul>
      </section>
    );
  }
}

export default MealsDisplay;