import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'>
      {text}
    </button>
  );
};

// Default props
Button.defaultProps = {
  color: 'steelblue',
};

// Props types
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.array,
};

export default Button;
