import PropTypes from 'prop-types';

export default function DeleteBtn({ deleteFn }) {
  return <button onClick={deleteFn}>Delete</button>;
}

DeleteBtn.propTypes = {
  deleteFn: PropTypes.func,
};
