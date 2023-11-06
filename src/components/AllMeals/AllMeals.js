import React from 'react';
import './AllMeals.css';
import MealsDisplay from '../MealsDisplay';
import MealDescription from '../MealDescription';

class AllMeals extends React.Component {
  constructor(){
    super();

    this.displaySpecificMeal = this.displaySpecificMeal.bind(this);

    this.state = {
      selectedMealKey: ""
    }
  }

  displaySpecificMeal(e) {
    this.setState({ selectedMealKey: e.currentTarget.dataset.value })
  }

  render(){
    const selectedMealInfo = this.props.meals[this.state.selectedMealKey]
    return (
      <section className="all-meals">
        <MealsDisplay
          meals={this.props.meals}
          displaySpecificMeal={this.displaySpecificMeal}
          selectedMeal={this.state.selectedMealKey}
        />
        { this.state.selectedMealKey !== "" && <MealDescription info={selectedMealInfo} />}
      </section>
    );
  }
}

export default AllMeals