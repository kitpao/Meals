import React from 'react';
import './AllMeals.css';
import MealsDisplay from '../MealsDisplay';

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
        { /* Right Side Component for meal description */ }
        <p>{ console.log(selectedMealInfo) }</p>
        { /* Complete Selected Meal info */ }
      </section>
    );
  }
}

export default AllMeals