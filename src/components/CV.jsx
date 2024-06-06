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
  deleteFn,
}) {
  const CVNameAreaClass = 'CV-name-area-class';
  const CVSchoolAreaClass = 'CV-school-area-class';
  const CVWorkAreaClass = 'CV-work-area-class';

  const positionTitleClass = 'position-title';
  const schoolClass = 'school-title';
  const enterpriseClass = 'enterprise';
  const studiesClass = 'studies';
  const dateClass = 'date';

  const CSSHelperObj = {
    position: positionTitleClass,
    school: schoolClass,
    enterprise: enterpriseClass,
    studies: studiesClass,
    date: dateClass,
  };

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
        deleteFn={deleteFn}
        cssHelpers={CSSHelperObj}
      ></CVSchoolArea>
      <CVWorkArea
        className={CVWorkAreaClass}
        array={workExpArray}
        editFn={workEditFn}
        deleteFn={deleteFn}
        cssHelpers={CSSHelperObj}
      ></CVWorkArea>
    </div>
  );
}

CV.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
