import PropTypes from 'prop-types';
import CVNameArea from './CVNameArea';

export default function CV({ className, firstName, lastName }) {
  const email = 'johnnydohidohy@email.com';
  const tel = '0600000000';

  const CVNameAreaClass = 'CV-name-area-class';

  return (
    <div className={className}>
      <CVNameArea
        className={CVNameAreaClass}
        firstName={firstName}
        lastName={lastName}
        email={email}
        tel={tel}
      ></CVNameArea>
    </div>
  );
}

CV.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
