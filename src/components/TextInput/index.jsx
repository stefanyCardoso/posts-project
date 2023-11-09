import Type from 'prop-types';
import './styles.css';

export const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input
      className="input"
      onChange={handleChange}
      value={searchValue}
      type="search"
    />
  );
};

TextInput.propTypes = {
  handleChange: Type.func.isRequired,
  searchValue: Type.string,
};
