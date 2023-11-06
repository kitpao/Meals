import React from 'react';

class Meal extends React.Component {
  render(){
    const {name, score} = this.props.details
    return (
      <li className="meal">
        <h4>{name}</h4>
        <p>score: {score}</p>
      </li>
    );
  }
}

export default Meal;