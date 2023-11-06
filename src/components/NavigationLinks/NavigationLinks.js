import React from 'react';
import dinner from '../../dinner.svg';
import './NavigationLinks.css';

class NavigationLinks extends React.Component {
  displayOnlyAllMeals(event){
    event.preventDefault();
    // change the display state with: allMeal is true, compareMeal is false
    this.props.selectSection(true, false);
  }

  displayOnlyCompareMeals(event){
    event.preventDefault();
    // change the display state with: allMeal is false, compareMeal is true
    this.props.selectSection(false, true);
  }
  
  render(){
    return (
      <navbar className="navbar">
        <div className="logo-container">
          <img src={dinner} className="logo" alt="logo" />
        </div>
        <a href="#" onClick={(e) => this.displayOnlyAllMeals(e)}>All meals</a>
        <a href="#" onClick={(e) => this.displayOnlyCompareMeals(e)}>Compare meals</a>
        { /* maybe in the future add a search bar for meals */}
      </navbar>
    );
  }
}

export default NavigationLinks