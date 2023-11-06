import React from 'react';

class Meal extends React.Component {
  render(){
    const {name, score} = this.props.details;
    const selected = this.props.value == this.props.selectedMeal;
    return (
      <li className={`meal ${selected ? "selected" : ""}`} data-value={this.props.value} onClick={(e) => this.props.displaySpecificMeal(e)}>
        <h4>{name}</h4>
        <p>score: {score}</p>
      </li>
    );
  }
}

export default Meal;