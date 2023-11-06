import React from 'react';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import AllMeals from './components/AllMeals/AllMeals';
import CompareMeals from './components/CompareMeals/CompareMeals';
import sampleMeals from './sample-meals';

class App extends React.Component {
  constructor(){
    super();

    this.selectSection = this.selectSection.bind(this);
    this.state = {
      displayAll: true,
      displayCompare: false,
      meals: sampleMeals
    }
  }

  selectSection(displayAll, displayCompare) {
    // ensure only 1 section will be displayed
    displayAll = !displayCompare;

    this.setState({ displayAll })
    this.setState({ displayCompare })
  }

  render() {
    return (
      <div className="App">
        <NavigationLinks selectSection={this.selectSection} />
        {this.state.displayAll && <AllMeals meals={this.state.meals} />}
        {this.state.displayCompare && <CompareMeals />}
      </div>
    );
  }
}

export default App;
