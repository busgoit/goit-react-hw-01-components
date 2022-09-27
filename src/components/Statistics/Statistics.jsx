import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/getRandomHexColor';
import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, statistics }) => {
  return (
    <Section>
      {{ title } && <Title>{title}</Title>}

      <StatList>
        {statistics.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
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
