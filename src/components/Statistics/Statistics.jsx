import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpers/getRandomHexColor';
import {
  StatisticsCard,
  StatisticsTitle,
  List,
  Item,
} from './Statistics.styled';
export const Statistics = ({ title, statis }) => {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <List>
        {statis.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span>{label}</span>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </List>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statis: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
