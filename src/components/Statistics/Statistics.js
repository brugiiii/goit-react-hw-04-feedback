import PropTypes from 'prop-types';
import { Stats, Item, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <Item>
        Good: <Value>{good}</Value>
      </Item>
      <Item>
        Neutral: <Value>{neutral}</Value>
      </Item>
      <Item>
        Bad: <Value>{bad}</Value>
      </Item>
      <Item>
        Total: <Value>{total}</Value>
      </Item>
      <Item>
        Posetive feedback: <Value>{positivePercentage}%</Value>
      </Item>
    </Stats>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
