import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import NameInputs from './NameInputs';
import { v4 as uuidv4 } from 'uuid';

export default function WorkArea({
  className,
  addWorkExpFn,
  workEditionBoolean,
  workDataToEdit,
}) {
  const [work, setWorkValue] = useState('');
  const [enterprise, setEnterpriseValue] = useState('');
  const [dateBegin, setDateBeginValue] = useState('');
  const [dateEnd, setDateEndValue] = useState('');
  const btnTitleInitState = 'Validate';
  const [btnTitle, setBtnTitle] = useState(btnTitleInitState);

  useEffect(() => {
    if (workEditionBoolean && workDataToEdit) {
      console.log('Inside useEffect');
      console.log(workDataToEdit.work);
      setWorkValue(workDataToEdit.work);
      setEnterpriseValue(workDataToEdit.enterprise);
      setDateBeginValue(workDataToEdit.dateBegin);
      setDateEndValue(workDataToEdit.dateEnd);
      setBtnTitle('Edit');
    }
  }, [workEditionBoolean, workDataToEdit]);

  const handleWorkChange = (e) => {
    e.preventDefault();
    setWorkValue(e.target.value);
  };

  const handleEnterpriseChange = (e) => {
    setEnterpriseValue(e.target.value);
  };

  const handleDateBeginChange = (e) => {
    setDateBeginValue(e.target.value);
  };

  const handleDateEndChange = (e) => {
    setDateEndValue(e.target.value);
  };

  const handleReset = () => {
    setWorkValue('');
    setEnterpriseValue('');
    setDateBeginValue('');
    setDateEndValue('');
    setBtnTitle(btnTitleInitState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = [
      work,
      enterprise,
      dateBegin,
      dateEnd,
      workDataToEdit.key !== undefined ? workDataToEdit.key : uuidv4(),
    ];
    addWorkExpFn(array);
    e.target.reset();
    handleReset();
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <NameInputs
          type="text"
          placeholder="Work position"
          value={work}
          onChange={handleWorkChange}
        />
        <NameInputs
          type="text"
          placeholder="Enterprise"
          value={enterprise}
          onChange={handleEnterpriseChange}
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
        <button type="submit">{btnTitle}</button>
      </form>
    </div>
  );
}

WorkArea.propTypes = {
  className: PropTypes.string,
  addSchoolExpFn: PropTypes.func,
  schoolEditionBoolean: PropTypes.bool,
  workDataToEdit: PropTypes.object,
};
