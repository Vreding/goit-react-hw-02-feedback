import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.Statistics}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p className={s.PositiveFeedback}>
      Positive Feedback: {positivePercentage.toFixed(2)} %
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
