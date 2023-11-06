import React from 'react';
import './CompareMeals.css';

class CompareMeals extends React.Component {
  render(){
    return (
      <section className="compare-meals">
        THIS IS comparing
        { /* Left Side Component for first meal with dropdown selector, reuse the meal description component inside */ } 
        { /* Right Side Component for second meal with dropdown selector, reuse the meal description component inside */ }
        { /* remember to change css dynamically highlighting the best option depending on comparison result */ }
        { /*
        
          idea was to highlight the best attributes of each meal and the provide a conclusion for the scenario
          example:

            meal 1                     |  meal 2                    | Conclusion
            cooking time 1: 20 minutes | cooking time 2: 85 minutes | If you care about cooking fast: meal 1
            caloriesPer100gr: 200kcal  | caloriesPer100gr: 110kcal  | If you promote healthy food: meal 2
            ingredients: ...           | ingredients: ...           | If you want to be practical (less ing): meal 1

            Total pros: 4              | Total pros: 2              | In general, meal 1 is the best
        */ }
      </section>
    );
  }
}

export default CompareMeals