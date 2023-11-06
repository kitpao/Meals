import React from 'react';
import dinner from '../../dinner.svg';
import './NavigationLinks.css';

class NavigationLinks extends React.Component {
  displayOnlyAllMeals(event){
    event.preventDefault();
    // display: flex AllMeals
    // display: none CompareMeals
    // put a display state 
    console.log('display all')
    return 1
  }

  displayOnlyCompareMeals(event){
    event.preventDefault();
    // display: none AllMeals
    // display: flex CompareMeals
    // put a display state 
    console.log('display compare')
    return 2
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