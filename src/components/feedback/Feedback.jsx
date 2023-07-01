import { Component } from 'react';
import css from './Feedback.module.css';



class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        positive: 0,
      }

      handlClickGood = () => {
        this.setState((prevState)=>{
            return {
                good:prevState.good + 1
            }
        })
      }
      handlClickNeutral = () => {
        this.setState((prevState)=>{
            return {
                neutral:prevState.neutral + 1
            }
        })
      }
      handlClickBad = () => {
        this.setState((prevState)=>{
            return {
                bad:prevState.bad + 1
            }
        })
      }
      countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

      countPositiveFeedbackPercentage = ({ good }) =>
         Math.round((good * 100) / this.countTotalFeedback(this.state));

    render() {
        return (
            <div className={css.btnContainer}>
                <h3>FEEDBACK</h3>
                    <button className={css.btnFeedback} onClick={this.handlClickGood}>Good</button>
                    <button className={css.btnFeedback} onClick={this.handlClickNeutral}>Neutral</button>
                    <button className={css.btnFeedback} onClick={this.handlClickBad}>Bad</button>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback(this.state)}</p>
                    <p>Positive Feedback: {this.countPositiveFeedbackPercentage(this.state)}%</p>
            </div>
        )
    }
    
}
export default Feedback