import PropTypes from 'prop-types';
import { SectionEl, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Title>{title}</Title>
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

// Підскажіть будь ласка чи вірно описав проп тайпи, якщо я вірно зрозумів документацію, то для
// Реакт елементу, а у child я передаю саме реакт компонент, необхідно указувати PropTypes.element
