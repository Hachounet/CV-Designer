import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import NameInputs from './NameInputs';
import { v4 as uuidv4 } from 'uuid';

export default function SchoolArea({
  className,
  addSchoolExpFn,
  schoolEditionBoolean,
  dataToEdit,
  toggleEditionBoolean,
}) {
  const [school, setSchoolValue] = useState('');
  const [study, setStudyValue] = useState('');
  const [dateBegin, setDateBeginValue] = useState('');
  const [dateEnd, setDateEndValue] = useState('');

  useEffect(() => {
    if (schoolEditionBoolean === true) {
      console.log('Inside useEffect');
      console.log(dataToEdit.school);
      setSchoolValue(dataToEdit.school || '');
      setStudyValue(dataToEdit.study || '');
      setDateBeginValue(dataToEdit.dateBegin || '');
      setDateEndValue(dataToEdit.dateEnd || '');
    }
  }, [schoolEditionBoolean, dataToEdit]);

  const handleSchoolChange = (e) => {
    setSchoolValue(e.target.value);
  };

  const handleStudyChange = (e) => {
    setStudyValue(e.target.value);
  };

  const handleDateBeginChange = (e) => {
    setDateBeginValue(e.target.value);
  };

  const handleDateEndChange = (e) => {
    setDateEndValue(e.target.value);
  };

  const handleReset = () => {
    setSchoolValue('');
    setStudyValue('');
    setDateBeginValue('');
    setDateEndValue('');
  };

  const handleClick = () => {
    const array = [school, study, dateBegin, dateEnd, uuidv4()];
    addSchoolExpFn(array);
    handleReset();
    // toggleEditionBoolean();
  };

  return (
    <div className={className}>
      <NameInputs
        type="text"
        placeholder="School Name"
        value={school}
        onChange={handleSchoolChange}
      />
      <NameInputs
        type="text"
        placeholder="Studies"
        value={study}
        onChange={handleStudyChange}
      />
      <NameInputs
        type="date"
        placeholder="12/11/2024"
        value={dateBegin}
        onChange={handleDateBeginChange}
      />
      <NameInputs
        type="date"
        placeholder="13/11/2024"
        value={dateEnd}
        onChange={handleDateEndChange}
      />
      <button onClick={handleClick}>Validate</button>
    </div>
  );
}

SchoolArea.propTypes = {
  className: PropTypes.string,
  addSchoolExpFn: PropTypes.func,
  schoolEditionBoolean: PropTypes.bool,
  dataToEdit: PropTypes.object,
  toggleEditionBoolean: PropTypes.func,
};
