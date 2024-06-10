import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import NameInputs from './NameInputs';
import IsDisabledInput from './IsDisabledInput';
import { v4 as uuidv4 } from 'uuid';
import TillNowBtn from './TillNowBtn';
import SubmitBtn from './SubmitBtn';

export default function WorkArea({
  className,
  addWorkExpFn,
  workEditionBoolean,
  workDataToEdit,
  checkboxClass,
  tillNowFn,
  tillNowDisabled,
}) {
  const [work, setWorkValue] = useState('');
  const [enterprise, setEnterpriseValue] = useState('');
  const [responsabilities, setResponsabilitiesValue] = useState('');
  const [dateBegin, setDateBeginValue] = useState('');
  const [dateEnd, setDateEndValue] = useState('');
  const btnTitleInitState = 'Validate';
  const btnTitleSecondState = 'Edit';
  const [btnTitle, setBtnTitle] = useState(btnTitleInitState);

  useEffect(() => {
    console.log(workEditionBoolean);
    if (workEditionBoolean && workDataToEdit) {
      console.log('Inside useEffect');
      console.log(workDataToEdit);
      setWorkValue(workDataToEdit.work);
      setEnterpriseValue(workDataToEdit.enterprise);
      setResponsabilitiesValue(workDataToEdit.responsabilities);
      setDateBeginValue(workDataToEdit.dateBegin);
      setDateEndValue(workDataToEdit.dateEnd);
      setBtnTitle(btnTitleSecondState);
    }
  }, [workEditionBoolean, workDataToEdit]);

  const handleWorkChange = (e) => {
    e.preventDefault();
    setWorkValue(e.target.value);
  };

  const handleEnterpriseChange = (e) => {
    setEnterpriseValue(e.target.value);
  };

  const handleRespChange = (e) => {
    setResponsabilitiesValue(e.target.value);
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
    setResponsabilitiesValue('');
    setDateBeginValue('');
    setDateEndValue('');
    setBtnTitle(btnTitleInitState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const array = [
      work,
      enterprise,
      responsabilities,
      dateBegin,
      tillNowDisabled ? 'now' : dateEnd,
      workDataToEdit.key !== undefined ? workDataToEdit.key : uuidv4(),
    ];

    console.log(array);
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
          type="text"
          placeholder="Description of responsabilities"
          value={responsabilities}
          onChange={handleRespChange}
        />
        <NameInputs
          type="date"
          placeholder="12/11/2024"
          value={dateBegin}
          onChange={handleDateBeginChange}
        />
        <IsDisabledInput
          type="date"
          placeholder="13/11/2024"
          value={dateEnd}
          onChange={handleDateEndChange}
          tillNowDisabled={tillNowDisabled}
        />
        <TillNowBtn
          className={checkboxClass}
          tillNowFn={tillNowFn}
        />

        <SubmitBtn btnTitle={btnTitle}></SubmitBtn>
      </form>
    </div>
  );
}

WorkArea.propTypes = {
  className: PropTypes.string,
  addWorkExpFn: PropTypes.func,
  workEditionBoolean: PropTypes.bool,
  workDataToEdit: PropTypes.object,
};
