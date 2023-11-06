import React from 'react';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import AllMeals from './components/AllMeals/AllMeals';
import CompareMeals from './components/CompareMeals/CompareMeals';

function App() {
  return (
    <div className="App">
      <NavigationLinks />
      <AllMeals />
      <CompareMeals />
    </div>
  );
}

export default App;
