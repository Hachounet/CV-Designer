import PropTypes from 'prop-types';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';

export default function CVWorkArea({
  className,
  array,
  editFn,
  deleteFn,
  cssHelpers,
}) {
  return (
    <div className={className}>
      <h2>Work Experiences</h2>
      <ul>
        {array.map((subArray) => {
          const key = subArray[subArray.length - 1]; // Use last element as React key
          return (
            <li
              key={key}
              data-key={key} // Used for find/edit functions
            >
              <span className={cssHelpers.position}>{subArray[0]}</span> -{' '}
              <span className={cssHelpers.enterprise}>{subArray[1]}</span>
              <br />
              Reponsabilities : <span>{subArray[2]}</span>
              <br /> From <span className={cssHelpers.date}>{subArray[3]}</span>
              {'  '}
              to <span className={cssHelpers.date}>{subArray[4]}</span>
              <EditBtn editFn={editFn}></EditBtn>
              <DeleteBtn deleteFn={deleteFn}></DeleteBtn>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CVWorkArea.propTypes = {
  className: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.array).isRequired,
  editFn: PropTypes.func,
};
