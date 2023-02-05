import React, { useState } from 'react';

import Section from '../components/Section/Section';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics/Statistics';
import Notification from '../components/Notification/Notification';

const options = ['good', 'bad', 'neutral'];

const App = () =>{
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = type => {
    setFeedback(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + bad + neutral;
    };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((feedback.good / total) * 100);
  };
  const { good, neutral, bad } = feedback;


  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
export default App;









/*
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  // statistics
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((count, value) => {
      return count + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };
  //-----------------------------------------------------------
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
*/
