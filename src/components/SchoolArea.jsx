import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import NameInputs from './NameInputs';
import { v4 as uuidv4 } from 'uuid';
import SubmitBtn from './SubmitBtn';

export default function SchoolArea({
  className,
  addSchoolExpFn,
  schoolEditionBoolean,
  dataToEdit,
}) {
  const [school, setSchoolValue] = useState('');
  const [study, setStudyValue] = useState('');
  const [dateBegin, setDateBeginValue] = useState('');
  const [dateEnd, setDateEndValue] = useState('');
  const btnTitleInitState = 'Validate';
  const [btnTitle, setBtnTitle] = useState(btnTitleInitState);

  useEffect(() => {
    if (schoolEditionBoolean && dataToEdit) {
      console.log('Inside useEffect');
      console.log(dataToEdit.school);
      setSchoolValue(dataToEdit.school);
      setStudyValue(dataToEdit.study);
      setDateBeginValue(dataToEdit.dateBegin);
      setDateEndValue(dataToEdit.dateEnd);
      setBtnTitle('Edit');
    }
  }, [schoolEditionBoolean, dataToEdit]);

  const handleSchoolChange = (e) => {
    e.preventDefault();
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
    setBtnTitle(btnTitleInitState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = [
      school,
      study,
      dateBegin,
      dateEnd,
      dataToEdit.key !== undefined ? dataToEdit.key : uuidv4(),
    ];
    addSchoolExpFn(array);
    e.target.reset();
    handleReset();
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
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
        <SubmitBtn btnTitle={btnTitle}></SubmitBtn>
      </form>
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
