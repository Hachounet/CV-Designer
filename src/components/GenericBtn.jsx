export default function GenericBtn({ fn, text }) {
  return <button onClick={fn}>{text}</button>;
}
