import PropTypes from 'prop-types';
import EditBtn from './EditBtn';

export default function CVNameArea({
  className,
  firstName,
  lastName,
  email,
  tel,
}) {
  return (
    <div className={className}>
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>
      <p>{tel}</p>
    </div>
  );
}

CVNameArea.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  tel: PropTypes.string,
};
