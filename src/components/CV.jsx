import PropTypes from 'prop-types';
import CVNameArea from './CVNameArea';
import CVSchoolArea from './CVSchoolArea';
import CVWorkArea from './CVWorkArea';

export default function CV({
  className,
  firstName,
  lastName,
  email,
  tel,
  schoolExpArray,
  workExpArray,
  editFn,
  workEditFn,
}) {
  const CVNameAreaClass = 'CV-name-area-class';
  const CVSchoolAreaClass = 'CV-school-area-class';
  const CVWorkAreaClass = 'CV-work-area-class';

  return (
    <div className={className}>
      <CVNameArea
        className={CVNameAreaClass}
        firstName={firstName}
        lastName={lastName}
        email={email}
        tel={tel}
      ></CVNameArea>
      <CVSchoolArea
        className={CVSchoolAreaClass}
        array={schoolExpArray}
        editFn={editFn}
      ></CVSchoolArea>
      <CVWorkArea
        className={CVWorkAreaClass}
        array={workExpArray}
        editFn={workEditFn}
      ></CVWorkArea>
    </div>
  );
}

CV.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
