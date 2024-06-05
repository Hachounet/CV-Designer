import PropTypes from 'prop-types';
import EditBtn from './EditBtn';

export default function CVSchoolArea({ className, array, editFn }) {
  return (
    <div className={className}>
      <h2>School and Studies Experiences</h2>
      <ul>
        {array.map((subArray) => {
          const key = subArray[subArray.length - 1]; // Utiliser le dernier élément comme clé
          return (
            <li
              key={key}
              data-key={key}
            >
              <span>{subArray[0]}</span> - <span>{subArray[1]}</span>
              <br /> From<span>{subArray[2]}</span> to{' '}
              <span>{subArray[3]}</span>
              <EditBtn editFn={editFn}></EditBtn>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CVSchoolArea.propTypes = {
  className: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.array).isRequired,
};
