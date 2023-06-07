// import PropTypes from 'prop-types'
import { H1 } from './Title.styled';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return <H1>{text}</H1>;
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
