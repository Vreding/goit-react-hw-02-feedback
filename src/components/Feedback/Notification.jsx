import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Notification = ({ message }) => (
  <p className={s.Notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
