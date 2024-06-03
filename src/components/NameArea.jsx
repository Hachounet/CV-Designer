import PropTypes from 'prop-types';
import { useState } from 'react';
import NameInputs from './NameInputs';

export default function NameArea({
  className,
  editFirstName,
  editLastName,
  editEmail,
  editTel,
}) {
  let [inputFirstNameValue, setInputFirstNameValue] = useState('');
  let [inputLastNameValue, setInputLastNameValue] = useState('');
  let [inputEmailValue, setInputEmailValue] = useState('');
  let [inputTelValue, setInputTelValue] = useState('');

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setInputFirstNameValue(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setInputLastNameValue(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setInputEmailValue(value);
  };

  const handleTelChange = (e) => {
    const value = e.target.value;
    setInputTelValue(value);
  };

  const handleClick = () => {
    editFirstName(inputFirstNameValue);
    editLastName(inputLastNameValue);
    editEmail(inputEmailValue);
    editTel(inputTelValue);
  };

  return (
    <div className={className}>
      <NameInputs
        type="text"
        placeholder="First Name"
        value={inputFirstNameValue}
        onChange={handleFirstNameChange}
      ></NameInputs>
      <NameInputs
        type="text"
        placeholder="Last Name"
        value={inputLastNameValue}
        onChange={handleLastNameChange}
      ></NameInputs>
      <NameInputs
        type="text"
        placeholder="Email"
        value={inputEmailValue}
        onChange={handleEmailChange}
      ></NameInputs>
      <NameInputs
        type="text"
        placeholder="Tel Number"
        value={inputTelValue}
        onChange={handleTelChange}
      ></NameInputs>

      <button onClick={handleClick}>Validate</button>
    </div>
  );
}

NameArea.propTypes = {
  className: PropTypes.string,
  editData: PropTypes.func,
};
