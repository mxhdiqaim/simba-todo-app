import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, showAdd, toggleModal }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={toggleModal}
      />
    </header>
  );
};

// Default props
Header.defaultProps = {
  title: 'Simba Todo App',
};

// proptypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
