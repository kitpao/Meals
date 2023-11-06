import React from 'react';
import './AllMeals.css';
import MealsDisplay from '../MealsDisplay';

class AllMeals extends React.Component {
  render(){
    return (
      <section className="all-meals">
        <MealsDisplay meals={this.props.meals}/>
        { /* Right Side Component for meal description */ }

        { /* Complete Selected Meal info */ }
      </section>
    );
  }
}

export default AllMeals