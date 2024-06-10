import PropTypes from 'prop-types';
import DeleteSVG from '../assets/delete.svg';

export default function DeleteBtn({ deleteFn }) {
  return (
    <button onClick={deleteFn}>
      <img
        src={DeleteSVG}
        alt="Delete icon"
      />
    </button>
  );
}

DeleteBtn.propTypes = {
  deleteFn: PropTypes.func,
};
