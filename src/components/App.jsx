import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOption';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
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
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handlerClick}
          />
          </Section>
          <Section title="Statistics">
              {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
        )
    }
}
export default App
