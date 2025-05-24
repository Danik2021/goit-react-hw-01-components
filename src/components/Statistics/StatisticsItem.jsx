import css from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ data }) => {
  const { label, percentage } = data;
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
