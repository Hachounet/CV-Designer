import PropTypes from 'prop-types';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';

export default function CVSchoolArea({
  className,
  array,
  editFn,
  deleteFn,
  cssHelpers,
}) {
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
              <span className={cssHelpers.school}>{subArray[0]}</span> -{' '}
              <span className={cssHelpers.studies}>{subArray[1]}</span>
              <br /> From <span className={cssHelpers.date}>
                {subArray[2]}
              </span>{' '}
              to <span className={cssHelpers.date}>{subArray[3]}</span>
              <EditBtn editFn={editFn}></EditBtn>
              <DeleteBtn deleteFn={deleteFn}></DeleteBtn>
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
