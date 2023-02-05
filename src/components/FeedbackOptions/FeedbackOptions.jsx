import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.scss';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={styles.optionsWrapper}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={styles.button}
            onClick={() => onLeaveFeedback(option)}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
