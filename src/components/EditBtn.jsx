import PropTypes from 'prop-types';
import EditSVG from '../assets/edit.svg';

export default function EditBtn({ editFn }) {
  return (
    <button onClick={editFn}>
      <img
        src={EditSVG}
        alt="Edit Icon"
      />
    </button>
  );
}
