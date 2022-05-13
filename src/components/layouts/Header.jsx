import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd, toggleModal }) => {
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

Header.defaultProps = {
  title: 'Simba Todo App',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
