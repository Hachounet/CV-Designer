import PropTypes from 'prop-types';

export default function NameInput({ type, placeholder, inputValue, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
    />
  );
}

NameInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
