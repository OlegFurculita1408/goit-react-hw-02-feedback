import { Component } from 'react';
import SectionTitle from "./feedback/SectionTitle";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  countTotalFeedback(){
    return this.state.good+this.state.neutral+this.state.bad;
  }

  handlerClick = (data) => {
    this.setState({ [data]: this.state[data]+1});
  }

   render(){
    return (
      <div>
          <h1>Please leave feedback</h1>
          <SectionTitle state={this.state} total={()=>this.countTotalFeedback()} handlerClick={this.handlerClick}/>
      </div>
        )
    }
}
export default App
