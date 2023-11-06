import React from 'react';
import dinner from '../../dinner.svg';
import './NavigationLinks.css';

class NavigationLinks extends React.Component {
  render(){
    return (
      <navbar className="navbar">
        <div className="logo-container">
          <img src={dinner} className="logo" alt="logo" />
        </div>
        <a href="#">All meals</a>
        <a href="#">Compare meals</a>
        { /* maybe in the future add a search bar for meals */}
      </navbar>
    );
  }
}

export default NavigationLinks