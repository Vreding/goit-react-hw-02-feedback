import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={s.Title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
