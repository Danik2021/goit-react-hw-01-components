import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {data.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
