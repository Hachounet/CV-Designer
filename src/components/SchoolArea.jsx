import PropTypes from 'prop-types';
import { useState } from 'react';
import NameInputs from './NameInputs';
import { v4 as uuidv4 } from 'uuid';

export default function NameArea({ className, addSchoolExpFn }) {
  let [school, setSchoolValue] = useState('');
  let [study, setStudyValue] = useState('');
  let [dateBegin, setDateBeginValue] = useState('');
  let [dateEnd, setDateEndValue] = useState('');

  const handleSchoolChange = (e) => {
    const value = e.target.value;
    setSchoolValue(value);
  };

  const handleStudyChange = (e) => {
    const value = e.target.value;
    setStudyValue(value);
  };

  const handleDateBeginChange = (e) => {
    const value = e.target.value;
    setDateBeginValue(value);
  };

  const handleDateEndChange = (e) => {
    const value = e.target.value;
    setDateEndValue(value);
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
  };

  const handleClick = () => {
    const array = [];
    array.push(school, study, dateBegin, dateEnd, uuidv4());
    addSchoolExpFn(array);
    setSchoolValue('');
    setStudyValue('');
    setDateBeginValue('');
    setDateEndValue('');
    handleReset();
  };

  return (
    <div className={className}>
      <NameInputs
        type="text"
        placeholder="School Name"
        value={school}
        onChange={handleSchoolChange}
      ></NameInputs>
      <NameInputs
        type="text"
        placeholder="Studies"
        value={study}
        onChange={handleStudyChange}
      ></NameInputs>
      <NameInputs
        type="date"
        placeholder="12/11/2024"
        value={dateBegin}
        onChange={handleDateBeginChange}
      ></NameInputs>
      <NameInputs
        type="date"
        placeholder="13/11/2024"
        value={dateEnd}
        onChange={handleDateEndChange}
      ></NameInputs>

      <button onClick={handleClick}>Validate</button>
    </div>
  );
}

NameArea.propTypes = {
  className: PropTypes.string,
  addSchoolExpFn: PropTypes.func,
};
