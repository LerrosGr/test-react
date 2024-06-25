import css from './Game.module.css';

export default function Game({
  questions,
  question: { title, variants, correct },
  onClickVariant,
  step,
}) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <>
      <div className={css.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={css.progressColor}
        ></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <li
            onClick={() => {
              onClickVariant(index);
            }}
            key={variant}
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
