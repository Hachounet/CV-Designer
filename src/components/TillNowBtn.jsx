export default function TillNowBtn({ className, tillNowFn }) {
  return (
    <label htmlFor="checkbox">
      Till now
      <input
        name="checkbox"
        id="checkbox"
        className={className}
        onClick={tillNowFn}
        type="checkbox"
      ></input>
    </label>
  );
}
