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
  const [inputFirstNameValue, setInputFirstNameValue] = useState('');
  const [inputLastNameValue, setInputLastNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputTelValue, setInputTelValue] = useState('');

  const handleFirstNameChange = (e) => {
    setInputFirstNameValue(e.target.value);
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

  const handleReset = () => {
    setInputFirstNameValue('');
    setInputLastNameValue('');
    setInputEmailValue('');
    setInputTelValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editFirstName(inputFirstNameValue);
    editLastName(inputLastNameValue);
    editEmail(inputEmailValue);
    editTel(inputTelValue);
    e.target.reset();
    handleReset();
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Validate</button>
      </form>
    </div>
  );
}

NameArea.propTypes = {
  className: PropTypes.string,
  editData: PropTypes.func,
};
