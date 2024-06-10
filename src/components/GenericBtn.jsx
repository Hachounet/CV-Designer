export default function GenericBtn({ fn, text }) {
  return (
    <button onClick={fn}>
      <span>{text}</span>
    </button>
  );
}
