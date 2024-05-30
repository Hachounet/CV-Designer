import PropTypes from 'prop-types';
import { useState } from 'react';
import NameInputs from './NameInputs';

export default function NameArea({ className, editData }) {
  let [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClick = () => {
    console.log(inputValue);
    editData(inputValue);
  };

  return (
    <div className={className}>
      <NameInputs
        type="text"
        placeholder="First Name"
        value={inputValue}
        onChange={handleChange}
      ></NameInputs>

      <button onClick={handleClick}>Validate</button>
    </div>
  );
}

NameArea.propTypes = {
  className: PropTypes.string,
  editData: PropTypes.func,
};
