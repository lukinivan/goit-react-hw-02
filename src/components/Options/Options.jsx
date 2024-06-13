import s from "./Options.module.css";

export const Options = ({
  options,
  handleClick,
  handleReset,
  totalFeedback,
}) => {
  return (
    <ul className={s.cont}>
      {options.map((key) => (
        <li key={key}>
          <button
            className={s.btn}
            type="button"
            onClick={() => handleClick(key)}
          >
            {key}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button className={s.btn} type="button" onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
