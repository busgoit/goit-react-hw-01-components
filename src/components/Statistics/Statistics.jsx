import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from 'utils/getRandomHexColor';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      {{ title } && (
        <h2
          className={css.title}
          style={{
            backgroundColor: `${getRandomHexColor()}`,
          }}
        >
          {title}
        </h2>
      )}

      <ul className={css.statList}>
        {statistics.map(stat => (
          <li
            key={stat.id}
            className={css.statListItem}
            style={{
              width: `calc(100% / ${statistics.length})`,
              backgroundColor: `${getRandomHexColor()}`,
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
