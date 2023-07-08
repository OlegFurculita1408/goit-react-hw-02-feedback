import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOption';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  countTotalFeedback(){
    return this.state.good+this.state.neutral+this.state.bad;
  }

  handlerClick = (e) => {
    const data = e.target.textContent.toLowerCase();
      this.setState(prevState => {
        return {
          [data]: prevState[data] + 1,
      };
    });
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((100 / total) * good || 0);
  }

   render(){
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
          <section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handlerClick}
          />
          </section>
          <section title="Statistics">
              {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <h3>There is no feedback</h3>
          )}
        </section>
      </div>
        )
    }
}
export default App
