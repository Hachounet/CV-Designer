import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
export default function IsDisabledInput({
  type,
  placeholder,
  value,
  onChange,
  tillNowDisabled,
}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log('Am I launched ?');
    console.log(tillNowDisabled);
    if (tillNowDisabled === true) {
      setDisabled((previousState) => !previousState);
      console.log('iam inside useeffect from input');
      console.log(disabled);
    } else if (tillNowDisabled === false) {
      setDisabled((previousState) => !previousState);
    }
  }, [tillNowDisabled]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

IsDisabledInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
