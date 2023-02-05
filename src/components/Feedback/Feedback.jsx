import React, { useState } from 'react';

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';


const options = ['good', 'bad', 'neutral'];



const Feedback = () =>{
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedback => {
    setFeedbacks(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbacks;
    return good + bad + neutral;
    };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    const { good } = feedbacks;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const { good, neutral, bad } = feedbacks;
  const totalFeedbackCount = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();


  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positivePercentage={positiveFeedback}
          ></Statistics>
      </Section>
    </>
  );
};
export default Feedback;
